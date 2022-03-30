// Function triggered when client clicks [Verify]
function verifyCaptcha() {
  alert("Looks like you're a robot!");
  closeVerifyWindow();
}

$(".dropzone").droppable({
  drop: function (event, ui) {
    // success
    $(ui.draggable.context).toggle();
    $(this).css("background", "white");
  },
  over: function (event, ui) {
    // partial
    $(this).css("background", "lightgrey");
  },
  out: function (event, ui) {
    // failure
  },
});

for (var i = 0; i < 250; i++) {
  create(i);
}

function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch (colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-' + i + " " + colour + '"></div>')
    .css({
      width: width + "px",
      height: height + "px",
      top: -Math.random() * 200 + "%",
      left: Math.random() * 80 + "%",
      opacity: Math.random() + 0.5,
      transform: "rotate(" + Math.random() * 360 + "deg)",
    })
    .appendTo(".wrapper");

  drop(i);
}

$(".red").draggable({ cursor: "grabbing" });
$(".blue").draggable({ cursor: "grabbing" });
$(".yellow").draggable({ cursor: "grabbing" });

function drop(x) {
  $(".confetti-" + x).animate(
    {
      top: "100%",
      left: "+=" + Math.random() * 15 + "%",
    },
    Math.random() * 3000 + 3000
  );
}

$("#robot").click(function (e) {
  e.preventDefault();
  verifyCaptcha();
});

let checkboxWindow = document.getElementById("fkrc-checkbox-window");
let checkboxBtn = document.getElementById("fkrc-checkbox");
let checkboxBtnSpinner = document.getElementById("fkrc-spinner");
let verifyWindow = document.getElementById("fkrc-verifywin-window");
let verifyWindowArrow = document.getElementById("fkrc-verifywin-window-arrow");
let verifyBtn = document.getElementById("fkrc-verifywin-verify-button");

function addCaptchaListeners() {
  if (checkboxBtn && verifyBtn) {
    verifyBtn.addEventListener("click", function (event) {
      event.preventDefault();
      verifyBtn.disabled = true;
      verifyCaptcha();
    });

    checkboxBtn.addEventListener("click", function (event) {
      event.preventDefault();
      checkboxBtn.disabled = true;
      runClickedCheckboxEffects();
    });
  }
}
addCaptchaListeners();

function runClickedCheckboxEffects() {
  hideCaptchaCheckbox();
  setTimeout(function () {
    showCaptchaLoading();
  }, 500);

  setTimeout(function () {
    showVerifyWindow();
  }, 900);

  setTimeout(function () {
    $("#give-up").css("opacity", "1");
  }, 15000);
}

function showCaptchaCheckbox() {
  checkboxBtn.style.width = "100%";
  checkboxBtn.style.height = "100%";
  checkboxBtn.style.borderRadius = "2px";
  checkboxBtn.style.margin = "21px 0 0 12px";
  checkboxBtn.style.opacity = "1";
}

function hideCaptchaCheckbox() {
  checkboxBtn.style.width = "4px";
  checkboxBtn.style.height = "4px";
  checkboxBtn.style.borderRadius = "50%";
  checkboxBtn.style.marginLeft = "25px";
  checkboxBtn.style.marginTop = "33px";
  checkboxBtn.style.opacity = "0";
}

function showCaptchaLoading() {
  checkboxBtnSpinner.style.visibility = "visible";
  checkboxBtnSpinner.style.opacity = "1";
}

function hideCaptchaLoading() {
  checkboxBtnSpinner.style.visibility = "hidden";
  checkboxBtnSpinner.style.opacity = "0";
}

function showVerifyWindow() {
  verifyWindow.style.display = "block";
  verifyWindow.style.visibility = "visible";
  verifyWindow.style.opacity = "1";
  verifyWindow.style.top = checkboxWindow.offsetTop - 80 + "px";
  verifyWindow.style.left = checkboxWindow.offsetLeft + 54 + "px";

  if (verifyWindow.offsetTop < 5) {
    verifyWindow.style.top = "5px";
  }

  if (
    verifyWindow.offsetLeft + verifyWindow.offsetWidth >
    window.innerWidth - 10
  ) {
    verifyWindow.style.left = checkboxWindow.offsetLeft - 8 + "px";
  } else {
    verifyWindowArrow.style.top = checkboxWindow.offsetTop + 24 + "px";
    verifyWindowArrow.style.left = checkboxWindow.offsetLeft + 45 + "px";
    verifyWindowArrow.style.visibility = "visible";
    verifyWindowArrow.style.opacity = "1";
  }
}

function closeVerifyWindow() {
  verifyWindow.style.display = "none";
  verifyWindow.style.visibility = "hidden";
  verifyWindow.style.opacity = "0";

  verifyWindowArrow.style.visibility = "hidden";
  verifyWindowArrow.style.opacity = "0";

  showCaptchaCheckbox();
  hideCaptchaLoading();
  checkboxBtn.disabled = false;
  verifyBtn.disabled = false;
}

function isVerifyWindowVisible() {
  return (
    verifyWindow.style.display !== "none" && verifyWindow.style.display !== ""
  );
}
