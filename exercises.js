window.onload = function() {
    let selected = document.getElementById("selector");
    document.getElementById("selectorBtn").onclick = () => checker(selected);
}

// function checker(selected){
    
//     switch(selected.value){
//         case '1':
//             coflaIceCream();
//         break;
        
//         case '2':
//             coflaSpareMoney();
//         break;

//         case '3':
//             coflaGuilty();
//         break;

//         case '4':
//             partySmith();
//         break;

//         case '5':
//             coflaCollege();
//         break;

//         case '6':
//             coflaCalculator();
//         break;

//         case '7':
//             coflaInAndroidStore();
//         break;

//         case '8':
//             coflaGettingNewGames();
//         break;
//     }
// }

function checker(selected){
    const actions = {
        '1': coflaIceCream,
        '2': coflaSpareMoney,
        '3': coflaGuilty,
        '4': partySmith,
        '5': coflaCollege,
        '6': coflaCalculator,
        '7': coflaInAndroidStore,
        '8': coflaGettingNewGames
    };

    const action = actions[selected.value];
    if(action){
        action();
    }
}

{/*first part*/
function coflaIceCream(){
/*
    https://www.youtube.com/watch?v=z95mZVUcJ-E&t=7661s
    time: 1H:46m:00s

    Problema A: Tres chicos quieren comprar el helado mas caro que puedan con el dinero que tienen, asi que...
    Roberto tiene:  $1.5 USD
    Pedro tiene:    $1.7 USD
    Cofla tiene:    $3 USD

    Precio de los helados:

    Palito de helado de agua:           $0.6 USD
    Palito de helado de crema:          $1 USD
    Bombón helado marca heladix         $1.6 USD
    Bombón helado marca heladovich      $1.7 USD
    Bombón helado marca helardo         $1.8 USD
    Potecito de helado con confites     $2.9 USD
    Pote 1/4 KG                         $2.9 USD

    Ingresar el monto y mostrar el más caro
    si hay 2 o mas, mostrar ambos
    indicar el vuelto
*/
    let roberto  =   1.5;
    let pedro   =   1.7;
    let cofla   =   3;

    let helados = {
        Palito_de_helado_de_agua:           0.6,
        Palito_de_helado_de_crema:          1,
        Bombón_helado_marca_heladix:        1.6,
        Bombón_helado_marca_heladovich:     1.7,
        Bombón_helado_marca_helardo:        1.8,
        Potecito_de_helado_con_confites:    2.9,
        Pote_un_cuarto_KG:                  2.9
    }

    let money = prompt("quién está comprando? \n 1. Roberto: 1.5 \n 2. Pedro: 1.7 \n 3. Cofla: 3 \n 4. Otro/Otra");
    
    let results = 0; 

    switch(money){
        case '1': 
            results = roberto - helados.Palito_de_helado_de_crema;
            alert(`Roberto posee ${roberto} en dólares, con su capital le alcanza para comprar el helado Palito_de_helado_de_crema que tiene un costo de: ${helados.Palito_de_helado_de_crema} y le queda un restante de: ${results}`);
        break;
        
        case '2': 
            results = pedro - helados.Bombón_helado_marca_heladix;
            alert(`Pedro posee ${pedro} en dólares, con su capital le alcanza para comprar el helado Bombón_helado_marca_heladix que tiene un costo de: ${helados.Bombón_helado_marca_heladix} y le queda un restante de: ${results}`);
        break;
        
        case '3': 

            let coflasChoose = prompt(`
            Cofla posee ${cofla} en dólares, con su capital le alcanza para comprar dos helados\n
            1. Potecito de helado con confites que cuesta: ${helados.Potecito_de_helado_con_confites} \n 
            2. Pote de helado 1/4 KG que cuesta: ${helados.Pote_un_cuarto_KG}`);
            
            if(coflasChoose === '1'){
                results = cofla - helados.Potecito_de_helado_con_confites;
                alert(`Cofla compró el helado Potecito de helado con confites y le quedo un restante de: ${results}`);
            }else if(coflasChoose === '2'){
                results = cofla - helados.Pote_un_cuarto_KG;
                alert(`Cofla compró el helado Pote de helado 1/4 KG y le quedo un restante de: ${results}`);
            }else{
                alert('Cofla no eligió');
            }
        break;
        
        case '4':
            let moneyPlayer = prompt('¿De cuánto dinero dispone?: ');
            moneyPlayer = parseFloat(moneyPlayer);

            if (isNaN(moneyPlayer) || moneyPlayer <= 0) {
                alert('El monto ingresado no es válido.');
            }else if(moneyPlayer > 0 && moneyPlayer <= 0.5){
                alert('El monto que ingresó no es suficiente para comprar helados');
            }else if(moneyPlayer >= 0.6 && moneyPlayer < 1){
                results = moneyPlayer - helados.Palito_de_helado_de_agua;
                alert(`puede comprar el helado Palito de helado de agua que tiene un costo de: ${helados.Palito_de_helado_de_agua} dejandole un restante de: ${results}`);
            }else if(moneyPlayer >= 1 && moneyPlayer < 1.6){
                results = moneyPlayer - helados.Palito_de_helado_de_crema;
                alert(`puede comprar el helado Palito_de_helado_de_crema que tiene un costo de: ${helados.Palito_de_helado_de_crema} dejandole un restante de: ${results}`);
            }else if(moneyPlayer >= 1.6 && moneyPlayer < 1.7){
                results = moneyPlayer - helados.Bombón_helado_marca_heladix;
                alert(`puede comprar el helado Bombón_helado_marca_heladix que tiene un costo de: ${helados.Bombón_helado_marca_heladix} dejandole un restante de: ${results}`);
            }else if(moneyPlayer >= 1.7 && moneyPlayer < 1.8){
                results = moneyPlayer - helados.Bombón_helado_marca_heladovich;
                alert(`puede comprar el helado Bombón_helado_marca_heladovich que tiene un costo de: ${helados.Bombón_helado_marca_heladovich} dejandole un restante de: ${results}`);
            }else if(moneyPlayer >= 1.8 && moneyPlayer < 2.9){
                results = moneyPlayer - helados.Bombón_helado_marca_helardo;
                alert(`puede comprar el helado Bombón_helado_marca_helardo que tiene un costo de: ${helados.Bombón_helado_marca_helardo} dejandole un restante de: ${results}`);
            }else if(moneyPlayer >= 2.9){
                results = moneyPlayer - helados.Pote_un_cuarto_KG;
                alert(`puede comprar el helado Pote_un_cuarto_KG que tiene un costo de: ${helados.Pote_un_cuarto_KG}\n
                o comprar el helado Potecito_de_helado_con_confites que tiene un costo de: ${helados.Potecito_de_helado_con_confites} dejandole un restante de: ${results}`);
            }
        break;

        default:
            alert('Seleccione una opcion disponible');
        break;
    }

}

function coflaSpareMoney(){
/*
    https://www.youtube.com/watch?v=z95mZVUcJ-E&t=7661s
    time: 1H:46m:00s
    Problema B: Al final cofla no compró nada en la tienda de helados, al salir de la tienda regaló su dinero a un señor que vive en las calles, el señor aprovecha para comprar tickets de loteria
    
    Si le alcanza para comprar uno, lo compra.
    Si le alcanza para comprar dos, los compra.
    Si le alcanza para comprar tres, compra 2 y regala el vuelto.
    Se debe retornar que compro y el vuelto.
*/
    let coflaSpare = prompt('Cuanto dinero le dió cofla al vagabundo?: ');
    parseFloat(coflaSpare);
    if(isNaN(coflaSpare) || coflaSpare <= 0){
        alert('introduzca un monto viable');
    }else{
        let ticket = 1.25;
        let gift = 0;
        if(coflaSpare >= (ticket * 3) ){
            gift = coflaSpare - (ticket * 2);
            alert(`El señor compró 2 tickets y regaló el equivalente de ${gift}`);
        }else if(coflaSpare >= (ticket * 2) && coflaSpare < (ticket * 3)){
            gift = coflaSpare - (ticket * 2);
            alert(`El señor compro 2 tickets y le sobró el equivalente de ${gift}`);
        }else if(coflaSpare >= ticket && coflaSpare < (ticket * 2)){
            gift = coflaSpare - ticket;
            alert(`El señor compro 1 ticket y le sobro el equivalente de ${gift}`);
        }else{
            alert(`El señor no pudo comprar tickets ya que no alcanzaba el dinero`);
        }
    }
}

function coflaGuilty(){
    /*
    Problema c:
    Se creo un detector de mentiras que se usa en sospechosos, el detector tiene una presicion del 100% y se creó con la ayuda de javascript

    Si la persona miente el detector libera una pequeña descarga electrica
    Si la persona no miente el detector no hace nada
    Si el detector no consigue la respuesta, manda un mensaje de que debe ser mas clara la pregunta

    3 sospechosos fueron detenidos, acusados de asesinato en primer grado entre ellos cofla, ya que armó un alboroto al salir de la tienda de helados, debemos determinar quien es el culpable.
*/  

    let guilty = false;
    
    let Cofla  = {
        place: "barrio",
        time: "3:30pm",
        murder: false
    }
    
    let Ron = {
        place: "center",
        time: "8:30pm",
        murder: true
    }

    let Jhonny = {
        place: "barrio",
        time: "3:30pm",
        murder: true
    }

    let murderer = {
        place: "barrio",
        time: "3:30pm",
    }

    let quests =  [false, false, false];
    let questABC;

    do{
        let suspectSelected = prompt("Tenemos 3 sospechosos de asesinato\n1. Cofla\n2. Ron\n3. Jhonny\n Seleccione uno para iniciar el interrogatorio: ");
        suspectSelected = parseInt(suspectSelected);
        if(isNaN(suspectSelected) || suspectSelected < 1 || suspectSelected > 3){
            alert("seleccione una opcion valida");
            guilty = false;
        }else{
            switch(suspectSelected){
                case 1:
                    do{
                        questABC = prompt(`Bienvenido al interrogatorio señor Cofla\nResponda con un si o un no a las preguntas que se le va a realizar.\n El día del asesinato, usted estaba en el barrio?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[0] = false;
                        }else if(questABC === '1' && Cofla.place === 'barrio'){
                            alert("La maquina no hace nada");
                            quests[0] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[0] = false;
                        }
                    }while(quests[0] != true);
                        
                    do{
                        questABC = prompt(`Segunda pregunta: Estaba a las 3:30pm en el lugar?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[1] = false;
                        }else if(questABC === '1' && Cofla.time === '3:30pm'){
                            alert("La maquina no hace nada");
                            quests[1] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[1] = false;
                        }
                    }while(quests[1] != true);

                    do{
                        questABC = prompt(`Tercera pregunta: Asesino a alguien?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[2] = false;
                        }else if(questABC === '1' && Cofla.murder === false){
                            alert("la maquina dispara una pequeña descarga");
                            quests[2] = false;
                        }else{
                            alert("La maquina no hace nada");
                            quests[2] = true;
                        }
                    }while(quests[2] != true);

                    if(Cofla.place === murderer.place && Cofla.time === murderer.time && Cofla.murder === true){
                        alert("Cofla es el asesino");
                        guilty = true;
                    }else{
                        alert("Cofla no es el asesino");
                        guilty = false
                    }
                break;

                case 2:
                    do{
                        questABC = prompt(`Bienvenido al interrogatorio señor Ron\nResponda con un si o un no a las preguntas que se le va a realizar.\n El día del asesinato, usted estaba en el barrio?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[0] = false;
                        }else if(questABC === '1' && Ron.place === 'center'){
                            alert("la maquina dispara una pequeña descarga");
                            quests[0] = false;
                        }else{
                            alert("La maquina no hace nada");
                            quests[0] = true;
                        }
                    }while(quests[0] != true);

                    do{
                        questABC = prompt(`Segunda pregunta: Estaba a las 3:30pm en el lugar?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[1] = false;
                        }else if(questABC === '1' && Ron.time === '8:30pm'){
                            alert("la maquina dispara una pequeña descarga");
                            quests[1] = false;
                        }else{
                            alert("La maquina no hace nada");
                            quests[1] = true;
                        }
                    }while(quests[1] != true);

                    do{
                        questABC = prompt(`Tercera pregunta: Asesino a alguien?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[2] = false;
                        }else if(questABC === '1' && Ron.murder === true){
                            alert("La maquina no hace nada");
                            quests[2] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[2] = false;
                        }
                    }while(quests[2] != true);

                    if(Ron.place === murderer.place && Ron.time === murderer.time && Ron.murder === true){
                        alert("Ron es el asesino");
                        guilty = true;
                    }else{
                        alert("Ron no es el asesino");
                        guilty = false
                    }
                break;

                case 3:
                    do{
                        questABC = prompt(`Bienvenido al interrogatorio señor Jhonny\nResponda con un si o un no a las preguntas que se le va a realizar.\n El día del asesinato, usted estaba en el barrio?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[0] = false;
                        }else if(questABC === '1' && Cofla.place === 'barrio'){
                            alert("La maquina no hace nada");
                            quests[0] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[0] = false;
                        }
                    }while(quests[0] != true);

                    do{
                        questABC = prompt(`Segunda pregunta: Estaba a las 3:30pm en el lugar?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[1] = false;
                        }else if(questABC === '1' && Jhonny.time === '3:30pm'){
                            alert("La maquina no hace nada");
                            quests[1] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[1] = false;
                        }
                    }while(quests[1] != true);

                    do{
                        questABC = prompt(`Tercera pregunta: Asesino a alguien?\n1. si\n2. no\n3. no decir nada`);
                        if(questABC === '3'){
                            alert("Por favor responda la pregunta.");
                            quests[2] = false;
                        }else if(questABC === '1' && Jhonny.murder === true){
                            alert("La maquina no hace nada");
                            quests[2] = true;
                        }else{
                            alert("la maquina dispara una pequeña descarga");
                            quests[2] = false;
                        }
                    }while(quests[2] != true);

                    if(Jhonny.place === murderer.place && Jhonny.time === murderer.time && Jhonny.murder === true){
                        alert("Jhonny es el asesino");
                        guilty = true;
                    }else{
                        alert("Jhonny no es el asesino");
                        guilty = false
                    }
                break;
            }
        }
    }while(guilty != true);
}
/*End of the first part*/
}

