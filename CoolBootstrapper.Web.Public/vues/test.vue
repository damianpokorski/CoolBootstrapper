<template>
    <div class="row">
        <div class="col s4">
            <div class="card light-blue accent-3">
                <div class="card-content white-text">
                    <span class="card-title">Server 1</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light light-blue"><i class="material-icons">add</i></a>
                    <hr />
                    <p>
                        ETL: Running
                    </p>
                    <p>
                        Tableau: Running
                    </p>
                    <p>
                        Version: 1.0
                    </p>
                </div>
                <div class="card-action">
                    <a href="#" class="white-text">This is a link</a>
                    <a href="#" class="white-text">This is a link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
function createServer(){
    return {
        Name: 'Server 1',
        ETL: 'Running',
        Tableau: 'Running',
        Version: 'Test'
    }
}
module.exports = {
    data: function() {
        return {
            servers: [createServer()]
        }
    }
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>