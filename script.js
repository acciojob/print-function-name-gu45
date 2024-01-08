//your JS code here. If required.

// Redefine the function to make it accessible via the window object
window.functionName = function functionName() {
  alert(arguments.callee.name);
}
