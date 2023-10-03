import './App.css';
import Header from './components/Header';
import { ErrorPage } from './pages/ErrorPage';
import Exercise from './pages/Exercise';
import Foods from './pages/Foods';
import Goals from './pages/Goals';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      
     <Header/>
     <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercises" element={<Exercise/>}/>
      <Route path="/goals" element={<Goals/>}/>
      <Route path="/calories-intake" element={<Foods/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>

   
     </main>
       <footer>Made by Anushka</footer>
    </div>
  );
}

export default App;
