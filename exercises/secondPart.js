/*second part
https://www.youtube.com/watch?v=z95mZVUcJ-E&t=7041s
time: 3:34:00*/

function partySmith(){
/*Problema A: El señor de la calle ganó la lotería
y realizó una fiesta para celebrar dicho acontesimiento
entonces compro una maquina que;

Deja pasar solo a los +18
El primero que entre después de las 2 am, NO PAGA
*/
    let free = false;

    const validarCliente = (time)=>{
        let edad = prompt("Cuál es tu edad?");
        if(edad >= 18){
            if(time >= 2 && time < 7 && free == false){
                alert(`Puedes pasar gratis ya que son las ${time}hs de la mañana y eres el primero`);
                free = true;
            }else{
                alert(`Puedes pasar, pero tienes que pagar la entrada y son las ${time}`);
            }
        }else{
            alert("Eres menos de edad, no puedes pasar.")
        }
    }

    for(let i = 0; i < 8; i++){
        validarCliente(i);
    }
}

function coflaCollege(){
/*Problema B: Cofla no pudo iniciar las clases
ya que el sistema de registro se rompio y hasta
que se vuelva a arregla cofla no podrá asistir a 
clases de la u

Crear Mini-sistema para registrar presntes (P)
y ausentes (A)
Pasados 30 dias, mostrar su situación final del alumno
Maximo del 10% de ausencias*/

    let cantidad = prompt("cuantos alumnos son?");
    let alumnosTotales = [];

    for(let i = 0; i < cantidad; i++){
        alumnosTotales[i] = [prompt("Nombre del alumno?  " + (i+1)), 0];
    }

    const tomarAsistencia = (nombre, p) =>{
        let presencia = prompt(nombre);
        if(presencia == 'p' || presencia == 'P'){
            alumnosTotales[p][1]++;
        }
    }

    for(let i=0; i<30; i++){
        for(alumno in alumnosTotales){
            tomarAsistencia(alumnosTotales[alumno][0], alumno);
        }
    }

    for(alumno in alumnosTotales){
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        _______Presente: ${alumnosTotales[alumno][1]}<br>
        _______Ausencia: ${30 - alumnosTotales[alumno][1]}
        `;
        if(30 - alumnosTotales[alumno][1] > 18 ){
            resultado+= "<b style:color:red>Reprobado por Inasistencias</b>\n\n";
        }else{
            "\n\n";
        }
        document.write(resultado);
    }

}

function coflaCalculator(){
/*
Problema C: 
Cofla feliz de iniciar las clases, ya tiene sus
primeras tareas de calculo, pero para realizar sus
operaciones de manera simple, deberá crear una
calculadora que le simplifique el trabajo

Crear una calculadora que pueda:
sumar, restar, multiplicar y dividir

*/
    let calculator = prompt("que operación va a realizar? \n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");
    let operatorOne = parseFloat(prompt("Digite el primer valor a operar: "));
    let operatorTwo =  parseFloat(prompt("Digite el segundo valor a operar: "));
    switch(calculator){
        case '1': alert("el resultado es: " + sumator(operatorOne, operatorTwo)); break;
        case '2': alert("el resultado es: " + substractor(operatorOne, operatorTwo)); break;
        case '3': alert("el resultado es: " + multiplator(operatorOne, operatorTwo)); break;
        case '4': alert("el resultado es: " + divider(operatorOne, operatorTwo)); break;
    }
    function sumator(a,b){
        let c = a + b;
        return c;
    }
    function substractor(a,b){
        let c = a - b;
        return c;
    }
    function multiplator(a,b){
        let c = a * b;
        return c;
    }
    function divider(a,b){
        let c = a / b;
        return c;
    }
}
