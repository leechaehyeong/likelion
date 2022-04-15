

const setDarkmode = () => {
    let btn = document.getElementById("darkMode"); //함수명과 id를 달리하여 엘리먼트 접근
    let back = document.body; // body 태그에 id를 부여하여 식별자를 통한 접근
    
    let backColor1 = document.querySelector('*')
    
    back.style.backgroundColor = 'black';
    back.style.color = 'white';
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = "black";
    body.backgroundColor = "black";
    backColor1.style.backgroundColor = "red";
}
function setLightmode() {
    let btn = document.getElementById("whiteMode");
    let back = document.body;
    back.style.backgroundColor = 'white';
    back.style.color = 'black';
    btn.style.color = "red";
    body.backgroundColor = "white";

}

function nextImg() {
    document.getElementById("img").src = "/static/hxh.png";
  }

