
var itemNames = document.querySelectorAll(".item-name");
var checkButton = document.getElementById("checkButton");
var message = document.getElementById("message");

var draggedItem = null;

itemNames.forEach(function(item) {

    item.addEventListener("dragstart", function() {
        draggedItem = item;
    });

    item.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    item.addEventListener("drop", function(event) {
        event.preventDefault();

        if (draggedItem == null || draggedItem === item) {
            return;
        }

        var firstName = draggedItem.textContent;
        var secondName = item.textContent;

        draggedItem.textContent = secondName;
        item.textContent = firstName;

        message.textContent = "";
        draggedItem = null;
    });

    item.addEventListener("dragend", function() {
        draggedItem = null;
    });

});

checkButton.addEventListener("click", function() {

    var correct = true;

    itemNames.forEach(function(item, index) {

        if (item.textContent.trim() !== "Item " + (index + 1)) {
            correct = false;
        }

    });

    if (correct) {
        message.textContent = "Correct Order! Well done!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong order. Try again!";
        message.style.color = "red";
    }

});
