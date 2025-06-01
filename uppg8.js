function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let persons = [
    { name: 'Nancy', age: 28 },
    { name: 'Oscar', age: 35 },
    { name: 'Charlie', age: 32 },
    { name: 'Teresa', age: 29 },
    { name: 'Ethan', age: 40 }
    ];
    function printNamesOver30(personArray) {
      for (let i = 0; i < personArray.length; i++) {
        if (personArray[i].age > 30) {
          console.log(personArray[i].name);
    }
  }

}

printNamesOver30(persons); // <-- anropar funktionen och skickar med arrayen som argument

}

uppg8(); // <-- det här anropar funktionen

module.exports = { uppg8 };