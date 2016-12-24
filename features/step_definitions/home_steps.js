"use strict";

var HomePage = require("./pages/home");

module.exports = function () {
    var page = new HomePage();

    this.Given('I am on the angularjs home page', function () {
        return page.visit().then(function () {
            return expect(browser.getCurrentUrl()).to.be.eventually.eql("https://angularjs.org/");
        });
    });

    this.Then('I should see "$text" title', function (title) {
        return expect(page.getTitle()).to.be.eventually.eql(title);
    });

    this.When('I enter name "$name" to the first example', function (name) {
        return page.enterName(name);
    });

    this.Then('I should see "$greeting" greeting', function (greeting) {
        return expect(page.getGreeting()).to.be.eventually.eql(greeting);
    });

    this.When('I enter todo "$todo" to the second example', function (todo) {
        return page.enterTodo(todo);
    });

    this.When('press add button of the second example', function () {
        return page.presAddTodo();
    });

    this.Then('I should see "$todo" in the list of todos', function (todo) {
        return expect(page.getTodoList()).to.eventually.contains(todo);
    });

    this.Given('I see crossed first todo', function () {
        return expect(page.isFirstTodoCrossed()).to.be.eventually.true;
    });

    this.When('I unmark first done todo', function () {
        return page.unmarkFirstTodo();
    });

    this.Then('First todo should not be crossed', function () {
        return expect(page.isFirstTodoCrossed()).to.be.eventually.false;
    });

    this.Then('Remaining todos title should be "$title"', function (title) {
        return expect(page.getRemainingTodoTitle()).to.be.eventually.eql(title)
    });
};