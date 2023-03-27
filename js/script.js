// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";

function calculateClicked() {
  //Input through Textfields
  const triBase = parseInt(document.getElementById("triangle-base").value);
  const triHeight = parseInt(document.getElementById("triangle-height").value);

  //Output
  document.getElementById("answer").innerHTML =
    "The area of this Triangle is: " + (triBase * triHeight) / 2 + " cm²";
}