{/*second part
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
}

{/*Third POO https://www.youtube.com/watch?v=z95mZVUcJ-E 4:42:00*/
    /*problema A: Cofla entra a una tienda donde venden celulares, y quiere recomendaciones, lamentablemente los vendedores no tienen el conocimiento suficiente para dar buenas recomendaciones a cofla, lo que amerita la creacion de un sistema que:
    1- Muestre particularidades de los 3 celulares
    2- Cada uno debe tener color, peso, resolucion de camara, memoria ram.
    3- Deben poder prender, reiniciar, tomar fotos y grabar.*/

    function coflaInAndroidStore(){
    
        class smartPhone {
            
            static turnOn = false;

            constructor(color, weight, ram, mp, price){
                this.color = color;
                this.weight = weight;
                this.ram = ram;
                this.mp = mp;
                this.price = price;
                this.turnOn = false;
            }
            
            turnOn(){
                if(this.turnOn === false){
                    alert('Celular encendido');
                    this.turnOn = true;
                }else{
                    alert('Celular apagado');
                    this.turnOn = false;
                }
            }
    
            restart(){
                if(this.turnOn === true){
                    alert('Reiniciando celular');
                }else{
                    alert('El celular no se puede reiniciar estando apagado');
                }
            }
    
            takePhoto(){
                this.turnOn ? ( alert("Photo capture successfully with "+this.mp + " megapixels") )
                            : ( alert('need to turn on the smartphone'));              
            }
    
            startRecord(){
                this.turnOn ? ( alert("Recording at " + this.ram + " of ram") )
                            : ( alert('need to turn on the smartphone') );   
            }
    
            set setColor(color){
                this.color = color;
            }
    
            get getPrice(){
                return this.price;
            }
    
            get getInfo(){
                alert(`El celular es de color: ${this.color}\nEl dispositivo cuenta con un peso aproximado de ${this.weight}\nTiene una capacidad de ram de: ${this.ram}\nSu cámara tiene una resolución óptima y cuenta con: ${this.mp} en megapixeles`);
            }
        }
    
        const pocoM1 = new smartPhone("black","350gr",12,68,190);
        const xiaomik1 = new smartPhone("rose","330gr",8,128,180);
        const samsungUltra = new smartPhone("beige", "390gr", 12, 168, 254);
        let actualPhone;
        let flag = false;
        let choiceTwo;
        let phonePrice;
        let newColor;

        do {
            let choice = prompt("Bienvenido a la tienda de celulares, tenemos a la venta los siguientes 3 modelos: \n1. pocoM1\n2. xiaomik1\n3. samsungUltra\nElija una opción para revisar las características del celular.");

            switch (choice) {
                case '1':
                    pocoM1.getInfo;
                    phonePrice = pocoM1.getPrice;
                    choiceTwo = prompt(`Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`);
                    if (choiceTwo === '2') {
                        newColor = prompt(`Ingrese el nuevo color del celular: `);
                        pocoM1.setColor = newColor;
                        alert("El color ha sido cambiado");
                    }
                    actualPhone = pocoM1;
                break;
                case '2':
                    xiaomik1.getInfo;
                    phonePrice = xiaomik1.getPrice;
                    choiceTwo = prompt(`Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`);
                    if (choiceTwo === '2') {
                        newColor = prompt(`Ingrese el nuevo color del celular: `);
                        xiaomik1.setColor = newColor;;
                        alert("El color ha sido cambiado");
                    }
                    actualPhone = xiaomik1;
                break;
                case '3':
                    samsungUltra.getInfo;
                    phonePrice = samsungUltra.getPrice;
                    choiceTwo = prompt(`Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`);
                    if (choiceTwo === '2') {
                        newColor = prompt(`Ingrese el nuevo color del celular: `);
                        samsungUltra.setColor = newColor;;
                        alert("El color ha sido cambiado");
                    }
                    actualPhone = samsungUltra;
                break;
            }

            if (choiceTwo === '1' || choiceTwo === '2') {
                flag = true;
                alert(`la compra fue exitosa, su celular posee las siguientes caracteristicas: `);
                actualPhone.getInfo;
            } else {
                flag = false;
            }

        } while (flag === false);

        let choicethree = prompt("Desea jugar con su celular?:\n 1. Si\n2.No");
        
        if(choicethree === '1'){
            playWithPhone(actualPhone);
        }

        function playWithPhone(phone){
            let innerFlag = false;
            do{
                let choicePhoneSelected = prompt("que acción desea realizar con el celular?\n1. Presionar el boton de encendido/apagado\n2. Reiniciar el celular\n3. Tomar una foto\n4. Iniciar una grabacion\n5. Revisar la informacion del celular\n 6. Salir");
                if(choicePhoneSelected === '1'){
                    phone.turnOn();
                }else if(choicePhoneSelected === '2'){
                    phone.restart();
                }else if(choicePhoneSelected === '3'){
                    phone.takePhoto();
                }else if(choicePhoneSelected === '4'){
                    phone.startRecord();
                }else if(choicePhoneSelected === '5'){
                    phone.getInfo;
                }else{
                    innerFlag = true;
                }
            }while(innerFlag === false);
        }
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        let secondPart = prompt(`Al final cofla no compro ninguno de los celulares y temrino revisando otros 2, quieres continuar con el ejercicio?\n1. si\n2. terminar`);
        if(secondPart === '1'){
            secondPartOfAndroidStore();
        }
        /*
            Problema B: Al final Cofla no compro ningun celular de los anteriores y decidio irse por un gama alta, donde tenia 2 opciones para elegir, los gama alta podian hacer lo mismo que los celulares anteriores pero a demás tenian tambien las siguientes mejoras:
            camara con capacidad de grabar a una velocidad super lenta
            reconocimiento facial
            camara extra
        */
        function secondPartOfAndroidStore(){

            class smartPhoneHigher extends smartPhone{
                constructor(color, weight, ram, mp, price, mp2){
                    super(color, weight, ram, mp, price);
                    this.mp2 = mp2;
                }
                startSlowestRecord(){
                    alert(`Starting recording slowest because of ${this.mp2} megapixels on camera 2`);
                }
                facialRecognize(){
                    alert(`can't recognize`);
                }
                takePhotoCamera2(){
                    alert(`Marvellous photo by camera 2 with ${this.mp2} megapixels`);
                }
            }

            const iphoneProS223 = new smartPhoneHigher("gray", "531gr", 24, 356, 1834, 564);
            const samsungPROz21 = new smartPhoneHigher("white", "491gr", 18, 296, 1743, 450);

            do {
                let choice = prompt("Bienvenido a la tienda de celulares, tenemos a la venta los siguientes 2 modelos: \n1. iphoneProS223\n2. samsungPROz21\nElija una opción para revisar las características del celular.");
    
                switch (choice) {
                    case '1':
                        iphoneProS223.getInfo;
                        phonePrice = iphoneProS223.getPrice;
                        choiceTwo = prompt(`Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`);
                        if (choiceTwo === '2') {
                            newColor = prompt(`Ingrese el nuevo color del celular: `);
                            iphoneProS223.setColor = newColor;
                            alert("El color ha sido cambiado");
                        }
                        actualPhone = iphoneProS223;
                    break;
                    case '2':
                        samsungPROz21.getInfo;
                        phonePrice = samsungPROz21.getPrice;
                        choiceTwo = prompt(`Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`);
                        if (choiceTwo === '2') {
                            newColor = prompt(`Ingrese el nuevo color del celular: `);
                            samsungPROz21.setColor = newColor;;
                            alert("El color ha sido cambiado");
                        }
                        actualPhone = samsungPROz21;
                    break;
                }
    
                if (choiceTwo === '1' || choiceTwo === '2') {
                    flag = true;
                    alert(`la compra fue exitosa, su celular posee las siguientes caracteristicas: `);
                    actualPhone.getInfo;
                } else {
                    flag = false;
                }
    
            } while (flag === false);

            let choicethree = prompt("Desea jugar con su celular?:\n 1. Si\n2.No");
        
            if(choicethree === '1'){
                flag = false;
                playWithPhone(actualPhone);
            }

            function playWithPhone(phone){
                do{
                    let choicePhoneSelected = prompt("que acción desea realizar con el celular?\n1. Tomar una foto\n2. Grabar un video\n3. Reiniciar\n4. revisar la informacion del celular\n5. Grabar a velocidad ultra lenta\n6. Activar el reconocimiento facial\n 7. Tomar foto super nitida\n 8. Salir.");
                    if(choicePhoneSelected === '1'){
                        phone.takePhoto();
                    }else if(choicePhoneSelected === '2'){
                        phone.startRecord();
                    }else if(choicePhoneSelected === '3'){
                        smartPhone.restart();
                    }else if(choicePhoneSelected === '4'){
                        phone.getInfo;
                    }else if(choicePhoneSelected === '5'){
                        phone.startSlowestRecord();
                    }else if(choicePhoneSelected === '6'){
                        phone.facialRecognize();
                    }else if(choicePhoneSelected === '7'){
                        phone.takePhotoCamera2();
                    }else{
                        flag = true;
                    }
                }while(flag === false);
            }
        }
        
        
    }

    /*
        Cofla tiene su nuevo celular y quiere jugar algo en la play store, consiguio 7 apps que son bastante compatibles con sus gustos, pero solo se descargara 2 para no perder tanto tiempo jugando. Crear un sistema para decidir que app descargar:
        1. Debe contener la cantidad de descargas puntuacion y peso
        2. se deben poder instalar, abrir, cerrar y desinstalar.
    */
   function coflaGettingNewGames(){
    class apps{

        static storageOnPhone = [false, false];

        constructor(downloads, rate, size){
            this.downloads  = downloads;
            this.rate = rate;
            this.size = size;
        }
        get getInfo(){
            alert(`La app tiene ${this.downloads} descargas y una puntuacion de ${this.rate} con un peso de ${this.size}`);
        }
        install(){
            if(apps.storageOnPhone[0] === false)        { apps.storageOnPhone[0] = true; }
            else if(apps.storageOnPhone[1] === false)   { apps.storageOnPhone[1] = true; }
            else{ alert("No hay espacio en el celular"); }
            alert(`La app fue instalada, tiene ${this.downloads} descargas y una puntuacion de ${this.rate} con un peso de ${this.size}`);
        }
        uninstall(){
            if(apps.storageOnPhone[1] === true)        { apps.storageOnPhone[1] = false; }
            else if(apps.storageOnPhone[0] === true)   { apps.storageOnPhone[0] = false; }
            else{ alert("No hay app instalada"); }
        }
        open(){
            alert("app started");
        }
        close(){
            alert("app closed");
        }
    }

    const stardew    = new apps(2500, 4, "2GB");
    const terraria   = new apps(1500, 4.5, "1GB");
    const minecraft  = new apps(500, 3.5, "1GB");
    const pubg       = new apps(550, 4, "200MB");
    const fortniteM  = new apps(200, 5, "700MB");
    const wildrift   = new apps(2000, 5, "1GB");
    const noManSky   = new apps(1500, 4.2, "1GB");
    const availableApps = [stardew, terraria, minecraft, pubg, fortniteM, wildrift, noManSky];


    do{
        let choice = prompt(`Checkear app: \n1.stardew\n2. terraria\n3. minecraft\n4. pubg\n5. fortniteM\n6. wildrift\n7. noManSky`);
        let appSelected = availableApps[choice - 1];
        appSelected.getInfo;
        let choiceTwo = prompt(`Desea descargar la app?\n1. Si\n2. No`);
        
    }while(choice != '0');


   }
}
