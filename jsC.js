var result = document.getElementById("inputDisplay");

function num(val) {
    result.value += val.value;
}

function mark(val) {
    result.value += val.value;
}

function equal() {
    result.value = new Function("return "+ result.value)();
}
