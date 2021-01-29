# react_realtime_plot
React with realtime plots

## Blank project
`shell
npx create-react-app .
`

## Chart library
`shell
npm install react-chartjs-2 chart.js

## Github pages deployment
`shell
npm install gh-pages --save-dev
`

## Pulisshing in github pages
homepage: https://dheepdatascigit.github.io/react_realtime_plot/

`shell
npm run build
npm run deploy
`

# Testing
## e2e Testing

`shell
npm i --save-dev jest jest-cli puppeteer faker
`
Jest — a testing tool created by Facebook to test React apps or basically any JavaScript app

jest-cli — a CLI runner for Jest

Puppeteer — a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. We’ll use this to carry out tests from a user’s perspective.

faker — a tool that helps to generate massive amounts of fake data in the browser. We’ll use it to generate data for Puppeteer.