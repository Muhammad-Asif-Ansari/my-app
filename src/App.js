// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello World</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import FooterSec from "./components/footer/Footer.js";
import Header1 from "./components/header/Header.js";
import "./App.css"
function App(){
  return (
    <div>
      <Header1/>
      <FooterSec/>
    </div>
  )
}

export default App;
