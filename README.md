# Cocktail Guide 🍸

## Technology Used

    React ⚛️
    React Router
    Styled Components 💅
    Bulma

## Try the App

If you want to try the app, you just have to clone and run it:

    git clone https://github.com/isisLazaro/cocktel-guide.git
    cd cocktel-guide
    npm install
    npm start

Your browser should open a new window for http://localhost:3000

## About

The Cocktail Guide is a web application to find cocktails ideas and inspiration.

![gatsby](https://media.giphy.com/media/rY93u9tQbybks/source.gif)

I wanted to create a page where the user can explore cocktails ideas searching by name using the [TheCocktailDB](https://www.thecocktaildb.com/) [API](https://www.thecocktaildb.com/api.php).

A search form was enabled in order the user could write a cocktail main and in the below section the results were displayed like a card collection. Every card displays the cocktail image and name and has a button to the recipe instructions.

The architecture folders structure consists in a source (src) folder with the following folders and files:

- components: All the class (states) and functional components
- constants: API end point url
- router: index.js with the router structure
- utils: fetch function
- App.js: It has the main html structure and the API call when the page loads (componentDidMount).

I wrote stateless functional components and class components (state management). For both type of components, I used [Bulma](https://bulma.io/) CSS framework for fast developing and [styled components](https://www.styled-components.com/) to use actual CSS syntax inside the components.

## Future Plans

- Improve UX with clearer notifications: e.g. cocktail name not found
- Enable type of alcohol (vodka, run, gin, etc.) selectors for a smooth page navigation.
- Enhance recipe pages: display ingredients and stylize view
- Code iteration: efficient API call
  -Control state with Redux: Make presentational and container components file structure. Connect container elements to Redux store.
- Write unit tests with jest.
