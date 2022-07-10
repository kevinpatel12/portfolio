import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import ProjectContainer from './pages/homepage/project/projectcontainer';
import { Homepage } from './pages/homepage/homepage';
import { Skils } from './pages/homepage/skills/skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/skills' element={<Skils/>}/>
          <Route path='/project' element={<ProjectContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
