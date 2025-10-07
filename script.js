(function () {
  //Com1_1.1 
  
  // ex1_button.
  const button = document.getElementById('ex1_button');
  const contentDiv = document.getElementById('ex1_content');

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
  // Dodaj zdarzenie po przyciśnięciu przycisku ex1_button.
  button.addEventListener('click', function() {
    // Wygeneruj ciąg liczb jako wartość div
    contentDiv.textContent = generateNumberString();
  });

  const phoneInput = document.getElementById('ex2_text');
  const validationContent = document.getElementById('ex2_content');

  
  //Com1_1.2
  
  // Funkcja sprawdzająca poprawność numeru telefonu
  function validatePhoneNumber(text) {
    // 1. Długość nierówna 9
    if (text.length !== 9) {
      return 'Długość numeru musi być równa 9';
    }

    // 2. Zawiera litery (wielkie lub małe)
    // Używamy wyrażenia regularnego: /.*[a-zA-Z].*/ sprawdza, czy w tekście jest        cokolwiek, co jest literą.
    if (/[a-zA-Z]/.test(text)) {
      return 'Numer nie może zawierać liter';
    }

    // 3. Zawiera znaki specjalne
    // Sprawdzamy, czy tekst zawiera cokolwiek poza cyframi (0-9).
    // Jeśli nie zawiera liter (sprawdzone wyżej), to to wyrażenie regularne             znajdzie znaki specjalne.
    // Używamy wyrażenia regularnego: /[^\d]/ testuje, czy w tekście jest                cokolwiek, co nie jest cyfrą.
    if (/\D/.test(text)) {
      return 'Numer nie może zawierać znaków specjalnych';
    }

    // 4. Dokładnie 9 cyfr
    // Jeśli wszystkie poprzednie warunki zostały spełnione, numer jest poprawny.
    return 'Numer telefonu jest poprawny';
  }

  // Dodaj zdarzenie reagujące na zmianę treści (input)
  phoneInput.addEventListener('input', function(event) {
    const inputText = event.target.value;
    const message = validatePhoneNumber(inputText);

    // Wyświetl komunikat w elemencie o ID: ex2_content
    validationContent.textContent = message;
  });

})();