(() => {

    const retirarDinero = ( cantidadRetirar: number ) => {
        
        let dineroActual = 2125;

        return new Promise( (resolve, reject ) => {
            if ( cantidadRetirar > dineroActual ) {
                reject('No hay suficiente dinero');
            } else {
                dineroActual -= cantidadRetirar;
                resolve( `Retirada realizada. Saldo actual ${ dineroActual }` );
            }
        } );
    }


    retirarDinero( 500 )
        .then( console.log )
        .catch( console.warn );
   
})();


