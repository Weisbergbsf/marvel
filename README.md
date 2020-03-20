# Marvel

Marvel is a project developed with React and Ant Design. This application will allow the user to see the list of all characters, where each character is displayed on a Card with the name and the image. It is also possible to search for a character by name, list in alphabetical order, view the details and series of the character, edit the name and description of the character and mark it as a Favorite.

This project uses the official Marvel API which only provides the GET method. To simulate a PATCH of a character's data and to favor it, Local Storage was used - which makes it possible to store data locally in the user's browser.

## Demo
Marvel (https://marvel-heroess.herokuapp.com/)

### Documentation for:

- React (https://reactjs.org/);
- Ant Design of React (https://ant.design/docs/react/introduce)
- Marvel (https://developer.marvel.com/docs#)

### Libraries and versions used in this project:

[![react-image]][react-url]
[![ant-design-image]][ant-design-url]
[![axios-image]][axios-url]
[![react-router-image]][react-router-url]
[![react-redux-image]][react-redux-url]
[![redux-image]][redux-url]

### How to install and launch

```
1. git clone https://github.com/Weisbergbsf/marvel.git
2. cd marvel
3. npm install 
4. npm start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### How to run the test
```
  1. git clone https://github.com/Weisbergbsf/marvel.git
  2. cd marvel
  3. npm install
  4. npm test
```

### File Structure

Within the download you'll find the following directories and files:

```
marvel
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── marvel.svg       
    ├── components
    │   ├── Backdrop
    │   │   ├── Backdrop.js
    │   │   └── styles.js
    │   ├── Card
    │   │   ├── CustomCard.js
    │   │   └── styles.js
    ├── containers
    │   ├── Characters
    │   │   └── Characters.js
    ├── layouts
    │   ├── DefaultLayout.js
    │   ├── Navigation.js
    │   └── styles.js
    ├── models
    │   └── Character.js
    ├── routes
    │   └── routes.js
    ├── services
    │   └── storageService.js
    ├── store
    │   ├── actions
    │   │   ├── utils
    │   │   │   └── defaultMethods.js
    │   │   ├── charactersAction.js
    │   │   └── index.js
    │   ├── reducers
    │   │   ├── charactersReducer.js
    │   │   └── index.js
    │   ├── index.js
    │   └── types.js
    ├── test
    │   ├── mock 
    │   │   └── dummy-data.js 
    │   ├── charactersReducer.test.js
    │   ├── CustomCard.test.js
    │   └── EditCharacter.test.js
    ├── utils
    │   └── api.js
    ├── views
    │   ├── CharacterDetails
    │   │   ├── CharacterDetails.js
    │   │   └── styles.js
    │   ├── EditCharacter
    │   │   ├── EditCharacter.jsx
    │   │   └── styles.js
    │   ├── Favorites
    │   │   ├── Favorites.js
    │   │   └── styles.js
    │   └── Home
    │      └── Home.js
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── serviceWorker.js
    ├── setupTests.js
    ├── .gitignore
    ├── package.json
    └── README.md

```

### Supported Browsers

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


#### Social Media

Linkedin: <https://www.linkedin.com/in/weisberg-barros-3847b126/>



<!-- Markdown link & img -->
[react-image]: https://img.shields.io/badge/React-16.13.0-blue.svg
[react-url]: https://reactjs.org/

[ant-design-image]: https://img.shields.io/badge/Ant%20Design-4.0.3-green.svg
[ant-design-url]: https://ant.design/docs/react/introduce

[axios-image]: https://img.shields.io/badge/axios-0.19.2-orange.svg
[axios-url]: https://github.com/axios/axios

[react-router-image]: https://img.shields.io/badge/React%20Router-5.1.2-blue.svg
[react-router-url]: https://reacttraining.com/react-router/web/guides/quick-start

[react-redux-image]: https://img.shields.io/badge/React%20Redux-7.2.0-purple.svg
[react-redux-url]: https://react-redux.js.org/

[redux-image]: https://img.shields.io/badge/Redux-4.0.5-orange.svg
[redux-url]: https://redux.js.org/