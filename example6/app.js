var main = function (toDoObjectss) {
    "use strict";
    var toDos = toDoObjects.map(function (toDo) {
    // we'll just return the description
    // of this toDoObject
    return toDo.description;
    });
    // now all of our old code should work exactly as it did!
    // ...
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        // we'll call main with toDos as an argument
        main(toDoObjects);
    });
});