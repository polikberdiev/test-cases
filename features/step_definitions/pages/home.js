"use strict";

function HomePage() {
    this.title = element(by.css(".hero-unit .center h1"));
    this.nameInput = element(by.model("yourName"));
    this.greeting = element(by.css("div.row.example div.span4 div div h1"));
    this.todoInput = element(by.model("todoList.todoText"));
    this.todoSubbmit = element(by.css("div.row.example div.span4 div div form input[type='submit']"));
    this.todoList = element.all(by.repeater("todo in todoList.todos"));
    this.firstTodo = this.todoList.get(0).element(by.css("span"));
    this.firstTodoCheckbox = this.todoList.get(0).element(by.css("input[type='checkbox']"));
    this.remainingTodoTitle = element(by.css("div.row.example div.span4 div div span"));
}

HomePage.prototype.visit = function () {
    return browser.get("https://angularjs.org/");
};

HomePage.prototype.getTitle = function () {
    return this.title.getText();
};

HomePage.prototype.enterName = function (name) {
    return this.nameInput.sendKeys(name);
};

HomePage.prototype.getGreeting = function () {
    return this.greeting.getText();
};

HomePage.prototype.enterTodo = function (todo) {
    return this.todoInput.sendKeys(todo);
};

HomePage.prototype.presAddTodo = function () {
    return this.todoSubbmit.click();
};

HomePage.prototype.getTodoList = function () {
    return this.todoList.getText();
};

HomePage.prototype.isFirstTodoCrossed = function () {
    return this.firstTodo.getAttribute('class')
        .then(function (css) {
            return /done-true/.test(css);
        });
};

HomePage.prototype.unmarkFirstTodo = function () {
    return this.firstTodoCheckbox.click();
};

HomePage.prototype.getRemainingTodoTitle = function () {
    return this.remainingTodoTitle.getText();
};

module.exports = HomePage;