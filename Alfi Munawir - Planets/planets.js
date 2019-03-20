$(document).ready( function () {
    var table = $('#example').DataTable( {
      ajax: 'planets.json',
      processing: true
    } );
})
$('#reload').click( function () {
    table.ajax.reload();
  } );