import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

// import React from 'react'; //react library
// import ReactDOM from 'react-dom'; //react DOM - to manipulate elements
// import './index.css';
// import SearchBar from './components/Search';
// import GifList from './components/SelectedList';

// class Root extends React.Component { //Component that will serve as the parent for the rest of the application.

//   constructor() {
//     super();

//     this.state = {
//       gifs: []
//     }
//   }

//   handleTermChange(term) {
//     console.log(term);
//     //---------------------->
//     let url = 'http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC';
//     fetch(url).
//     then(response => response.json()).then((gifs) => {
//       console.log(gifs);
//       console.log(gifs.length);
//       this.setState({
//         gifs: gifs
//       });
//     });//<------------------------- THIS CODE HERE
//   };


//   render() {
//     return (
//       <div>
//         <SearchBar onTermChange={this.handleTermChange} />
//         <GifList gifs={this.state.gifs} />
//       </div>
//     );
//   }
// }
// ReactDOM.render( <Root />, document.getElementById('root'));