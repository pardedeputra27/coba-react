import logo from './logo.svg';
import './App.css';

import React, { useRef } from 'react'

function App() {

   const linkRef =useRef(null);
   const goTo = (ref) => {
        window.scrollTo({
          top:ref.offsetTop,
          left:0,
          behavior:'smooth'
        })
   }
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={()=>{goTo(linkRef.current)}} >
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et.
        Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et. Aliqua non adipisicing occaecat pariatur anim culpa duis. Ex proident non eiusmod esse laboris aliquip deserunt ad Lorem mollit. Sit sunt aliquip reprehenderit ea consectetur. Laboris enim do dolor commodo laborum ullamco do culpa Lorem fugiat. Eu non commodo ut dolor commodo proident id quis. Velit quis consequat sunt officia duis eu labore minim non sunt id mollit sint occaecat.Deserunt nostrud consequat amet do occaecat proident qui adipisicing fugiat id exercitation tempor incididunt. Nostrud aliquip mollit cupidatat officia aliqua elit. Fugiat voluptate aliquip id sit sit fugiat esse ea eu.  </p>
        <p>Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et.
        Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et. Aliqua non adipisicing occaecat pariatur anim culpa duis. Ex proident non eiusmod esse laboris aliquip deserunt ad Lorem mollit. Sit sunt aliquip reprehenderit ea consectetur. Laboris enim do dolor commodo laborum ullamco do culpa Lorem fugiat. Eu non commodo ut dolor commodo proident id quis. Velit quis consequat sunt officia duis eu labore minim non sunt id mollit sint occaecat.Deserunt nostrud consequat amet do occaecat proident qui adipisicing fugiat id exercitation tempor incididunt. Nostrud aliquip mollit cupidatat officia aliqua elit. Fugiat voluptate aliquip id sit sit fugiat esse ea eu pariatur ullamco exercitation. Adipisicing esse deserunt reprehenderit reprehenderit elit deserunt tempor do ipsum. Pariatur nostrud cillum anim occaecat qui exercitation reprehenderit dolor proident incididunt. </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" ref={linkRef}
        >
          Learn React
        </a>
        <p>Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et.
        Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et. Aliqua non adipisicing occaecat pariatur anim culpa duis. Ex proident non eiusmod esse laboris aliquip deserunt ad Lorem mollit. Sit sunt aliquip reprehenderit ea consectetur. Laboris enim do dolor commodo laborum ullamco do culpa Lorem fugiat. Eu non commodo ut dolor commodo proident id quis. Velit quis consequat sunt officia duis eu labore minim non sunt id mollit sint occaecat.Deserunt nostrud consequat amet do occaecat proident qui adipisicing fugiat id exercitation tempor incididunt. Nostrud aliquip mollit cupidatat officia aliqua elit. Fugiat voluptate aliquip id sit sit fugiat esse ea eu.  </p>
           <p>Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et.
        Mollit id do ipsum dolore pariatur enim consectetur elit deserunt duis sint.
           Est non ad esse irure nostrud. Duis officia ad eiusmod velit veniam do cillum minim quis anim. 
           Irure qui cupidatat qui consectetur consequat aliqua et. Aliqua non adipisicing occaecat pariatur anim culpa duis. Ex proident non eiusmod esse laboris aliquip deserunt ad Lorem mollit. Sit sunt aliquip reprehenderit ea consectetur. Laboris enim do dolor commodo laborum ullamco do culpa Lorem fugiat. Eu non commodo ut dolor commodo proident id quis. Velit quis consequat sunt officia duis eu labore minim non sunt id mollit sint occaecat.Deserunt nostrud consequat amet do occaecat proident qui adipisicing fugiat id exercitation tempor incididunt. Nostrud aliquip mollit cupidatat officia aliqua elit. Fugiat voluptate aliquip id sit sit fugiat esse ea eu.  </p>
      </header>
    </div>
  );
}

export default App;
