var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  'browserName': 'chrome',
  'os': 'os x',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'os_version': 'high sierra',
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}

var driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('http://google.com').then(function () {
  driver.getTitle().then(function (title) {
    console.log(title);
    setTimeout(() => {
      driver.quit();
    },5000);  
  });
});
