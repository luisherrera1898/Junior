{
  /*Third POO https://www.youtube.com/watch?v=z95mZVUcJ-E 4:42:00*/
  /*problema A: Cofla entra a una tienda donde venden celulares, y quiere recomendaciones, lamentablemente los vendedores no tienen el conocimiento suficiente para dar buenas recomendaciones a cofla, lo que amerita la creacion de un sistema que:
    1- Muestre particularidades de los 3 celulares
    2- Cada uno debe tener color, peso, resolucion de camara, memoria ram.
    3- Deben poder prender, reiniciar, tomar fotos y grabar.*/

  function coflaInAndroidStore() {
    class smartPhone {
      static turnOn = false;

      constructor(color, weight, ram, mp, price) {
        this.color = color;
        this.weight = weight;
        this.ram = ram;
        this.mp = mp;
        this.price = price;
        this.turnOn = false;
      }

      turnOn() {
        if (this.turnOn === false) {
          alert("Celular encendido");
          this.turnOn = true;
        } else {
          alert("Celular apagado");
          this.turnOn = false;
        }
      }

      restart() {
        if (this.turnOn === true) {
          alert("Reiniciando celular");
        } else {
          alert("El celular no se puede reiniciar estando apagado");
        }
      }

      takePhoto() {
        this.turnOn
          ? alert("Photo capture successfully with " + this.mp + " megapixels")
          : alert("need to turn on the smartphone");
      }

      startRecord() {
        this.turnOn
          ? alert("Recording at " + this.ram + " of ram")
          : alert("need to turn on the smartphone");
      }

      set setColor(color) {
        this.color = color;
      }

      get getPrice() {
        return this.price;
      }

      get getInfo() {
        alert(
          `El celular es de color: ${this.color}\nEl dispositivo cuenta con un peso aproximado de ${this.weight}\nTiene una capacidad de ram de: ${this.ram}\nSu cámara tiene una resolución óptima y cuenta con: ${this.mp} en megapixeles`,
        );
      }
    }

    const pocoM1 = new smartPhone("black", "350gr", 12, 68, 190);
    const xiaomik1 = new smartPhone("rose", "330gr", 8, 128, 180);
    const samsungUltra = new smartPhone("beige", "390gr", 12, 168, 254);
    let actualPhone;
    let flag = false;
    let choiceTwo;
    let phonePrice;
    let newColor;

    do {
      let choice = prompt(
        "Bienvenido a la tienda de celulares, tenemos a la venta los siguientes 3 modelos: \n1. pocoM1\n2. xiaomik1\n3. samsungUltra\nElija una opción para revisar las características del celular.",
      );

      switch (choice) {
        case "1":
          pocoM1.getInfo;
          phonePrice = pocoM1.getPrice;
          choiceTwo = prompt(
            `Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`,
          );
          if (choiceTwo === "2") {
            newColor = prompt(`Ingrese el nuevo color del celular: `);
            pocoM1.setColor = newColor;
            alert("El color ha sido cambiado");
          }
          actualPhone = pocoM1;
          break;
        case "2":
          xiaomik1.getInfo;
          phonePrice = xiaomik1.getPrice;
          choiceTwo = prompt(
            `Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`,
          );
          if (choiceTwo === "2") {
            newColor = prompt(`Ingrese el nuevo color del celular: `);
            xiaomik1.setColor = newColor;
            alert("El color ha sido cambiado");
          }
          actualPhone = xiaomik1;
          break;
        case "3":
          samsungUltra.getInfo;
          phonePrice = samsungUltra.getPrice;
          choiceTwo = prompt(
            `Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`,
          );
          if (choiceTwo === "2") {
            newColor = prompt(`Ingrese el nuevo color del celular: `);
            samsungUltra.setColor = newColor;
            alert("El color ha sido cambiado");
          }
          actualPhone = samsungUltra;
          break;
      }

      if (choiceTwo === "1" || choiceTwo === "2") {
        flag = true;
        alert(
          `la compra fue exitosa, su celular posee las siguientes caracteristicas: `,
        );
        actualPhone.getInfo;
      } else {
        flag = false;
      }
    } while (flag === false);

    let choicethree = prompt("Desea jugar con su celular?:\n 1. Si\n2.No");

    if (choicethree === "1") {
      playWithPhone(actualPhone);
    }

    function playWithPhone(phone) {
      let innerFlag = false;
      do {
        let choicePhoneSelected = prompt(
          "que acción desea realizar con el celular?\n1. Presionar el boton de encendido/apagado\n2. Reiniciar el celular\n3. Tomar una foto\n4. Iniciar una grabacion\n5. Revisar la informacion del celular\n 6. Salir",
        );
        if (choicePhoneSelected === "1") {
          phone.turnOn();
        } else if (choicePhoneSelected === "2") {
          phone.restart();
        } else if (choicePhoneSelected === "3") {
          phone.takePhoto();
        } else if (choicePhoneSelected === "4") {
          phone.startRecord();
        } else if (choicePhoneSelected === "5") {
          phone.getInfo;
        } else {
          innerFlag = true;
        }
      } while (innerFlag === false);
    }
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    let secondPart = prompt(
      `Al final cofla no compro ninguno de los celulares y temrino revisando otros 2, quieres continuar con el ejercicio?\n1. si\n2. terminar`,
    );
    if (secondPart === "1") {
      secondPartOfAndroidStore();
    }
    /*
            Problema B: Al final Cofla no compro ningun celular de los anteriores y decidio irse por un gama alta, donde tenia 2 opciones para elegir, los gama alta podian hacer lo mismo que los celulares anteriores pero a demás tenian tambien las siguientes mejoras:
            camara con capacidad de grabar a una velocidad super lenta
            reconocimiento facial
            camara extra
        */
    function secondPartOfAndroidStore() {
      class smartPhoneHigher extends smartPhone {
        constructor(color, weight, ram, mp, price, mp2) {
          super(color, weight, ram, mp, price);
          this.mp2 = mp2;
        }
        startSlowestRecord() {
          alert(
            `Starting recording slowest because of ${this.mp2} megapixels on camera 2`,
          );
        }
        facialRecognize() {
          alert(`can't recognize`);
        }
        takePhotoCamera2() {
          alert(`Marvellous photo by camera 2 with ${this.mp2} megapixels`);
        }
      }

      const iphoneProS223 = new smartPhoneHigher(
        "gray",
        "531gr",
        24,
        356,
        1834,
        564,
      );
      const samsungPROz21 = new smartPhoneHigher(
        "white",
        "491gr",
        18,
        296,
        1743,
        450,
      );

      do {
        let choice = prompt(
          "Bienvenido a la tienda de celulares, tenemos a la venta los siguientes 2 modelos: \n1. iphoneProS223\n2. samsungPROz21\nElija una opción para revisar las características del celular.",
        );

        switch (choice) {
          case "1":
            iphoneProS223.getInfo;
            phonePrice = iphoneProS223.getPrice;
            choiceTwo = prompt(
              `Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`,
            );
            if (choiceTwo === "2") {
              newColor = prompt(`Ingrese el nuevo color del celular: `);
              iphoneProS223.setColor = newColor;
              alert("El color ha sido cambiado");
            }
            actualPhone = iphoneProS223;
            break;
          case "2":
            samsungPROz21.getInfo;
            phonePrice = samsungPROz21.getPrice;
            choiceTwo = prompt(
              `Desea comprar el celular por: ${phonePrice}USD?\n1. Pagar\n2. Pagar, pero cambiar el color del dispositivo\n3. seguir mirando`,
            );
            if (choiceTwo === "2") {
              newColor = prompt(`Ingrese el nuevo color del celular: `);
              samsungPROz21.setColor = newColor;
              alert("El color ha sido cambiado");
            }
            actualPhone = samsungPROz21;
            break;
        }

        if (choiceTwo === "1" || choiceTwo === "2") {
          flag = true;
          alert(
            `la compra fue exitosa, su celular posee las siguientes caracteristicas: `,
          );
          actualPhone.getInfo;
        } else {
          flag = false;
        }
      } while (flag === false);

      let choicethree = prompt("Desea jugar con su celular?:\n 1. Si\n2.No");

      if (choicethree === "1") {
        flag = false;
        playWithPhone(actualPhone);
      }

      function playWithPhone(phone) {
        do {
          let choicePhoneSelected = prompt(
            "que acción desea realizar con el celular?\n1. Tomar una foto\n2. Grabar un video\n3. Reiniciar\n4. revisar la informacion del celular\n5. Grabar a velocidad ultra lenta\n6. Activar el reconocimiento facial\n 7. Tomar foto super nitida\n 8. Salir.",
          );
          if (choicePhoneSelected === "1") {
            phone.takePhoto();
          } else if (choicePhoneSelected === "2") {
            phone.startRecord();
          } else if (choicePhoneSelected === "3") {
            smartPhone.restart();
          } else if (choicePhoneSelected === "4") {
            phone.getInfo;
          } else if (choicePhoneSelected === "5") {
            phone.startSlowestRecord();
          } else if (choicePhoneSelected === "6") {
            phone.facialRecognize();
          } else if (choicePhoneSelected === "7") {
            phone.takePhotoCamera2();
          } else {
            flag = true;
          }
        } while (flag === false);
      }
    }
  }

  /*
        Cofla tiene su nuevo celular y quiere jugar algo en la play store, consiguio 7 apps que son bastante compatibles con sus gustos, pero solo se descargara 2 para no perder tanto tiempo jugando. Crear un sistema para decidir que app descargar:
        1. Debe contener la cantidad de descargas puntuacion y peso
        2. se deben poder instalar, abrir, cerrar y desinstalar.
    */
  function coflaGettingNewGames() {
    class apps {
      static storageOnPhone = [false, false];

      constructor(downloads, rate, size) {
        this.downloads = downloads;
        this.rate = rate;
        this.size = size;
      }
      get getInfo() {
        alert(
          `La app tiene ${this.downloads} descargas y una puntuacion de ${this.rate} con un peso de ${this.size}`,
        );
      }
      install() {
        if (apps.storageOnPhone[0] === false) {
          apps.storageOnPhone[0] = true;
        } else if (apps.storageOnPhone[1] === false) {
          apps.storageOnPhone[1] = true;
        } else {
          alert("No hay espacio en el celular");
        }
        alert(
          `La app fue instalada, tiene ${this.downloads} descargas y una puntuacion de ${this.rate} con un peso de ${this.size}`,
        );
      }
      uninstall() {
        if (apps.storageOnPhone[1] === true) {
          apps.storageOnPhone[1] = false;
        } else if (apps.storageOnPhone[0] === true) {
          apps.storageOnPhone[0] = false;
        } else {
          alert("No hay app instalada");
        }
      }
      open() {
        alert("app started");
      }
      close() {
        alert("app closed");
      }
    }

    const stardew = new apps(2500, 4, "2GB");
    const terraria = new apps(1500, 4.5, "1GB");
    const minecraft = new apps(500, 3.5, "1GB");
    const pubg = new apps(550, 4, "200MB");
    const fortniteM = new apps(200, 5, "700MB");
    const wildrift = new apps(2000, 5, "1GB");
    const noManSky = new apps(1500, 4.2, "1GB");
    const availableApps = [
      stardew,
      terraria,
      minecraft,
      pubg,
      fortniteM,
      wildrift,
      noManSky,
    ];

    let choice;
    do {
      choice = prompt(`Checkear app: 
                1. Stardew
                2. Terraria
                3. Minecraft
                4. PUBG
                5. FortniteM
                6. Wildrift
                7. No Man Sky
                0. Salir`);

      if (choice === "0") break;

      let appSelected = availableApps[choice - 1];
      appSelected.getInfo;

      let choiceTwo = prompt(`¿Qué desea hacer con la app?
                    1. Instalar
                    2. Abrir
                    3. Cerrar
                    4. Desinstalar
                    5. Nada`);

      switch (choiceTwo) {
        case "1":
          appSelected.install();
          break;
        case "2":
          appSelected.open();
          break;
        case "3":
          appSelected.close();
          break;
        case "4":
          appSelected.uninstall();
          break;
        default:
          alert("No se realizó ninguna acción");
      }
    } while (choice !== "0");
  }
}