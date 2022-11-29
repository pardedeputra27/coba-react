import './App.css';
import YoutubeComp from './components/YoutubeComp/YoutubeComp';
import Product from './container/produk/Product';




const  App = () => {
  return (
      <div>
        <h1>React Component</h1>
        <hr />
        <YoutubeComp time='12.1'  title = "Belajar react Bagian 1"  desc ="1x ditonton 12 hari yang lalu" />
        <YoutubeComp time='21.2' title = "Belajar react Bagian 2"  desc ="1xxx ditonton 240 hari yang lalu"/>
        <YoutubeComp time='22.4' title = "Belajar react Bagian 4"  desc ="2jt ditonton 2 tahun yang lalu"/>
        <YoutubeComp />
        <hr />
        <Product />
      </div>
  );
}



export default App;
