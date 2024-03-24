import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import OurTeam from './OurTeam';
import Membership from './Membership';
import Agents from './Agents';
import Blog from './Blog';
import { Error404 } from './Error404';
import AreaGuides from './AreaGuides';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/areaguides" element={<AreaGuides />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}