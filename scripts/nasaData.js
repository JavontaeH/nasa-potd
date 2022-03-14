export const getNasa = () => {
  let date = document.querySelector(`input`).value;
  console.log(date);
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=C4nQ6rWZReZp0od8viKInUEqtdBT8SIUDQSgVnH3`,
    {
      headers: {
        accept: "application/json",
      },
    }
  ).then((response) => response.json); // [parse response as json]
  // .then((POTD) => POTD);
};
