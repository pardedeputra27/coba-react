import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//use useState
import React,{useState} from 'react';

const App = () => {
    const navHeading = "Navigation Bar";
    const navText = "Putra Pardede";

    const [getNavbarValue,setNavbarValue] = useState('');
    const [getPacar,setPacar] = useState(0);

    const cliked = () =>{
        setNavbarValue('Putra Pardede');
    }
    // menggunakan function
    const paragraf = ()=> {
        return (
        <div>   
            <p>Mantap bang</p>
            <i> Selamat </i>
            <marquee>Yee... Lulus</marquee>
        </div>
        );
    } 
    // menggunakan  variable
    //const paragraf = <i>Mantap bang</i>;
  return (
    <div className="App">
      <header className="App-header">
          <h1>Saya Miliki {getPacar} Anjing</h1>
          <button onClick={()=>setPacar((prev)=>(prev>=0)? prev+1 :prev)}>Tambah</button>
          <button onClick={()=>setPacar((prev)=>(prev<=0)? prev :prev-1)}>Kurang</button>
        <Navbar test={navText} navHeading ={navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hellow {!getNavbarValue?'Cuy':getNavbarValue} 😂</p>
        <MyButton klik ={cliked}/>
        <Footer paragraf ={paragraf} />
      </header>
    </div>
  );
}

export default App;
