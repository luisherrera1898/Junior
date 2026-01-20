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

