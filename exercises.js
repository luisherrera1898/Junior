import { coflaIceCream, coflaSpareMoney, coflaGuilty } from './exercises/firstPart.js';
import { partySmith, coflaCollege, coflaCalculator } from './exercises/secondPart.js';
import { coflaInAndroidStore, coflaGettingNewGames } from './exercises/thirdPart.js';

const thirdPart = require('./exercises/thirdPart.js');
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