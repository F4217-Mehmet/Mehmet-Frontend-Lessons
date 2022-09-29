const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "tokenKey",
  "yo3cOZ5kgYZ5Na4AGZX/tC3aBzIzW+AV1LVf76Qf2A3leMalZ9/4YcgJdeYDLzZ/"
);
localStorage.setItem(
  "tokenKeyEncrypted",
  EncryptStringAES("a75afc2123ac2cd213c7182aef017371")
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  // alert("http request is gone!");
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  // alert(tokenKey);
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  const { main, sys, weather, name } = response;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
};
