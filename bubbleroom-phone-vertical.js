
let displayAppear = [
  {opacity: .5},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 500,
    iterations: 1
  };
  //화면 전환 애니메이션

  function displayChange(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear,displayChangeTime);
      appearTarget.style.opacity = 1;
    });
  };
  //화면 전환 함수
  
  // const init = {
  //   root: document.getElementById("root"),
  //   slide: {
  //     leftButton: document.getElementById("slide-button-left"),
  //     imgWrapper: document.getElementById("slide-img-wrapper"),
  //     imgItems: Array.from(document.querySelectorAll("#slide-img-wrapper > div")).reverse(),
  //     rightButton: document.getElementById("slide-button-left"),
  //   }
  // };
  //하나하나 const하지 않고 정리하기






  //bubble room
  const firstP = document.getElementById("first-page");
  const logo = firstP.children[0];
  const loginP = document.getElementById("login-page");
  displayChange(logo,firstP,loginP);
  
  const loginBtn = document.querySelector("#login-page > button")
  const homeP = document.getElementById("home-page");
  displayChange(loginBtn,loginP,homeP);

  const colorPicker = document.getElementById("color-picker");
  const mvP = document.getElementById("mv-page");
  displayChange(colorPicker,homeP,mvP);

  const miniColorPicker = document.querySelector(".mini-color-picker");
  const mvP2 = document.getElementById("mv-page-2");
  displayChange(miniColorPicker,mvP,mvP2);

  const mvPbackBtn = document.querySelector("#mv-page > header");
  displayChange(mvPbackBtn,mvP,homeP);