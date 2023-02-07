const { Builder, By, Key, until } = require('selenium-webdriver');
const { uniqueNamesGenerator, Config, names } = require('unique-names-generator');
const emails = require('email-generator');
var generator = require('generate-password');

const config = {
    dictionaries: [names]
}
const password = generator.generate({
    length: 15,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true
});


const firstName = uniqueNamesGenerator(config);
const lastName = uniqueNamesGenerator(config)
const email = emails.generateEmail()

async function starbucks() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.starbucks.com/account/create');

        await driver.findElement(By.name('firstName')).sendKeys(firstName);
        await driver.findElement(By.name('lastName')).sendKeys(lastName);
        await driver.findElement(By.name('emailAddress')).sendKeys(email.substring(1, email.length - 1))
        await driver.findElement(By.name('password')).sendKeys(password);

        // buttons
        await driver.findElement(By.name('termsAndConditions')).sendKeys(Key.SPACE, Key.TAB, Key.ENTER);
        // await driver.findElement(By.className('sb-frap sb-frap--centerSVG'))


    } finally {
        // await driver.quit();
        console.log(firstName, lastName, email, password)
    }

}

starbucks()