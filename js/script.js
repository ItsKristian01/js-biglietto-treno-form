//Variable Declaration
const userKm = document.getElementById("userkm");
console.log(userKm);

const userAge = document.getElementById("userage");
console.log(userAge);


// Getting Data from user input
const dataSend = document.getElementById("enter");
dataSend.addEventListener("click", function () {
    console.log("Hai inviato i dati");
    let userKmData = userKm.valueAsNumber;
    let userAgeData = userAge.valueAsNumber;
    console.log(userKmData, userAgeData);

    // Program Logic
    let travelTicket = 0.21 * userKmData;
    console.log(travelTicket, typeof travelTicket);
   
    if (userAgeData < 18) {
        console.log("E' Minorenne ha diritto ad uno sconto del 20%");
    } else if (userAgeData > 65) {
        console.log("Ha un eta' over 65 ha diritto ad uno sconto del 40%");
    }

    if (userAgeData < 18) {
        let minorDisc = travelTicket * 0.20;
        let minorTicket = travelTicket - minorDisc;
        minorTicket = minorTicket.toFixed(2);
        console.log(minorTicket, typeof minorTicket);
        // Output
        document.getElementById("message").innerHTML = `Ciao! Il prezzo del tuo biglietto è € ${minorTicket}`;
    } else if (userAgeData > 65) {
        let overDisc = travelTicket * 0.40;
        let overTicket = travelTicket - overDisc;
        overTicket = overTicket.toFixed(2);
        console.log(overTicket, typeof overTicket);
        // Output
        document.getElementById("message").innerHTML = `Ciao! Il prezzo del tuo biglietto è € ${overTicket}`;
    }
});

document.getElementById("delete").addEventListener("click", function () {
    userKm.valueAsNumber = "";
    userAge.valueAsNumber = "";
    document.getElementById("message").innerHTML = "";
})




