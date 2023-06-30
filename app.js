const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Pobieranie...";
    btnEl.disabled = true;
    btnEl.innerText = "Wczytywanie...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Żart";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "Spróbuj ponownie";
    btnEl.disabled = false;
    btnEl.innerText = "Żart";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);