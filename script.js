const inputBox = document.getElementById("input-data");
const listCont = document.getElementById("list-container");
// ADD TASK AND ADD A CROSS ON RIGHT AS WELL 
// IMP TO LEARN HERE IS : CREATTEXTNODE , APPENDCHILD, TEXTCONTENT, AND NO USE OF INNERHTML 
function showdata() {
  if (inputBox.value == "") {
    alert("please enter your tasks first");
  } 
  else {
    let l1 = document.createElement("li");
    l1.textContent = inputBox.value;
    let textNode = document.createTextNode(" ");
    l1.appendChild(textNode);
    sp1 = document.createElement("span");
    sp1.textContent = '\u00d7';
    l1.appendChild(sp1);
    listCont.appendChild(l1);
  }
  inputBox.value = "";
  savedata()
}
// WHEN CLICK TASK, MARK IT AS DONE AND WHEN CLICK CROSS, REMOVE IT 
listCont.addEventListener('click',function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    savedata()
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata()
  }
})
// SAVE THE DATA IN LOCAL STORAGE OF BROWSER
function savedata(){
  localStorage.setItem("data",listCont.innerHTML);
}
// PRINT THE DATA ALSO
function getdata(){
  listCont.innerHTML=localStorage.getItem("data");
}
getdata();

