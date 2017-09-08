// Config variables
var maxVelocity = 12.5;
var minDistance = 100;
var particles = 125;

// Globals
var points = [];

// var fps multiplier
var StableAnimation = 1.0;

function createPoint() {
    points.push({
        X: random() * windowWidth,
        Y: random() * windowHeight,
        Velocity: {
            X: (maxVelocity * -1 / 2) + random() * maxVelocity * StableAnimation,
            Y: (maxVelocity * -1 / 2) + random() * maxVelocity * StableAnimation
        },
        alpha: 1,
        connections: 0
    });
}
// Functions
function createPoints() {
    for (var i = 0; i < particles; i++) {
        createPoint();
    }
}

// 
function updatePoints() {
    for (var i = points.length - 1; i > -1; i--) {
        // Update alpha - Fades points in
        if (points[i].alpha < 255) {
            points[i].alpha += 5 * StableAnimation;
            if (points[i].alpha > 255) {
                points[i].alpha = 255;
            }
        }
        // Move based on velocity
        points[i].X += points[i].Velocity.X * 0.1;
        points[i].Y += points[i].Velocity.Y * 0.1;

        fill(color(255, 255, 255, points[i].alpha));
        // Draw points
        ellipse(points[i].X, points[i].Y, 5, 5);

        // Invert velocity if out of bounds
        if (points[i].X > windowWidth || points[i].X < 0) {
            points[i].Velocity.X *= -1;
        }

        if (points[i].Y > windowHeight || points[i].Y < 0) {
            points[i].Velocity.Y *= -1;
        }
    }
}

// 
function connectPoints() {
    for (var i = 0; i < points.length; i++) {
        points[i].connections = 0;
        for (var j = 0; j < points.length; j++) {
            
            var distance = dist(points[i].X, points[i].Y, points[j].X, points[j].Y)
            if (distance < minDistance) {
                // Increate connections counter
                points[i].connections++;

                // Set alpha based on distance
                stroke(255, 255, 255, (1 - (distance / minDistance)) * points[i].alpha);

                // Connect points
                line(points[i].X, points[i].Y, points[j].X, points[j].Y);
            }
        }
    }
}

// Set up
function setup() {
    // 60FPS Masterrace
    frameRate(60)

    // Set up text
    textSize(32);

    // Create area
    createCanvas(windowWidth, windowHeight).parent($("#p5Layer")[0]);
    createPoints();
}

// Draw loop
function draw() {
    clear();
    background(0, 144 - 64, 255 - 64, 222 + sin(frameCount / 50) * 32);
    StableAnimation = frameRate() / 60;


    updatePoints();
    connectPoints();

    // Display FPS Counter
    text(Math.round(frameRate()), windowWidth - 35, windowHeight - 10);

    // Dynamic node decrease if fps is too low
    if (StableAnimation < 0.25) {
        // Sort by amount of connections
        points.sort(function (a, b) { a.connections > b.connections });

        // Remove last point
        var removed = points.pop();
        console.log("Removed node with " + removed.connections + " connections");
        
    } else {
        if (StableAnimation > 0.75) {
            createPoint();
        }
    }
    
    
}