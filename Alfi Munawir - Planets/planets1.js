$(document).ready(function() {
    $('#planets').DataTable( {
        "ajax": "planets.json",
        "columns": [
                { "results" : "name" },
                { "results" : "rotation_period" },
                { "results" : "orbital_period" },
                { "results" : "diameter" },
                { "results" : "climate" },
                { "results" : "gravity" }
                ]
            });
} );