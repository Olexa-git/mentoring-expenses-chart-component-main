# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

Spending chart with information about daily expenses. Data to create chart is taken from the json file or alternatively could be taken from web (only address need to be added in script file).

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- Use the JSON data file to dynamically size the bars on the chart

### Screenshot

./screenshot.jpg

### Links

- Solution URL: https://github.com/Olexa-git/mentoring-expenses-chart-component-main
- Live Site URL: https://olexa-git.github.io/mentoring-expenses-chart-component-main/

## My process

HTML => CSS => JS

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This challenge was useful for me to understand how I can position one element (USD amount spent on a certain day) over the other element (column representing spent amount), and at the same time position both on the bottom line of the container. As columns were created dynamically and their height was not specified but was dependent on the JSON data, it was necessary to stick one element to another. I was using "display: table-cell" style for that purpose.