describe("login page", function() {
  it( 'should be login', function() {
    browser.get('http://localhost:7357/login').then(function () {
      element(by.model("vm.user.login")).sendKeys('admin@neoteric.eu').then(function () {
        element(by.model("vm.user.password")).sendKeys('abc123').then(function () {
          element(by.buttonText("Log in")).click();
        });
      });
    }).then(function () {
      expect(browser.getCurrentUrl()).toEqual("http://localhost:7357/login/profile");
    });
  });
});