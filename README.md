Requirements:

    1) Adding a new task
    2) Moving tasks between lists
    3) Saving changes to localStorage
    4) Task description page
    5) Displaying the number of tasks in the footer
    6) User dropdown menu


React Requirements

    1) The interface must be divided into components. Before you begin, think carefully about what components you will use. The division into components must be logical and justified.
    2) Once you decide on the division into components, think about how to properly organize the file structure.
    3) Follow the principles of modularity (use export, import).
    4) Use Typescript to describe data types.
    5) Use Synthetic events to work with events.
    6) To display different states of elements depending on user actions (example: expanded/collapsed user menu), use conditional rendering.
    7) To implement separate pages for each task and transition between pages, use the react-router library.
    8) You need to add tests for key React components.
    9) When writing code, try to follow the KISS (Keep It Short and Simple) and DRY (Don’t Repeat Yourself) principles.


Layout and CSS requirements

    1) The layout must match the layout. It is not necessary to achieve Pixel Perfect compliance, but the main points must be observed: colors, fonts, sizes, indents.
    2) The application must be displayed correctly on mobile devices. You can find the design for the mobile version in the layout.
    3) Follow semantic layout. The application must have <header>, <main> and <footer> sections. Buttons should be implemented by a <button> element, dropdown elements by a <select> list, and so on.
    4) When you hover over any clickable elements, cursor: pointer should appear.
    5) Consider the states of the + Add card button - active and inactive.
        5.1) If a button is active, its appearance should match the layout. When you hover, it should be highlighted (change color), and the cursor should change to pointer.
        5.2) If the button is inactive (the disabled attribute is assigned), its color should be different from the active state, the button should not respond to hover (the color remains the same, the pointer cursor does not appear).
    6) You can use any style connection option of your choice: a common project style file, CSS modules, or special React libraries for styling components (for example, Styled Components).
    7) You cannot use tag and id selectors to set styles. Use classes.


Other requirements

    1) Write your code carefully, using formatting and indentation.
    2) Try to give meaningful names to components, variables, and functions.
    3) Try to use modern ES6 syntax: arrow functions, decomposition, spread, etc.
    4) When hosting a project on GitHub, remember to add the node_modules folder to your .gitignore file so that it doesn't end up in your repository. You can read about how to set up .gitignore and why the node_modules folder should not be in the repository in this article.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
