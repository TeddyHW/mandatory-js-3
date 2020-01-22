function mainList() {
  let obj = JSON.parse(oReq.responseText);
  breedList = Object.keys(obj.message);
  for (var i = 0; i < breedList.length; i++) {
    let ul = document.querySelector(".list");
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = breedList[i];
    let id = "num" + [i];
    link.setAttribute("class", "myLink");
    link.setAttribute("id", id);
    link.setAttribute("href", "#");
    ul.appendChild(list);
    list.appendChild(link);
  }

  let a = document.querySelectorAll(".myLink");
  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", linkClick);
  }
}

function subLister() {
  if (isHashing === true && done === false) {
    return;
  }
  if (isHashing === false) {
    setHash();
  }
  if (myList.includes(currentBreed)) {
    end = false;

  }
  else {
    end = true;
  }

  if (subCheck === true) {
    for (var i = 0; i < subLength; i++) {
      let remUL = document.querySelector(".subUl");
      let remLi = document.querySelector(".subUl li");
      let remA = document.querySelector(".subUl li a");

      remLi.removeChild(remA);
      remUL.removeChild(remLi);
    }
    subCheck = false;
  }

  if (end == true) {
    return;
  }

  if (isHashing == false) {
    testObj = JSON.parse(subBreed.responseText);
    subBreedList = Object(testObj.message);
  }

  console.log(subBreedList);


  for (var i = 0; i < subBreedList.length; i++) {
    let ul = document.querySelector(".subUl");
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = subBreedList[i];
    let id = "subNum" + [i];
    link.setAttribute("class", "mySubLink");
    link.setAttribute("id", id);
    link.setAttribute("href", "#");
    ul.appendChild(list);
    list.appendChild(link);

    subLength = subBreedList.length;
    subCheck = true;
  }
  let a = document.querySelectorAll(".mySubLink");
  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", subLinkClick);
  }
  isBreed = true;
}

function linkClick(e) {
  if (isHashing == false) {
    e.preventDefault();
  }
  if (isHashing === false) {
    let where = e.target;
    found = where.id;
    currentBreed = where.textContent;
  }



  let breed = "https://dog.ceo/api/breed/" + currentBreed + "/images/random/3";
  let subList = "https://dog.ceo/api/breed/" + currentBreed + "/list";

  for (var i = 0; i < bArr.length; i++) {
    let loopNum = "num" + [i];
    if (found === loopNum) {
      bArr[i] = true;

      if (dogCheck == true && checkSub == false || isHashing == false) {
        breedPic.open("GET", breed);
        breedPic.addEventListener("load", makeBreedPics);
        breedPic.send();
      }

      subBreed.addEventListener("load", subLister);
      subBreed.open("GET", subList);
      subBreed.send();

      /*console.log(subBreed);

      if (subBreed.status == 0) {
        empty = true;
      }
      else if (subBreed.status !== 0) {
        empty = false;
      }*/

      let title = document.querySelector("h1");
      title.textContent = currentBreed;
      break;
    }
  }
}

function subLinkClick(e) {
  e.preventDefault();
  let where = e.target;
  if (where.class === "mySubLink") {
    return;
  }
  if (isHashing == false) {
    found = where.id;
    currentSubBreed = where.textContent;
    isSub = true;
  }



  let breed = "https://dog.ceo/api/breed/" + currentBreed + "/" +
  currentSubBreed + "/images/random/3";
  subBreedPic.open("GET", breed);
  subBreedPic.addEventListener("load", makeSubPics);
  subBreedPic.send();

  let title = document.querySelector("h1");
  title.textContent = currentSubBreed;
}

function randomPic() {
  let randPic = JSON.parse(pic.responseText);
  let arrPic = randPic.message;

  for (var i = 0; i < arrPic.length; i++) {
    if (bCheck1 === false) {
      let divPic = document.querySelector("#b1");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild1");
      divPic.appendChild(img);
      bCheck1 = true;
    }
    else if (bCheck2 === false) {
      let divPic = document.querySelector("#b2");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild2");
      divPic.appendChild(img);
      bCheck2 = true;
    }
    else if (bCheck3 === false) {
      let divPic = document.querySelector("#b3");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild3");
      divPic.appendChild(img);
      bCheck3 = true;
    }
  }
}

function makeBreedPics() {
  isBreed = true;
  isSub = false;
  if (isHashing === false) {
    setHash();
  }
  isHashing = false;
  let randPic = JSON.parse(breedPic.responseText);
  let arrPic = randPic.message;


  let remDiv1 = document.querySelector("#b1");
  let remDiv2 = document.querySelector("#b2");
  let remDiv3 = document.querySelector("#b3");
  let remPic1 = document.querySelector("#bild1");
  let remPic2 = document.querySelector("#bild2");
  let remPic3 = document.querySelector("#bild3");
  remDiv1.removeChild(remPic1);
  remDiv2.removeChild(remPic2);
  remDiv3.removeChild(remPic3);

  bCheck1 = false;
  bCheck2 = false;
  bCheck3 = false;
  for (var i = 0; i < arrPic.length; i++) {
    if (bCheck1 === false) {
      let divPic = document.querySelector("#b1");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild1");
      divPic.appendChild(img);
      bCheck1 = true;
    }
    else if (bCheck2 === false) {
      let divPic = document.querySelector("#b2");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild2");
      divPic.appendChild(img);
      bCheck2 = true;
    }
    else if (bCheck3 === false) {
      let divPic = document.querySelector("#b3");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild3");
      divPic.appendChild(img);
      bCheck3 = true;
    }
  }
}

