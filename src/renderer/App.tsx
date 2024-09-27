import { MemoryRouter as Router, Routes, Route, Link} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import Welcome from './Pages/Welcome/Welcome';
import ChoosePerson from './Pages/ChoosePerson/ChoosePerson';
import Style from './Pages/Styles/Styles';
import Photo from './Pages/Photo/Photo';
import Result from './Pages/Result/Result';
import "tailwindcss/tailwind.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/person" element={<ChoosePerson/>}></Route>
        <Route path="/style" element={<Style/>}></Route>
        <Route path="/photo" element={<Photo/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
      
      </Routes>
    </Router>
  );
}
