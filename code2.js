"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const rand = Math.random();
    const randomIndex = Math.floor(rand * stringSet.length);
    result += stringSet[randomIndex];
  }
  return result;
}

let userId =
  RandomString(letters, 1) + RandomString(letters + numbers, 14) + "@gmail.com";
let pasword = RandomString(
  letters + upercaseLetters + numbers + specialChars,
  100,
);

// console.log("userId.length: ", userId.length, "\n userId: ", userId);
// console.log("password.length:", pasword.length, "\n password: ", pasword);

const id = document.querySelector("#id");
const pass = document.querySelector("#pass");
const in1 = document.querySelector("#in1");
const in2 = document.querySelector("#in2");
const btnLoad = document.querySelector("#btn1");

btnLoad.addEventListener("click", (e) => {
  // location.reload();
  const inn1 = in1.value;
  const inn2 = in2.value;
  userId =
    inn1 != ""
      ? RandomString(letters, 1) +
        RandomString(letters + numbers, inn1) +
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
});

id.textContent = userId;
pass.textContent = pasword;
