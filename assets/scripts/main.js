var selectHeading = document.querySelectorAll(".card h3");

for (var i = 0; i < selectHeading.length; i++) {
  selectHeading[i].innerHTML = i + " Title";
  selectHeading[i].style.borderRadius = "20px";
  selectHeading[i].style.padding = "20px";
  selectHeading[i].style.margin = "20px";
  selectHeading[i].style.color = "red";
  selectHeading[i].classList = "bg-black";
}

// selectHeading.style.borderRadius = "20px";
// selectHeading.style.padding = "20px";
// selectHeading.style.margin = "20px";
// selectHeading.style.color = "red";
// selectHeading.innerHTML = "Welcome from Js!";
// selectHeading.classList = "bg-black";

// selectHeading.setAttribute("my-name", "Mohamed");

// # doTosContainer
var doTosContainer = document.getElementById("doTosContainer");
var addToDo = document.getElementById("addToDo");

function addToDoFun() {
  var createdParagraph = document.createElement("p");
  createdParagraph.innerHTML = "1st do to";
  doTosContainer.appendChild(createdParagraph);
}

addToDoFun();
addToDoFun();
addToDoFun();

addToDo.onclick = () => {
    console.log("Clicked");
    
  var createdParagraph = document.createElement("p");
  createdParagraph.innerHTML = "1st do to";
  doTosContainer.appendChild(createdParagraph);
};

// doTosContainer.removeChild(createdParagraph);

console.log(selectHeading[0].childNodes);
