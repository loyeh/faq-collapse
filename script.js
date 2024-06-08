let icons = document.querySelectorAll(".icon");
let container = document.querySelectorAll(".container");
let answer = document.querySelectorAll(".answer");

console.log(icons, container, answer);

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    container[index].classList.toggle("active");
    if (container[index].classList.contains("active")) {
      icon.innerHTML = "&#xf057";
      answer[index].classList.add("active");
    } else {
      icon.innerHTML = "&#xf107";
      answer[index].classList.remove("active");
    }
  });
});
