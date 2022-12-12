var bugList = []; 

function addBug(){ 
  var bugName = document.getElementById("bugName").value; 
  if(bugName != ""){ 
    var bug = { 
      bugName: bugName, 
      state: "in process"
    } 
    bugList.push(bug); 
    document.getElementById("bugName").value = ""; 
    refreshBugList(); 
  } 
} 

function refreshBugList(){ 
  var ul = document.getElementById("bugList").getElementsByTagName("ul")[0]; 
  ul.innerHTML = ""; 
  bugList.forEach(function(bug){ 
    ul.innerHTML += "<li>" + bug.bugName + " (" + bug.state + ") <button onClick='changeState(this)'>Change state</button> <button onClick='removeBug(this)'>Remove</button></li>"; 
  }); 
  saveBugList(); 
} 

function changeState(el){ 
  var bugName = el.parentNode.innerText.split(" ")[0]; 
  bugList.forEach(function(bug){ 
    if(bug.bugName == bugName){ 
      if(bug.state == "in process"){ 
        bug.state = "fixed"; 
      }else{ 
        bug.state = "in process"; 
      } 
    } 
  }); 
  refreshBugList(); 
} 

function removeBug(el){ 
  var bugName = el.parentNode.innerText.split(" ")[0]; 
  bugList.forEach(function(bug, index){ 
    if(bug.bugName == bugName){ 
      bugList.splice(index, 1); 
    } 
  }); 
  refreshBugList(); 
} 

function saveBugList(){ 
  var bugListJSON = JSON.stringify(bugList); 
  localStorage.setItem("bugList", bugListJSON); 
} 

function loadBugList(){ 
  var bugListJSON = localStorage.getItem("bugList"); 
  bugList = JSON.parse(bugListJSON); 
  if(!bugList){ 
    bugList = []; 
  } 
  refreshBugList(); 
} 

window.onload = loadBugList; 