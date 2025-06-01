function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    let names = ['Nancy', 'Oscar', 'Teresa', 'John', 'Alice', 'Ludwig'];
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
}

}

uppg6(); // <-- det här anropar funktionen

module.exports = { uppg6 };