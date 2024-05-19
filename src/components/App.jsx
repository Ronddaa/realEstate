import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import OurTeam from './OurTeam/OurTeam';
import Blog from './Blog/Blog';
import { Error404 } from './Error404';
import AreaGuides from './AreaGuides/AreaGuides';
import Events from './Events/Events';
import Rent from './Rent'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/areaguides" element={<AreaGuides />} />
        <Route path="/properties" element={<Rent />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}