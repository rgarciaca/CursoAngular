(() => {

     class Avenger {
         nombre: string;
         equipo: string;
         nombreReal: string;

         puedePelear: boolean;
         peleasGanadas: number;


         constructor(nombre: string, equipo: string, nombreReal: string) {
             this.nombre = nombre;
             this.equipo = equipo;
             this.nombreReal = nombreReal;
             this.puedePelear = true;
             this.peleasGanadas = 0;
         }
     }


     const antman: Avenger = new Avenger('Antman', 'Capitan América', 'Scott');

     console.log(antman);
   
})();


