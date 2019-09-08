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

By Mari &copy; 2019
with :v:  &  :green_heart:


