(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }


    // const extraer = (avenger: any) => {
    //     const { nombre, clave, poder } = avenger

    //     console.log( nombre );
    //     console.log( clave );
    //     console.log( poder );
    // }

    const extraer = ({ nombre, clave, poder }: any) => {

        console.log( nombre );
        console.log( clave );
        console.log( poder );
    }


    extraer(avenger);
 

    console.log( avenger.nombre );
    console.log( avenger.clave );
    console.log( avenger.poder );


    const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];
    const [ thor, ironman, spiderman ] = avengers;

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
    
})();


