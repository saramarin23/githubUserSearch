"use strict";

const input = document.querySelector(".js-input");
const img = document.querySelector(".js-image");
const icon = document.querySelector(".js-icon");
const repos = document.querySelector(".js-repos");
const user = document.querySelector(".js-user_name");
const city = document.querySelector(".js-location");

function search(ev) {
  const userSearched = input.value;
  ev.preventDefault();
  const url = `https://api.github.com/users/${userSearched}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(user);
      user.innerHTML = data.name;
      img.src = data.avatar_url;
      repos.innerHTML = `Número de repositorios: ${parseInt(
        data.public_repos
      )}`;
      city.innerHTML = data.location;
      icon.innerHTML = `
        <a href="${url}">
          <img class="icon" src="./images/github2.png" />
        </a>`;
    });
}

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", search);
