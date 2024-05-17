import {Home,Header,Hcomp,About,Hobby,Portfolio,Plate,Footer} from './components/index';
import './App.css';
import background from './images/background.png';
import { RiRepeat2Fill } from 'react-icons/ri';









function App() {
  return(
  <div  className="all">
    <header className='header1'><Header /></header>
    <main className='main1'>
        <Home />
        <div id="about"><About /></div>
        <div id= "hobby"><Hobby /></div>
        <div id="portfolio"><Portfolio /></div>
    </main>
    <footer className='footer1'><Footer/></footer>
    
  </div>
  )}

export default App;
