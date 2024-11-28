document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');
    const vocabularyTableBody = document.getElementById('vocabularyTable').getElementsByTagName('tbody')[0];
    const addWordForm = document.getElementById('addWordForm');
    const newWordInput = document.getElementById('newWord');
    const newTranslationInput = document.getElementById('newTranslation');
    const newExampleInput = document.getElementById('newExample');
    const newExampleSpanishInput = document.getElementById('newExampleSpanish');

    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        displayVocabulary(selectedCategory);
    });

    addWordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newWord = newWordInput.value.trim();
        const newTranslation = newTranslationInput.value.trim();
        const newExample = newExampleInput.value.trim();
        const newExampleSpanish = newExampleSpanishInput.value.trim();
        const selectedCategory = categorySelect.value;

        if (newWord && newTranslation && newExample && newExampleSpanish && selectedCategory) {
            const newItem = {
                english: newWord,
                spanish: newTranslation,
                example: newExample,
                example_spanish: newExampleSpanish
            };

            if (!dictionary.categories[selectedCategory]) {
                dictionary.categories[selectedCategory] = [];
            }
            dictionary.categories[selectedCategory].push(newItem);
            addRow(newItem);
            addWordForm.reset();
        } else {
            alert('Please fill in all fields and select a category.');
        }
    });

    function displayVocabulary(category) {
        vocabularyTableBody.innerHTML = ''; // Clear existing rows
        if (category) {
            if (dictionary.categories[category]) {
                dictionary.categories[category].forEach(item => {
                    addRow(item);
                });
            }
        } else {
            // Display all words if no category is selected
            for (const category in dictionary.categories) {
                dictionary.categories[category].forEach(item => {
                    addRow(item);
                });
            }
        }
    }

    function addRow(item) {
        const row = document.createElement('tr');

        const wordCell = document.createElement('td');
        wordCell.textContent = item.english;
        row.appendChild(wordCell);

        const translationCell = document.createElement('td');
        translationCell.textContent = item.spanish;
        row.appendChild(translationCell);

        const exampleCell = document.createElement('td');
        exampleCell.textContent = item.example;
        row.appendChild(exampleCell);

        const exampleSpanishCell = document.createElement('td');
        exampleSpanishCell.textContent = item.example_spanish;
        row.appendChild(exampleSpanishCell);

        vocabularyTableBody.appendChild(row);
    }

    // Display all words on initial load
    displayVocabulary('');
});