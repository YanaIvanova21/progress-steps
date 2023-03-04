const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");

let currentActiveCircle = 0;

next.addEventListener("click", nextBtnOnClickEventHandler);

prev.addEventListener("click", prevBtnOnClickEventHandler);

function nextBtnOnClickEventHandler() {
  activateNextCircle();
  activateProgress();
}

function prevBtnOnClickEventHandler() {
  deactivateCurrentCircle();
  deactivateProgress();
}

function activateNextCircle() {
  if (currentActiveCircle < circles.length - 1) {
    currentActiveCircle++;
    const circleToActivate = circles[currentActiveCircle];
    circleToActivate.classList.add("active");
  }

  if (currentActiveCircle === circles.length - 1) {
    next.setAttribute("disabled", " ");
  }

  if (currentActiveCircle > 0) {
    prev.removeAttribute("disabled");
  }
}

function activateProgress() {
  const progressPercentage = (currentActiveCircle / (circles.length - 1)) * 100;
  progress.style.width = progressPercentage + "%";
}

function deactivateCurrentCircle() {
  if (currentActiveCircle < 2) {
    prev.setAttribute("disabled", " ");
  }

  if (currentActiveCircle < circles.length) {
    next.removeAttribute("disabled");
  }

  if (currentActiveCircle < 2) {
    prev.setAttribute("disabled", " ");
    next.removeAttribute("disabled");
  }

  if (currentActiveCircle >= 1) {
    const circleToDeactivate = circles[currentActiveCircle];
    circleToDeactivate.classList.remove("active");
    currentActiveCircle--;
  }
}

function deactivateProgress() {
  const progressPercentage = (currentActiveCircle / (circles.length - 1)) * 100;
  progress.style.width = progressPercentage + "%";
}
