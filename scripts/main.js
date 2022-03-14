import { getNasa } from "./nasaData.js";

const getAPIPOTD = (event) => {
  event.preventDefault();
  let date = document.querySelector(`input`).value;
  console.log(typeof date);
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=C4nQ6rWZReZp0od8viKInUEqtdBT8SIUDQSgVnH3&date=${date}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((POTD) => {
      if (POTD.code) {
        alert(`${POTD.msg}`);
      } else {
        document.querySelector(`h1`).innerText = POTD.title;
        document.querySelector("img").src = POTD.url;
        document.getElementById("explanation").innerText = POTD.explanation;
      }
    });
};

document.querySelector("#submit").addEventListener("click", getAPIPOTD);

getNasa();
