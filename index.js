
    $(document).ready(function() {
        
    function gatetesFacts() {    // recogida datos de api, iteracion y adicion de facts
        $.getJSON('https://meowfacts.herokuapp.com/?count=5', function(datos) {
            var factsArray = datos.data;
            $('#factList').empty();    // vaciamos facts antes de meter nuevos
            factsArray.forEach(fact => {
                $('#factList').append('<li>' + fact + '</li>');
            });
        });
    }
    gatetesFacts();
    setInterval(gatetesFacts, 10000);    // cambio de facts por nuevos cada 10 segundos
});
