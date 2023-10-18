import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { GenderBanner } from './components/GenderBanner';
import { CuponCard } from './components/CuponCard';
import CategoryProduct from './components/CategoryProduct';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
    
    <Header></Header>
    <GenderBanner></GenderBanner>
    <CuponCard></CuponCard>
    <CategoryProduct></CategoryProduct>
    <Footer></Footer>
    
    </>
  );
}

export default App;
