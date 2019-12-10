function reqListener() {
  let obj = JSON.parse(oReq.responseText);
  let newObj = Object.keys(obj.message);
  console.log(newObj);
  for (var i = 0; i < newObj.length; i++) {
    let ul = document.querySelector(".list");
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = newObj[i];
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

function picListener() {
  let randPic = JSON.parse(pic.responseText);
  let arrPic = randPic.message;
  console.log(arrPic);

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

function linkClick(e) {
  let where = e.target;
  let linkId = where.id;
  let what = where.textContent;

  currentBreed = what;

  let breed = "https://dog.ceo/api/breed/" + what + "/images/random/3";
  let subList = "https://dog.ceo/api/breed/" + what + "/list";

  for (var i = 0; i < bArr.length; i++) {
    let loopNum = "num" + [i];
    if (linkId === loopNum) {
      bArr[i] = true;

      breedPic.open("GET", breed);
      breedPic.addEventListener("load", breedListener);
      breedPic.send();

      subBreed.addEventListener("load", subListener);
      subBreed.open("GET", subList);
      subBreed.send();

      let title = document.querySelector("h1");
      title.textContent = what;
    }
  }
}

function breedListener() {
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

function subListener() {
  let obj = JSON.parse(subBreed.responseText);
  let newObj = Object(obj.message);
  console.log(newObj);
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
  for (var i = 0; i < newObj.length; i++) {
    let ul = document.querySelector(".subUl");
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = newObj[i];
    let id = "subNum" + [i];
    link.setAttribute("class", "mySubLink");
    link.setAttribute("id", id);
    link.setAttribute("href", "#");
    ul.appendChild(list);
    list.appendChild(link);

    subCheck = true;
    subLength = newObj.length;
  }
  let a = document.querySelectorAll(".mySubLink");
  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", subLinkClick);
  }
}

function subLinkClick(e) {
  let where = e.target;
  let linkId = where.id;
  let what = where.textContent;

  let breed = "https://dog.ceo/api/breed/" + currentBreed + "/" +
  what + "/images/random/3";
  subBreedPic.open("GET", breed);
  subBreedPic.addEventListener("load", subBreedListener);
  subBreedPic.send();

  let title = document.querySelector("h1");
  title.textContent = what;
}

function subBreedListener() {
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
}


function onClick(e) {

}

let bArr = Array(90);
for (var i = 0; i < bArr.length; i++) {
  bArr[i] = false;
}

let subCheck = false;
let subLength;

let bCheck1 = false;
let bCheck2 = false;
let bCheck3 = false;

let currentBreed = "";

let pic = new XMLHttpRequest();
pic.open("GET", "https://dog.ceo/api/breeds/image/random/3");
pic.addEventListener("load", picListener);
pic.send();

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://dog.ceo/api/breeds/list/all");
oReq.send();

let breedPic = new XMLHttpRequest();
let subBreed = new XMLHttpRequest();
let subBreedPic = new XMLHttpRequest();

let myButton = document.querySelector("button");
myButton.addEventListener("click", onClick);



  let hashTest = window.location.hash;
  window.location.hash = "test";
