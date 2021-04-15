const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.results);
    const facts = result.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {

      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `
      <div class="result">
        <p>Name: ${facts[i].name}</p>
        <p> Rating: ${facts[i].rating}</p>
        <p> Number of tags:${facts[i].tags.length}</p>
      </div>`;
    }

  } catch (error) {
    resultContainer.innerHTML = error;
  }
}

makeApiCall();