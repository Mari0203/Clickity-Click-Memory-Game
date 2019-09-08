# Clickity Click Memory Game

## App Overview
This is a memory game that test user's ability to remember which image one has already clicked. The app is created using Node.js with npm packages and React for building user interfaces.

## How App is Organized
The application follows a MVC design structure, and its UI is broken up into components.  The component state is managed to respond to the user events appropriately.


## Live App:
[Clickity Click Memory Game](https://mari0203.github.io/Clickity-Click-Memory-Game/)


## App Requirements

1. Create a new React application using [Create React App](https://github.com/facebook/create-react-app).

2. The application renders different images to the screen. Each image listens for the player's click events.

3. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

4. The app keeps track of the player's scores. 
    * The player's current score is incremented by one point when clicking an image for the first time. 
    * The player looses if the same image is clicked more than once, resetting the "Current Score" back to 0 and a new round starts.
    * The player's highest score achieved is shown by "Best Score".
    * Reloading the browser clears and reset the entire game back to original starting state.


---


## Available Scripts
In the project directory, you can run:

### `npm start`

 * Runs the app in the development mode.<br>
 * Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

 * Launches the test runner in the interactive watch mode.<br>
 * See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

 * Builds the app for production to the `build` folder.<br>
 * It correctly bundles React in production mode and optimizes the build for the best performance.

 * The build is minified and the filenames include the hashes.<br>
 * Your app is ready to be deployed!

 * See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

 * You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
 * To learn React, check out the [React documentation](https://reactjs.org/).

---

Created by Mari
with :v:  &  :green_heart:


