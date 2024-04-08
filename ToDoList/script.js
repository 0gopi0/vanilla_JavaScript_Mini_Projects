const inputBox = document.getElementById("inputValue");
const ul = document.getElementById("ulContainer");

function addIt() {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = "x";
  li.innerHTML = inputBox.value;
  li.appendChild(span);
  ul.appendChild(li);

  inputBox.value = "";
  saveData();
}

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("data");
}
showTask();
