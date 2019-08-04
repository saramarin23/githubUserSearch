"use strict";

const input = document.querySelector(".js-input");
const img = document.querySelector(".js-image");
const repos = document.querySelector(".js-repos");
const user = document.querySelector(".js-user_name");

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
    });
}

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", search);
