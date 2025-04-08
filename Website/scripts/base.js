function executeCommand(){
    var command = document.getElementById("command").value;
    var output = document.getElementById("output");
    var result;

    try {
        result = eval(command);
        output.innerHTML = "Result: " + result;
    } catch (e) {
        output.innerHTML = "Error: " + e.message;
    }
    output.style.display = "block";
    output.style.color = "black";
    output.style.backgroundColor = "white";
    output.style.padding = "10px";
    output.style.border = "1px solid black";
    output.style.marginTop = "10px";
    output.style.borderRadius = "5px";
    output.style.fontFamily = "monospace";
    output.style.fontSize = "14px";
    output.style.whiteSpace = "pre-wrap";
    output.style.wordWrap = "break-word";
    output.style.maxHeight = "400px";
    output.style.overflowY = "auto";
    output.style.overflowX = "auto";
    output.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
}