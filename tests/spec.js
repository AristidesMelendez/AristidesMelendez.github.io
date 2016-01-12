// var properties = require(__dirname + '/../flickr-key.json');
// console.log(properties);

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    
    browser.get('https://aristidesmelendez.github.io/');

    expect(browser.getTitle()).toEqual('Review Image');
    console.log(element(by.css(".container .page-header h1")).getWebElement().getText());
    //expect(element("h1"))

    // element(by.model('first')).sendKeys(1);
    // element(by.model('second')).sendKeys(2);

    // element(by.id('gobutton')).click();

    // expect(element(by.binding('latest')).getText()).
    //     toEqual('5'); // This is wrong!
  });
});