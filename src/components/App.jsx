import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import OurTeam from './OurTeam';
import Membership from './Membership';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </>
  )
}