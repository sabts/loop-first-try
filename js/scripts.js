const values = [25, 13, 80, 60];
const printFirst10Numbers = () => {
  for (let i = values.length - 1; i >= 0; i--) {
    //no se pone un número en el ¨<= o =>¨ se coloca el nombre del valor.lenght y tambien se tiene que colocar solo el < o >
    //el primer valor es donde comienzas, el segundo (la condicion) es hasta donde quiero llegar, y el ++ es adelante y el -- es ir atras
    console.log(values[i]);
  }
};
printFirst10Numbers();
