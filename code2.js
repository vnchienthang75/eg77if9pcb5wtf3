"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const rand = Math.random();
    const randomIndex = Math.trunc(rand * (stringSet.length - 1));
    result += stringSet[randomIndex];
  }
  return result;
}

let userId = "";
let pasword = "";

const id = document.querySelector("#id");
const pass = document.querySelector("#pass");
const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const btnLoad = document.querySelector("#btn1");

btnLoad.addEventListener("click", (e) => {
  const inn1 = in1.value;
  const inn2 = in2.value;
  if (inn1 > 40 || inn1 < 0) {
    alert("ID không thể thực hiện !! 😪");
  } else if (inn2 > 140 || inn2 < 0) {
    alert("Password không thể thực hiện!! 😥");
  } else {
    userId =
      inn1 != ""
        ? RandomString(letters, 1) +
          RandomString(letters + numbers, inn1 - 1) +
          "@gmail.com"
        : "";
    pasword =
      inn2 != ""
        ? RandomString(letters + upercaseLetters + numbers + specialChars, inn2)
        : "";

    in1.value = inn1;
    in2.value = inn2;

    id.textContent = userId;
    pass.textContent = pasword;
  }
});

id.textContent = userId;
pass.textContent = pasword;