function makeSubPics() {
  isBreed = false;
  isSub = true;
  if (isHashing === false) {
    setHash();
  }

  let randPic = JSON.parse(subBreedPic.responseText);
  let arrPic = randPic.message;

  isHashing = false;

  let remDiv1 = document.querySelector("#b1");
  let remDiv2 = document.querySelector("#b2");
  let remDiv3 = document.querySelector("#b3");
  let remPic1 = document.querySelector("#bild1");
  let remPic2 = document.querySelector("#bild2");
  let remPic3 = document.querySelector("#bild3");
  remDiv1.removeChild(remPic1);
  remDiv2.removeChild(remPic2);
  remDiv3.removeChild(remPic3);

  bCheck1 = false;
  bCheck2 = false;
  bCheck3 = false;
  for (var i = 0; i < 3; i++) {
    if (bCheck1 === false) {
      let divPic = document.querySelector("#b1");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild1");
      divPic.appendChild(img);
      bCheck1 = true;
    }
    else if (bCheck2 === false) {
      let divPic = document.querySelector("#b2");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild2");
      divPic.appendChild(img);
      bCheck2 = true;
    }
    else if (bCheck3 === false) {
      let divPic = document.querySelector("#b3");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      img.setAttribute("id", "bild3");
      divPic.appendChild(img);
      bCheck3 = true;
    }
  }
  isSub = true;
}

function onClick(e) {
  if (isBreed === true) {
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/images/random/3";
    breedPic.open("GET", breed);
    breedPic.addEventListener("load", makeBreedPics);
    breedPic.send();
  }
  else if (isSub === true) {
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/" +
    currentSubBreed + "/images/random/3";
    subBreedPic.open("GET", breed);
    subBreedPic.addEventListener("load", makeSubPics);
    subBreedPic.send();
  }
  else {
    window.location.reload();
  }
}

function setHash() {
  if (isHashing === true) {
    return;
  }
  if (isBreed === true && isSub === false) {
    currentHash = currentBreed;
    window.location.hash = currentHash;
    working = "#" + currentHash;
  }
  else if (isSub === true) {
    currentHash = currentBreed + "-" + currentSubBreed;
    window.location.hash = currentHash;
    working = "#" + currentHash;
  }
}

function searchHash() {
  testing = window.location.hash;

  if (testing !== working) {
    isHashing = true;
    working = testing;
  }

  if (isHashing === false) {
    return;
  }
  let fullDog = window.location.hash.substr(1);
  let arrDog = fullDog.split("-");
  let firstDog = arrDog[0];
  let secondDog = arrDog[1];

  dogCheck = breedList.includes(firstDog);
  if (dogCheck = false) {
    return;
  }

  if (secondDog === undefined) {
    dogCheck = true;
    checkSub = false;
  }
  else {
    dogCheck = false;
    checkSub = true;
    //makeSubPics();
  }

  currentBreed = firstDog;

  isHashing = true;
  for (var i = 0; i < breedList.length; i++) {
    let numberId = "num" + i
    let find = document.querySelector("#" + numberId);
    if (find.textContent === firstDog) {
      found = numberId;
      break;
    }
  }

  done = true;
  linkClick();
  //subLister();


  //checkSub = subBreedList.includes(secondDog);
  if (dogCheck === true && checkSub === false) {
    currentBreed = firstDog;
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/images/random/3";
    breedPic.open("GET", breed);
    breedPic.addEventListener("load", makeBreedPics);
    breedPic.send();
    isBreed = true;
    isHashing = false;
  }
  else if (checkSub === true) {
    currentBreed = firstDog;
    currentSubBreed = secondDog;
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/" +
    currentSubBreed + "/images/random/3";
    subBreedPic.open("GET", breed);
    subBreedPic.addEventListener("load", makeSubPics);
    subBreedPic.send();
    isSub = true;
    isHashing = false;
  }
  done = false;
}


let testObj;

let dogCheck = false;
let checkSub = false;

let breedPic = new XMLHttpRequest();
let subBreed = new XMLHttpRequest();
let subBreedPic = new XMLHttpRequest();

let isHashing = false;
let done = false;

let found;

let testing = window.location.hash;
let working = "";

let currentHash = window.location.hash;

let bArr = Array(90);
for (var i = 0; i < bArr.length; i++) {
  bArr[i] = false;
}

window.addEventListener("hashchange", searchHash);

let breedList = [];
let subBreedList = [];

let empty = true;
let end = false;
let myList = [
  "australian",
  "buhund",
  "bulldog",
  "bullterrier",
  "cattledog",
  "collie",
  "corgi",
  "dane",
  "deerhound",
  "elkhound",
  "frise",
  "greyhound",
  "hound",
  "mastiff",
  "mountain",
  "pinscher",
  "pointer",
  "poodle",
  "retriever",
  "ridgeback",
  "schnauzer",
  "setter",
  "sheepdog",
  "spaniel",
  "springer",
  "terrier",
  "waterdog",
  "wolfhound"
]

let subCheck = false;
let subLength;

let bCheck1 = false;
let bCheck2 = false;
let bCheck3 = false;

let isSub = false;
let isBreed = false;

let currentBreed = "";
let currentSubBreed = "";

let pic = new XMLHttpRequest();
pic.open("GET", "https://dog.ceo/api/breeds/image/random/3");
pic.addEventListener("load", randomPic);
pic.send();

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", mainList);
oReq.open("GET", "https://dog.ceo/api/breeds/list/all");
oReq.send();

let myButton = document.querySelector("button");
myButton.addEventListener("click", onClick);
