document.getElementById('showAllResults').addEventListener('click', function() {
    displayVocabulary(vocabulary);
    toggleTableVisibility(true);
});

document.getElementById('categorySelect').addEventListener('change', function() {
    const category = this.value;
    if (category) {
        const filteredVocabulary = vocabulary.filter(item => item.category === category);
        displayVocabulary(filteredVocabulary);
        toggleTableVisibility(true);
    } else {
        displayVocabulary([]);
        toggleTableVisibility(false);
    }
});

function displayVocabulary(vocabList) {
    const vocabularyTableBody = document.getElementById('vocabularyTable').getElementsByTagName('tbody')[0];
    vocabularyTableBody.innerHTML = ''; // Clear existing rows

    vocabList.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.word}</td>
            <td>${item.translation}</td>
            <td>${item.example}</td>
        `;
        vocabularyTableBody.appendChild(row);
    });
}

function toggleTableVisibility(visible) {
    const tableContainer = document.querySelector('.tableContainer');
    if (visible) {
        tableContainer.classList.remove('hidden');
    } else {
        tableContainer.classList.add('hidden');
    }
}