import {Home,Header,Hcomp,About,Hobby,Portfolio,Plate} from './components/index';
import './App.css';






function App() {
  return(
  <div className="all">
    <header className='header1'><Header /></header>
    <main className='main1'>
        <Home />
        <About />
        <Hobby />
        <Portfolio />
      </main>
    
  </div>
  )}

export default App;
