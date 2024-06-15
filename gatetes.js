$(document).ready(function() {
    function displayGatetes() {
        $.getJSON('https://api.thecatapi.com/v1/images/search?limit=10', function(data) {
            data.forEach(image => {
                let card = $('<div class="card"><img src="'+image.url+'" alt="gatete"><div class="botones"><button class="borrar">Borrar</button><button class="favoritos">Favorito</button></div></div>');
                $('.cartas').append(card);
            });
            $('body').on('click', '.borrar', function() {
                $(this).closest('.card').remove();
                setTimeout(nuevoGatete, 1000); 
            });
            $('body').on('click', '.favoritos', function() {
                $(this).closest('.card').appendTo('#favoritos')
                  .find('.favoritos')
                  .remove();
                $(this).closest('.card').addClass('favoritos-card');
                setTimeout(nuevoGatete, 1000);
            });
        });
    }
    function nuevoGatete() {
        $.getJSON('https://api.thecatapi.com/v1/images/search?limit=1', function(data) {
            let newCard = $('<div class="card"><img src="' + data[0].url + '" alt="Cat"><div class="botones"><button class="borrar">Borrar</button><button class="favoritos">Favorito</button></div></div>');
            $('.cartas').append(newCard).show();
        });
    }
    displayGatetes();
});
