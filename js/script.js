//Variable Declaration
const userKm = document.getElementById("userkm");
console.log (userKm);

const userAge = document.getElementById("userage");
console.log (userAge);

const ticketPrice = document.getElementById("final-price");
console.log (ticketPrice);


// Getting Data from user input
const dataSend = document.getElementById("enter");
dataSend.addEventListener("click", function(){
    console.log("Hai inviato i dati");
    const userKmData = userKm.value;
    const userAgeData = userAge.value;
    console.log (userKmData, userAgeData);
});

// Program Logic

// Output