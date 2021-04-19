(() => {

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen ) => {
        console.log(`Enviado a ${ xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = ( xmen: Xmen ) => {
        console.log(`${ xmen.nombre} regresando al cuartel`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision( wolverine );
   
})();


