// Config variables
var maxVelocity = 12.5;
var minDistance = 100;
var particles = 125;

// Globals
var points = [];

// Functions
function createPoints() {
    for (var i = 0; i < particles; i++) {
        points.push({
            X: random() * windowWidth,
            Y: random() * windowHeight,
            Velocity: {
                X: (maxVelocity * -1 / 2) + random() * maxVelocity,
                Y: (maxVelocity * -1 / 2) + random() * maxVelocity
            }
        });
    }
}

// 
function updatePoints() {
    for (var i = points.length - 1; i > -1; i--) {
        // Move based on velocity
        points[i].X += points[i].Velocity.X * 0.1;
        points[i].Y += points[i].Velocity.Y * 0.1;

        fill(color(255, 255, 255, 255));
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
        for (var j = 0; j < points.length; j++) {
            var distance = dist(points[i].X, points[i].Y, points[j].X, points[j].Y)
            if (distance < minDistance) {
                stroke(255, 255, 255, (1 - (distance / minDistance)) * 255)
                line(points[i].X, points[i].Y, points[j].X, points[j].Y);
            }
        }
    }
}

// Set up
function setup() {
    // Create area
    createCanvas(windowWidth, windowHeight).parent($("#p5Layer")[0]);
    createPoints();
}

// Draw loop
function draw() {
    clear();
    background(0, 144, 255, 192 + sin(frameCount / 50) * 32);
    updatePoints();
    connectPoints();
}