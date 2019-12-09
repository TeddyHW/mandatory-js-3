function reqListener() {
  let obj = JSON.parse(oReq.responseText);
  let newObj = Object.keys(obj.message);
  console.log(newObj);
  for (var i = 0; i < newObj.length; i++) {
    let ul = document.querySelector(".list");
    let list = document.createElement("li");
    list.textContent = newObj[i];
    ul.appendChild(list);
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
      divPic.appendChild(img);
      bCheck1 = true;
    }
    else if (bCheck2 === false) {
      let divPic = document.querySelector("#b2");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      divPic.appendChild(img);
      bCheck2 = true;
    }
    else if (bCheck3 === false) {
      let divPic = document.querySelector("#b3");
      let img = document.createElement("img");
      img.setAttribute("src", arrPic[i]);
      img.setAttribute("class", "bTest");
      divPic.appendChild(img);
      bCheck3 = true;
    }
  }
}

let bCheck1 = false;
let bCheck2 = false;
let bCheck3 = false;

let pic = new XMLHttpRequest();
pic.open("GET", "https://dog.ceo/api/breeds/image/random/3");
pic.addEventListener("load", picListener);
pic.send();

let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://dog.ceo/api/breeds/list/all");
oReq.send();
