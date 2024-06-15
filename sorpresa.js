
    $(document).ready(function() {
    var casillas = {
        1: "vacio",
        2: "vacio",
        3: "vacio",
        4: "vacio",
        5: "vacio",
        6: "vacio",
        7: "vacio",
        8: "vacio",
        9: "vacio"
    };
    let turno = 1;
    let gameOver=false;
    let nameCheck=false;

    function checkGanador() {
        for (let i = 1; i <= 3; i++) {
            if (casillas[i] !== "vacio" && casillas[i] === casillas[i + 3] && casillas[i] === casillas[i + 6]) {
                if(casillas[i]==nombreJ1){
                    $(".contenedorTexto").html(`<strong>${nombreJ1} ha ganado</strong>`);
                    mensajeFinJuego();
                }else{
                    $(".contenedorTexto").html(`<strong>${nombreJ2} ha ganado</strong>`);
                    mensajeFinJuego();
                }
                return;
            }
        }    
        for (let i = 1; i <= 7; i+=3) {
            if (casillas[i] !== "vacio" && casillas[i] === casillas[i + 1] && casillas[i] === casillas[i + 2]) {
                if(casillas[i]==nombreJ1){
                    $(".contenedorTexto").html(`<strong>${nombreJ1} ha ganado</strong>`);
                    mensajeFinJuego();
                }else{
                    $(".contenedorTexto").html(`<strong>${nombreJ2} ha ganado</strong>`);
                    mensajeFinJuego();
                }
                return;
            }
        }    
        if (casillas[1] !== "vacio" && casillas[1] === casillas[5] && casillas[1] === casillas[9]) {
            if(casillas[1]==nombreJ1){
                $(".contenedorTexto").html(`<strong>${nombreJ1} ha ganado</strong>`);
                mensajeFinJuego();
            }else{
                $(".contenedorTexto").html(`<strong>${nombreJ2} ha ganado</strong>`);
                mensajeFinJuego();
            }
            return;
        }
        if (casillas[3] !== "vacio" && casillas[3] === casillas[5] && casillas[3] === casillas[7]) {
            if(casillas[3]==nombreJ1){
                $(".contenedorTexto").html(`<strong>${nombreJ1} ha ganado</strong>`);
                mensajeFinJuego();
            }else{
                $(".contenedorTexto").html(`<strong>${nombreJ2} ha ganado</strong>`);
                mensajeFinJuego();
            }
            return;
        }    
        if (Object.values(casillas).every(value => value !== "vacio")) {
            $(".contenedorTexto").html("<strong>EMPATE</strong>");
            
            $(".main").children().not(".contenedorTexto2").remove();

            var iframeContainer = $('<div>', {class: 'iframe-container'});
            var iframe = $('<iframe>', {
            src: 'https://www.youtube.com/embed/qy0AhAbR5as?autoplay=1',
            width: '560',
            height: '315',
            frameborder: '0',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen: true
    });
    iframeContainer.append(iframe);
    $('.main').append(iframeContainer);

        setTimeout(function() {
            location.reload();
        }, 10000);
            
        }
    }
    let nombreJ1=null,nombreJ2=null;//

    

    $("#agregar").click(function() {
        console.log("//////");
        nombreJ1 = $("#nombre1").val();
        nombreJ2 = $("#nombre2").val();
        if (nombreJ1.trim() === '') {
            alert('Por favor numero 1, introduzca un nombre valido');
            return;
        };
        if (nombreJ2.trim() === '') {
            alert('Por favor numero 2, introduzca un nombre valido');
            return;
        };
        if(nombreJ1!=null && nombreJ2!=null){
            nameCheck=true;
            $(".contenedorTexto").html(`<strong>Turno de ${nombreJ1}</strong>`);
        }
    });


    

    function mensajeFinJuego() {
        $.getJSON('https://random.dog/woof.json?ref=public_apis', function(data) {
            const imageUrl = data.url;

            $(".main").empty();
            $(".main").append(`<img id="secretDog" src="${imageUrl}">`);
    
            setTimeout(function() {
                location.reload();
            }, 5000);
        });
    }
    

    $(".contenedor").on("click", ".casilla", function() {

        var casillaId = $(this).data("casilla");

        if (casillas[casillaId] === "vacio" && gameOver===false && nameCheck===true) {

            var imgElement = $(this).find('img');

            if (turno === 1) {
                imgElement.attr('src', 'tile_1.png');
                casillas[casillaId] = nombreJ1;
                turno = 2;
                $(".contenedorTexto").html(`<strong>Turno de ${nombreJ2}</strong>`);
            } else {
                imgElement.attr('src', 'tile_2.png');
                casillas[casillaId] = nombreJ2;
                turno = 1;
                $(".contenedorTexto").html(`<strong>Turno de ${nombreJ1}</strong>`);
            }
            checkGanador();
        }
    });
});
