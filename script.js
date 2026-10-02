document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       ELEMENTOS
    ================================================= */

    const intro =
        document.getElementById("intro");

    const hada =
        document.getElementById("hada");

    const explosion =
        document.getElementById("explosion");

    const flash =
        document.getElementById("flash");

    const invitacion =
        document.getElementById("invitacion");

    const particulas =
        document.getElementById("particulasMagicas");


    document.body.classList.add(
        "intro-activa"
    );



    /* =================================================
       CREAR PARTÍCULAS
    ================================================= */

    function crearParticula() {

        const particula =
            document.createElement("span");

        particula.classList.add(
            "particula"
        );


        /*
        Posición inicial
        */

        const x =
            Math.random() * 100;

        const y =
            35 +
            Math.random() * 45;


        particula.style.left =
            `${x}%`;

        particula.style.top =
            `${y}%`;


        /*
        Dirección
        */

        const movimientoX =
            (Math.random() - .5) * 500;

        const movimientoY =
            (Math.random() - .5) * 500;


        particula.style.setProperty(
            "--x",
            `${movimientoX}px`
        );

        particula.style.setProperty(
            "--y",
            `${movimientoY}px`
        );


        /*
        Duración aleatoria
        */

        const duracion =
            1.5 +
            Math.random() * 2;


        particula.style.setProperty(
            "--duracion",
            `${duracion}s`
        );


        particulas.appendChild(
            particula
        );


        /*
        Eliminar después
        */

        setTimeout(() => {

            particula.remove();

        }, duracion * 1000);

    }



    /* =================================================
       GENERADOR CONTINUO
    ================================================= */

    const generadorParticulas =
        setInterval(() => {

            for (
                let i = 0;
                i < 4;
                i++
            ) {

                crearParticula();

            }

        }, 180);



    /* =================================================
       EXPLOSIÓN MÁGICA
    ================================================= */

    function activarExplosion() {

        explosion.classList.add(
            "activa"
        );

        flash.classList.add(
            "activo"
        );

    }



    /* =================================================
       MOSTRAR INVITACIÓN
    ================================================= */

    function mostrarInvitacion() {

        activarExplosion();


        /*
        Esperamos el destello
        */

        setTimeout(() => {

            invitacion.classList.add(
                "visible"
            );

        }, 500);


        /*
        Cerramos intro
        */

        setTimeout(() => {

            intro.classList.add(
                "ocultar"
            );

            document.body.classList.remove(
                "intro-activa"
            );


            clearInterval(
                generadorParticulas
            );


        }, 1300);

    }



    /* =================================================
       SECUENCIA
    ================================================= */


    /*
    La hada comienza automáticamente.

    Después de aproximadamente 6 segundos
    llega al frente.
    */


    setTimeout(() => {

        mostrarInvitacion();

    }, 6000);



});