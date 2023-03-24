// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"strict"

function calculateClicked() {
  //Input through Textfields
  const base = parseInt(document.getElementById("base").value)
  const height = parseInt(document.getElementById("height").value)

  //Output
  document.getElementById("answer").innerHTML =
    "The area of this Triangle is: " + (base * height) / 2 + "cm²"
}
