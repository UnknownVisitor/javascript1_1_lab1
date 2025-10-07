(function() {
  //ex1_button.
  const button = document.getElementById('ex1_button');
  const contentDiv = document.getElementById('ex1_content');

  //Funkcja generująca ciąg liczb od 0 do 9, oddzielonych przecinkami.
  function generateNumberString() {
    let result = '';
    for (let i = 0; i <= 9; i++) {
      result += i;
      if (i < 9) {
        result += ',';
      }
    }
    return result;
  }

  //Dodaj zdarzenie po przyciśnięciu przycisku.
  button.addEventListener('click', function() {
    //Wygeneruj ciąg liczb jako wartość div
    contentDiv.textContent = generateNumberString();
  });
})();