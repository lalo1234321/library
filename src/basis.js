// let variable1 = 1;
// const constante1 = 2;

// function comprar() {
//     console.log("comer");
// }

// comprando = () => {
//     let a = 12;
//     let b = 11;
//     console.log(a+b);
// }

// comprar();
// comprando();`
// let cadena1 = "Hola me llamo";
// let cadena2 = "Tania";
// console.log(`esto es otra forma de concatenar ${cadena1} ${cadena2}`);


const temporizador = () => {
    const mensaje = "hola";
    setTimeout(()=>{
        console.log(mensaje);
    },5000);
}
temporizador();

let items=['a','b','c'];

items.map( item => {
    console.log(item);
});