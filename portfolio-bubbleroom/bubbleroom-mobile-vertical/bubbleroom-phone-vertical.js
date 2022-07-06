
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





  //bubble room
  const firstP = document.getElementById("first-page");
  const logo = firstP.children[0];
  const loginP = document.getElementById("login-page");

  displayChange(logo,firstP,loginP);
  
  const loginBtn = document.querySelector("#login-page > button")
  const homeP = document.getElementById("home-page");
  displayChange(loginBtn,loginP,homeP);