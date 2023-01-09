# CSS Variables

Change the spacing and blur effect of a picture using sliders and change an element's color using a color-picker. Makes use of JavaScript to modify the values of CSS variables and alter an element's styling.

## JavaScript concepts:

- document.querySelectorAll()
- this.dataset (to select CSS --data variables)
- document.documentElement.style.setProperty()
- template literals / string literals
- .forEach()
- .addEventListener()
    - .addEventListener("change", () => {})
    - .addEventListener("mousemove", () => {})


## HTML concepts:

- data- attributes (to pair with CSS variables)

## CSS concepts:

- CSS variables (--variable-name)
    - example: --base: #ffc600;
    - example: --spacing: 10px;
    - example: --blur: 10px;

Deployed at: https://vish213-css-variables.netlify.app/