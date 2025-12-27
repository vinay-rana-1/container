let input = document.getElementById("textInput");
let increaseButton = document.getElementById("increaseBtn");
let decreaseButton = document.getElementById("decreaseBtn");


increaseButton.addEventListener("click", function() {
    input.value = parseInt(input.value) + 1;
   
});

decreaseButton.addEventListener("click", function() {
    input.value = parseInt(input.value) - 1;
    
});