document.addEventListener("DOMContentLoaded", () => {
  const subscribed = localStorage.getItem("frayja_subscribed") === "true";
  const locked = document.querySelectorAll(".locked-content");
  const wall = document.querySelector(".subscribe-wall");

  if (subscribed) {
    locked.forEach(el => el.style.display = "block");
    if (wall) wall.style.display = "none";
  } else {
    locked.forEach(el => el.style.display = "none");
    if (wall) wall.style.display = "block";
  }
});

