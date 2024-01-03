import logo from './logo.svg';
import './App.css';
import Ba from "./Ba";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

      <div className="App">
        输入文字:<input type='text' onChange={(a)=>{console.log('输入的内容:',a.target.value);}}/><button>更新</button><br/>
        <span>我是app,我也设置一个值:{}</span><br/>
        <Ba/>
      </div>
  );
}

export default App;
