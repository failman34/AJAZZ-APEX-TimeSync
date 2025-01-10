const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Путь к локальному файлу
    const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
    await page.goto(filePath, { waitUntil: 'load' }); // Ждём полной загрузки страницы

    console.log('Функция setOLEDClock успешно выполнена.');
    await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
})().catch(err => {
    console.error('Ошибка выполнения:', err);
});