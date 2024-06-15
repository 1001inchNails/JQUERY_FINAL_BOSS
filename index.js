
    $(document).ready(function() {
        
    function gatetesFacts() {
        $.getJSON('https://meowfacts.herokuapp.com/?count=5', function(datos) {
            var factsArray = datos.data;
            $('#factList').empty();
            factsArray.forEach(fact => {
                $('#factList').append('<li>' + fact + '</li>');
            });
        });
    }
    gatetesFacts();
    setInterval(gatetesFacts, 10000);
});
