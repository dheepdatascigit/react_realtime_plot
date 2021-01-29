import { render, screen } from '@testing-library/react';
import App from './App';

const puppeteer = require('puppeteer');


const srvURL = 'http://localhost:3000/';
/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Time now/i);
  expect(linkElement).toBeInTheDocument();
});
 */

 describe('Hello text', () => {
   test('Hellow present in page', async () => {
     let browser = await puppeteer.launch({
       headless: false
     });
     let page = await browser.newPage();

     page.emulate({
       viewport: {
         width: 500,
         height: 2400
       },
       userAgent: ''
     });

     await page.goto(srvURL);
     await page.waitForSelector('title');

     const html = await page.$eval('title', e => e.innerHTML);
     expect(html).toBe('React App');

     browser.close();

   }, 15000);
 });

 describe('button click', () => {
   test('Click button increments value', async () => {
     let browser = await puppeteer.launch({
       headless: false,
       devtools: false,
       slowMo: 500
     });

     let page = await browser.newPage();

     page.emulate({
       viewport: {
         width: 1000,
         height: 900
       },
       userAgent: ''
     });

     await page.goto(srvURL);
     await page.waitForSelector('button');
     await page.click('button[name=bincrementor');

     let html = await page.$eval('button[name=bincrementor', e => e.innerHTML);
     expect(html).toContain("65");

     await page.click('button[name=bincrementor');
     html = await page.$eval('button[name=bincrementor', e => e.innerHTML);
     expect(html).toContain("70");


     browser.close();
   }, 20000);
   
 });