//Codigo del cuadrado
console.group("Cuadrados")
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm " ) */

function perimetroCuadrado(lado)
{
    return lado * 4;
}
/* console.log("El perimetro del cuadrado es de: " + perimetroCuadrado + " cm "); */
function areaCuadrado(lado)
{
    return lado * lado; 
}
/* console.log("El area de cuadrado es de: " + areaCuadrado + " cm^2 "); */
console.groupEnd();
//Codigo del triangulo
console.group("Triangulos")
/* const ladoUno = 6;
const ladoDos = 4;
const ladoTres = 6;
const altura =  5.5;
console.log("Los lados del triangulo miden: "+ ladoUno + " cm " + ladoDos + " cm, " + ladoTres + " cm. ");
console.log("La altura de mi trinagulo es de: " + altura + " cm .") */
function perimetroTriangulo (ladoUno, ladoDos, ladoBase)
{
    return ladoUno + ladoDos + ladoBase;
}
/* console.log("El perimetro del triangulo es de "+ perimetroTriangulo + " cm "); */
function areaTriangulo(altura, ladoBase)
{
    return (altura * ladoBase) / 2;
}
/* console.log("El area del triangulo es de "+ areaTriangulo + " cm^2 "); */
console.groupEnd();
//Codigo del circulo 
console.group("Circulos")
/* const pi = Math.PI;
const radio = 4;
const diametro = radio * 2;  */
/* console.log("PI es de: "+ pi);
console.log("Radio es de: "+ radio); */
function diametroCirculo(radio)
{
    return radio * 2
}
const PI = Math.PI;

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/* console.log("Perimetro del circulo es de: "+ perimetroCirculo + " cm "); */
function areaCirculo(radio)
{
    return (radio * radio) * PI;
}
/* console.log("area del circulo es de: "+ areaCirculo + " cm^2 "); */
console.groupEnd();

// Aqui interactuamos con el HTML
//Cuadrado 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }
  //Triangulo
  function calcularPerimetroCuadrado() {
    const inputLado = parseFloat(document.getElementById("InputCuadrado").value);
    const perimetro = perimetroCuadrado(inputLado);
    alert(perimetro);
  }
  function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1").value;
    
     
    const inputLado2 = document.getElementById("InputTrianguloLado1").value;
    
     
    const inputLado3 = document.getElementById("InputTrianguloLado1").value;
    
    
  
    const perimetro = perimetroTriangulo(inputLado1,inputLado2,inputLado3);
    alert(perimetro);
  }
 