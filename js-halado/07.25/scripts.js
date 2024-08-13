const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    const word = document.getElementById("word-input").value;
    loadDefinitons(word);
});

async function loadDefinitons(word) {
    try {
        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if (!response.ok) {
            throw new Error(`Failed to load results for ${word}`);
        }

        const wordDataArray = await response.json();

        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML = '<ul id="definitions"></ul>';

        const definitionsList = document.getElementById("definitions");
        definitionsList.insertAdjacentHTML(
            "beforebegin",
            "<h3>Definitions</h3>"
        );
        wordDataArray.forEach((wordData) => {
            wordData.meanings.forEach((meaning) => {
                meaning.definitions.forEach((definition) => {
                    definitionsList.insertAdjacentHTML(
                        "beforeend",
                        `<li>${definition.definition}</li>`
                    );
                });
            });
        });

        resultDiv.insertAdjacentHTML("beforeend", "<h3>Phonetics</h3>");
        wordDataArray.forEach((wordData) => {
            wordData.phonetics.forEach((phonetic) => {
                if (phonetic.text) {
                    const phoneticDiv = document.createElement("div");
                    phoneticDiv.insertAdjacentHTML(
                        "beforeend",
                        `<p>${phonetic.text}</p>`
                    );
                    if (phonetic.audio) {
                        phoneticDiv.insertAdjacentHTML(
                            "beforeend",
                            `<audio controls>
                                <source src="${phonetic.audio}">
                            </audio>`
                        );
                    }
                    resultDiv.append(phoneticDiv);
                }
            });
        });
    } catch (error) {
        document.getElementById(
            "result"
        ).innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}
