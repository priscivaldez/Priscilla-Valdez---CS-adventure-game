/* Declare variables below to save the different sections (divs) of your story*/

let homePage = document.querySelector(".story-opening"); 
let title = document.querySelector(".title")
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let screenOne = document.querySelector(".screen-one");
let screenTwo = document.querySelector(".screen-two");
let firstEnding = document.querySelector(".screen-one-end");
let secondEnding = document.querySelector(".screen-two-end");
let run = document.querySelector(".run");
let poster = document.querySelector(".poster");








yes.onclick=function(){
  title.style.display="none"; 
  homePage.style.display = "none";
  yes.style.display="none";
  no.style.display="none";
  screenOne.style.display="block";
  run.style.display="block";
  screenTwo.style.display="none";
  firstEnding.style.display="none";
  poster.style.display="none";
  secondEnding.style.display="none";
};

no.onclick=function(){
  title.style.display="none"; 
  homePage.style.display = "none";
  yes.style.display="none";
  no.style.display="none";
  screenOne.style.display="none";
  run.style.display="none";
  screenTwo.style.display="block";
  poster.style.display="block"
  firstEnding.style.display="none";
  secondEnding.style.display="none";
  poster.style.display="none";
};

run.onclick=function(){
  title.style.display="none"; 
  homePage.style.display = "none";
  yes.style.display="none";
  no.style.display="none";
  screenOne.style.display="none";
  run.style.display="none";
  screenTwo.style.display="none";
  firstEnding.style.display="block";
  secondEnding.style.display="none";
  poster.style.display="none";
}

poster.onclick=function(){
  title.style.display="none"; 
  homePage.style.display = "none";
  yes.style.display="none";
  no.style.display="none";
  screenOne.style.display="none";
  run.style.display="none";
  screenTwo.style.display="none";
  firstEnding.style.display="none";
  secondEnding.style.display="block";
  poster.style.display="none";
}