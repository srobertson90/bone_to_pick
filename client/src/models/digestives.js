var Digestive = require("./digestive");

var Digestives = function() {

  var digestive1 = new Digestive({
    name: "Mouth",
    fact: "An average human has 32 teeth",
    image: "./public/images/mouth.jpg"
  });

  var digestive2 = new Digestive({
    name: "Oesophagus",
    fact: "The esophagus is around 9-10 inches long, and connects your mouth to  your stomach",
    image: "./public/images/stomach.jpg"
  });

  var digestive3 = new Digestive({
    name: "Liver",
    fact: "The liver is able to regenerate dead or damaged tissue",
    image: "./public/images/liver.jpg"
  });

  var digestive4 = new Digestive({
    name: "Gallbladder",
    fact: "The gallbladder holds bile produced in the liver",
    image: "./public/images/gallbladder.jpg"
  });

  var digestive5 = new Digestive({
    name: "Stomach",
    fact: "The stomach has a pH of 1.5 - 3.5",
    image: "./public/images/stomach.jpg"
  });


  var digestive6 = new Digestive({
    name: "Small intestine",
    fact: "The small intestine is around 10 feet in length!",
    image: "./public/images/small.jpeg"
  });


  var digestive7 = new Digestive({
    name: "Large intestine",
    fact: "The large intestine is an important factor in re absorbing water and vitamins",
    image: "./public/images/large.jpg"
  });


  var digestive8 = new Digestive({
    name: "Appendix",
    fact: "The appendix is not a needed organ, and there is some debate over what it was used for",
    image: "./public/images/Appendicitis.jpeg"
  });


  return [digestive1, digestive2, digestive3, digestive4, digestive5, digestive6, digestive7, digestive8]

}

module.exports = Digestives;