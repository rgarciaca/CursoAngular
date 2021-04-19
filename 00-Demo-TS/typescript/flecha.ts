(function() {

    const miFuncion = function(a: string) {
        return a;
    }

    const miFuncionF = (a: string) => {
        return a.toUpperCase();
    }

    const miFuncionF2 = (a: string) => a.toUpperCase();

    console.log(miFuncion('Normal'));
    console.log(miFuncionF('Flecha'));
    console.log(miFuncionF2('Flecha reducida'));

    const sumarN = function( a: number, b: number ) {
        return a + b;
    }

    const sumarNF = ( a: number, b: number ) => (a + b);

    console.log(sumarN(5, 10));
    console.log(sumarNF(20, 6));

    const hulk = {
        nombre: 'hulk',
        smash() {

            setTimeout(() => {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000 );
            
        }
    }

    hulk.smash();

})();


