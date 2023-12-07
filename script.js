//your JS code here. If required.
let container = document.getElementById("container");
function functionName(){
    let name = arguments.callee.name;
    alert(name);
}

function AccioJob(){
    let name = arguments.callee.name;
    alert(name);
}
// document.addEventListener("DOMContentLoaded",functionName);
// document.addEventListener("DOMContentLoaded",AccioJob);
functionName();
AccioJob();