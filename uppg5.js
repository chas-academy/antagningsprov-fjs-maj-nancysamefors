function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    let x = 10;
    let y = 7;
    
    if (x > y) {
      console.log('Det första talet är större än det andra');
    } else {
      console.log('Det andra talet är större än det första');
}

}

uppg5(); // <-- det här anropar funktionen

module.exports = { uppg5 };