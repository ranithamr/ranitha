
const expect = require('chai').expect;

module.exports= function() {
    this.Given(/^I launch openCart url$/, function () {
        return browser.get("www.opencart.com");

    });
   this.When(/^I enter username$/, function () {
      return browser.getElementById("input-email").send("ranithamr@gmail.com");

    });
    this.When(/^I enter password$/, function () {
        return browser.getElementById("input-password").set("rrrrr");

    });

    this.When(/^I click on continue$/, function () {
       return browser.getElementsByClassName("btn btn-primary btn-lg hidden-xs").click();

    });
    this.Then(/^I validate errorMessage$/, function () {
      return browser.getElementsByName("").toString().assert("")
    });

    this.Given(/^I click on login$/, function () {
        return browser.getElementsByClassName("btn btn-link navbar-btn").click();
    });
};