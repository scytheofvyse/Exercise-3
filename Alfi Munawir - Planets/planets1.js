$(document).ready(function() {
    $('#planets').DataTable({
        "processing": true,
        "serverSide": false,
        "ajax": {
        "url":"planets.json",
        dataSrc: "data"
    },
        "columns": [
                { "data" : "name" },
                { "data" : "rotation_period" },
                { "data" : "orbital_period" },
                { "data" : "diameter" },
                { "data" : "climate" },
                { "data" : "gravity" },
                { "data" : "terrain" },
                { "data" : "surface_water" },
                { "data" : "population" }
                ]
            }
        );
} );