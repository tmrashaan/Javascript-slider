/*jshint esversion 6 */

// alert("Javascript is working b"); this is a test for your Javascript
// when i click the next button
// show a new page
// each page should show a different background color, circle colour and content

// when i click the previous button
// show the previous page

// when i click the random button
// show a random page

// when i press a key
// show the next or previous page


// step 1 add the content for our pages
// to create a list use square brackets[]
// to create an object use {}
// title: description
const pages = [{
    content: "A london based junior developer",
    background: "background: linear - gradient(0 deg, rgba(34, 195, 105, 1) 0 % , rgba(45, 253, 235, 1) 100 % )",
    circle: "rgb(16, 163, 235)"
  },
  {
    content: "I am available for new projects",
    background: "background: linear-gradient(0deg, rgba(34,144,195,1) 0%, rgba(45,253,235,1) 100%);",
    circle: "rgb(98, 203, 242);"
  },
  {
    content: "Enjoys playing football",
    background: "background: linear-gradient(0deg, rgba(34,130,195,1) 0%, rgba(45,253,235,1) 100%);",
    circle: "rgba(34,152,195,1);"
  },
  {
    content: 'letting you download <a> href="cv.pdf">download her cv</a>',
    background: "background: radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,199,233,1) 100%);",
    circle: "rgb(174,238,174);"
  }
]


// step two pick the relevant tags we want use in html & save them in constants
const bodyTag = document.querySelector("body")
// select  each button individually using th fa classes. Call the constants the following; nextTag, previousTag, randomTag
// Select h2 and raise
const circleTag = document.querySelector(".circle")
const nextTag = document.querySelector(".next")
const previousTag = document.querySelector(".previous")
const randomTag = document.querySelector(".random")
const h2Tag = document.querySelector("h2")

//step 3 we need to know which page we are on in order to change it- so we need a way of tracking this

let pageNumber = 0

// step 4 create an action that increases the page pageNumber
const next = function() {
  pageNumber = pageNumber + 1;

  // we only have four pages so we dont want to be able to increase the page number to five
  if (pageNumber > pages.length - 1) {
    // set bck to page 1
    pageNumber = 0;
  }
};

// step 5 create an action that decreases the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

const random = function() {
  pageNumber = Maths.floor(Math.random() * pages.length);
}

// step10 update the content on our page with the content from the pages list
const updatePage = function() {
  // update the content body
  h2Tag.innerHTML = pages[pageNumber].content;
  // update the circle background
  circleTag.style.backgroundColor = pages[pageNumber].circle;
}

// step 6 attatch an eventlistener to the next button & call the next function. Now the next button should increase the page number

nextTag.addEventListener("click", function() {
  next();
  console.log(pageNumber);
  updatePage();
});

//step 7 attatch an eventlistener to the previous button & call the next function. Now the previous button should decrease the page number

previousTag.addEventListener("click", function() {
  previous();
  console.log(pageNumber);
  updatePage();
});


//step 9 attatch an eventlistener to the random button & call the random function. Now the random button should pick a random number for the page number

randomTag.addEventListener("click", function() {
  random();
  console.log(pageNumber);
  updatePage();
});