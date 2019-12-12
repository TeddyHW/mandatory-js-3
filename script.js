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
  if (isHash === false) {
    setHash();
  }
  //isHash = false;
  isSub = false;
  let obj = JSON.parse(subBreed.responseText);
  subBreedList = Object(obj.message);
  if (subCheck === true) {
    for (var i = 0; i < subLength; i++) {
      let remUL = document.querySelector(".subUl");
      let remLi = document.querySelector(".subUl li");
      let remA = document.querySelector(".subUl li a");

      remLi.removeChild(remA);
      remUL.removeChild(remLi);
    }
  }

  subCheck = false;
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

    subCheck = true;
    subLength = subBreedList.length;
  }
  let a = document.querySelectorAll(".mySubLink");
  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", subLinkClick);
  }
  isBreed = true;
  notHash = false;
}

function linkClick(e) {
  let where = e.target;
  let linkId = where.id;
  currentBreed = where.textContent;

  let breed = "https://dog.ceo/api/breed/" + currentBreed + "/images/random/3";
  let subList = "https://dog.ceo/api/breed/" + currentBreed + "/list";

  for (var i = 0; i < bArr.length; i++) {
    let loopNum = "num" + [i];
    if (linkId === loopNum) {
      bArr[i] = true;

      breedPic.open("GET", breed);
      breedPic.addEventListener("load", makeBreedPics);
      breedPic.send();

      subBreed.addEventListener("load", subLister);
      subBreed.open("GET", subList);
      subBreed.send();

      let title = document.querySelector("h1");
      title.textContent = currentBreed;
      break;
    }
  }
}

function subLinkClick(e) {
  let where = e.target;
  let linkId = where.id;
  currentSubBreed = where.textContent;

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
  if (isHash === false) {
    setHash();
  }
  isHash = false;
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
  notHash = false;
}

function makeSubPics() {
  isBreed = false;
  isSub = true;
  if (isHash === false) {
    setHash();
  }
  isHash = false;
  let randPic = JSON.parse(subBreedPic.responseText);
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
  isSub = true;
  notHash = false;
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
  if (isHash === true) {
    return;
  }
  notHash = true;
  if (isBreed === true && isSub === false) {
    currentHash = currentBreed;
    window.location.hash = currentHash;
  }
  else if (isSub === true) {
    currentHash = currentBreed + "-" + currentSubBreed;
    window.location.hash = currentHash;
  }
}

function searchHash() {
  if (notHash === true) {
    return;
  }
  let fullDog = window.location.hash.substr(1);
  let arrDog = fullDog.split("-");
  let firstDog = arrDog[0];
  let secondDog = arrDog[1];

  let dogCheck = breedList.includes(firstDog);

  let subList = "https://dog.ceo/api/breed/" + firstDog + "/list";
  subBreed.addEventListener("load", subLister);
  subBreed.open("GET", subList);
  subBreed.send();

  let checkSub = subBreedList.includes(secondDog);
  if (dogCheck === true && checkSub === false) {
    isHash = true;
    currentBreed = firstDog;
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/images/random/3";
    breedPic.open("GET", breed);
    breedPic.addEventListener("load", makeBreedPics);
    breedPic.send();
    isBreed = true;
  }
  else if (checkSub === true) {
    isHash = true;
    currentBreed = firstDog;
    currentSubBreed = secondDog;
    let breed = "https://dog.ceo/api/breed/" + currentBreed + "/" +
    currentSubBreed + "/images/random/3";
    subBreedPic.open("GET", breed);
    subBreedPic.addEventListener("load", makeSubPics);
    subBreedPic.send();
    isSub = true;
  }
}

let breedPic = new XMLHttpRequest();
let subBreed = new XMLHttpRequest();
let subBreedPic = new XMLHttpRequest();

let isHash = false;
let notHash = false;
let currentHash = window.location.hash;

let bArr = Array(90);
for (var i = 0; i < bArr.length; i++) {
  bArr[i] = false;
}

window.addEventListener("hashchange", searchHash);

let breedList = [];
let subBreedList = [];

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
