$(document).ready(function() {
    function displayGatetes() {
        $.getJSON('https://api.thecatapi.com/v1/images/search?limit=10', function(data) {    // recogida info de api
            data.forEach(image => {    // iteracion sobre info, creacion de div y adicion de cartas de gatetes
                let card = $('<div class="card"><img src="'+image.url+'" alt="gatete"><div class="botones"><button class="borrar">Borrar</button><button class="favoritos">Favorito</button></div></div>');
                $('.cartas').append(card);
            });
            $('body').on('click', '.borrar', function() {    // boton borrado carta
                $(this).closest('.card').remove();
                setTimeout(nuevoGatete, 1000);     // nueva carta despues de 1 segundo
            });
            $('body').on('click', '.favoritos', function() {    // añade carta a favoritos
                $(this).closest('.card').appendTo('#favoritos')
                  .find('.favoritos')    // le quita el boton
                  .remove();
                $(this).closest('.card').addClass('favoritos-card');
                setTimeout(nuevoGatete, 1000);
            });
        });
    }
    function nuevoGatete() {    //crea nuevas cartas cuando una se añade a fav o se borra
        $.getJSON('https://api.thecatapi.com/v1/images/search?limit=1', function(data) {
            let newCard = $('<div class="card"><img src="' + data[0].url + '" alt="Cat"><div class="botones"><button class="borrar">Borrar</button><button class="favoritos">Favorito</button></div></div>');
            $('.cartas').append(newCard).show();
        });
    }
    displayGatetes();
});
