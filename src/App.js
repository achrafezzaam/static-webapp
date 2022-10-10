import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} width="100px" alt="App logo" />
      </nav>
    </header>
  );
}

function App() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be 
        able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
        if I know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return(
    <footer>
      <small>© 2022 Achraf Ezzaam development. All rights reserved.</small>
    </footer>
  );
}

export {Header, App, Footer};
