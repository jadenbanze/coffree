// var webdriver = require('selenium-webdriver'),
//     firefox = require('selenium-webdriver/firefox'),
//     By
//     driver = null;
// const { Builder } = require('selenium-webdriver');



// let options = new firefox.Options();
// driver = new Builder()
//     .setFirefoxOptions(options)
//     .forBrowser('firefox')
//     .build();


// driver.get('https://jaden.ga/contact.html')


// driver.findElement()

const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://jaden.ga/contact.html');
        await driver.findElement(By.name('name')).sendKeys('Allahu Akbar');
        await driver.findElement(By.name('email')).sendKeys('farazrahman@bomb.com')
        await driver.findElement(By.name('message')).sendKeys("why'd you call the army on me dude?", Key.TAB, Key.RETURN)
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        // await driver.quit();
        console.log('done now manually captcha')
    }
})();