(function () {
  // Com1_1.1

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
  // Dodawanie zdarzenia po przyciśnięciu przycisku ex1_button.
  button.addEventListener('click', function() {
    // Generowanie ciągu liczb jako wartość div
    contentDiv.textContent = generateNumberString();
  });

  const phoneInput = document.getElementById('ex2_text');
  const validationContent = document.getElementById('ex2_content');


  // Com1_1.2

  // Funkcja sprawdzająca poprawność numeru telefonu
  function validatePhoneNumber(text) {
    // 1. Długość nierówna 9
    if (text.length !== 9) {
      return 'Długość numeru musi być równa 9';
    }

    // 2. Zawieranie liter (wielkich lub małych)
    // Używanie wyrażenia regularnego: /.*[a-zA-Z].*/ sprawdza, czy w tekście jest cokolwiek, co jest literą.
    if (/[a-zA-Z]/.test(text)) {
      return 'Numer nie może zawierać liter';
    }

    // 3. Zawieranie znaków specjalnych
    // Sprawdzanie, czy tekst zawiera cokolwiek poza cyframi (0-9).
    // Jeśli nie zawiera liter (sprawdzone wyżej), to to wyrażenie regularne znajdzie znaki specjalne.
    // Używanie wyrażenia regularnego: /[^\d]/ testuje, czy w tekście jest cokolwiek, co nie jest cyfrą.
    if (/\D/.test(text)) {
      return 'Numer nie może zawierać znaków specjalnych';
    }

    // 4. Dokładnie 9 cyfr
    // Jeśli wszystkie poprzednie warunki zostały spełnione, numer jest poprawny.
    return 'Numer telefonu jest poprawny';
  }

  // Dodawanie zdarzenia reagującego na zmianę treści (input)
  phoneInput.addEventListener('input', function(event) {
    const inputText = event.target.value;
    const message = validatePhoneNumber(inputText);

    // Wyświetlanie komunikatu w elemencie o ID: ex2_content
    validationContent.textContent = message;
  });


  // Com1_2.1 - Przeciąganie jednostronne (ex3_one -> ex3_two)

  // 1. Definicja elementów
  const draggableElement = document.getElementById('ex3_element');
  const dropContainerOne = document.getElementById('ex3_one');
  const dropContainerTwo = document.getElementById('ex3_two');

  // 2. Obsługa zdarzenia dragstart na elemencie przeciąganym
  if (draggableElement) {
      // Ustawianie atrybutu draggable="true"
      draggableElement.draggable = true;

      draggableElement.addEventListener('dragstart', function(event) {
          // Zapisywanie ID przeciąganego elementu w obiekcie DataTransfer.
          event.dataTransfer.setData('text/plain', event.target.id);

          // Zmniejszanie przezroczystości przeciąganego elementu
          // dla wizualnej informacji zwrotnej.
          setTimeout(() => {
              event.target.style.opacity = '0.4';
          }, 0);
      });

      draggableElement.addEventListener('dragend', function(event) {
          // Przywracanie pełnej przezroczystości, gdy przeciąganie się zakończy.
          event.target.style.opacity = '1';
      });
  }

  // 3. Funkcja obsługująca przeciąganie nad kontenerem (dragover)
  function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
  }

  // 4. Funkcja obsługująca upuszczenie elementu (drop)
  function handleDrop(event) {
      // Zatrzymywanie domyślnego zachowania przeglądarki (np. otwarcie pliku).
      event.preventDefault();

      // Pobieranie danych (ID elementu) zapisanych podczas dragstart
      const data = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(data);

      // Znajdowanie docelowego kontenera upuszczenia
      let dropTarget = event.target;
      while (dropTarget && dropTarget.id !== 'ex3_one' && dropTarget.id !== 'ex3_two' && dropTarget.parentElement) {
          dropTarget = dropTarget.parentElement;
      }

      // WARUNEK DLA PRZECIĄGANIA JEDNOSTRONNEGO:
      // Sprawdzanie, czy element jest upuszczany TYLKO do kontenera ex3_two.
      if (draggedElement && dropTarget && dropTarget.id === 'ex3_two') {
          // Przenoszenie przeciąganego elementu do nowego kontenera
          dropTarget.appendChild(draggedElement);
      }

  }
  
  // 5. Dodawanie Listenerów - akceptowanie upuszczenia tylko przez ex3_two
  if (dropContainerOne && dropContainerTwo) {
      dropContainerTwo.addEventListener('dragover', handleDragOver);
      dropContainerTwo.addEventListener('drop', handleDrop);
  }

})();