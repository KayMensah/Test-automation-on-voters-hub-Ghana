// spec.js
describe("Voting Hub Gh", function () {
  it("should have a title", function () {
    browser.get("https://votinghubgh.com/");

    expect(browser.getTitle()).toEqual("VotingHubApp");
    // browser.actions().mouseMove(element).perform();

    element(
      by.xpath(
        "(//a[@class='template-btn bg-primary-10'][normalize-space()='Vote Here'])[3]"
      )
    ).click();
    element(by.xpath("(//a[normalize-space()='Hot Ice'])[1]")).click();
    element(by.xpath("(//select[@name='payment-method'])[1]")).click();
    element(by.xpath("(//option[@value='mtn'])[1]")).click();
    element(by.xpath("(//input[@placeholder='Number of Votes'])[1]")).click();
    element(by.xpath("(//input[@placeholder='Number of Votes'])[1]")).sendKeys(
      "2"
    );
    element(by.xpath("(//input[@placeholder='MOMO Number'])[1]")).click("2");
    element(by.xpath("(//input[@placeholder='MOMO Number'])[1]")).sendKeys(
      "0243826359"
    );
    element(by.xpath("(//button[normalize-space()='Submit'])[1]")).click();

    browser.sleep(3000);
  });
});
