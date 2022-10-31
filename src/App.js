import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Button from './components/Button';
import Form from './components/Form';
import Counter from './components/Counter';

// ROOT COMPONENT
function App() {
  const cssStyles={
    backgroundColor: 'blue'
  }
  return (
    <div className="App">
      <header className="App-header" style={cssStyles}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Hello this is my first React app!
        </p>
        <div className="flex">
          <Cat color="#eb9e34" name="Tabitha" lackOfCommonSense={true} />
          <Cat color="#f2f2d0" name="Mog" lackOfCommonSense={false} />
          <Cat color="#f2e2d0" name="Sam" lackOfCommonSense={true} />
        </div>
        <div className='flex'>
          <Dog name="Billy" color="#ad6340" dogYears={4} />
        </div>

      
      </header>
      <Form />
      <Counter />
    </div>
  );
}

export default App;
