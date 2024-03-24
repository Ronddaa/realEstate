import Footer from "./Footer";
import Header from "./Header";
import '../components/Error404.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

export function Error404() {
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className="ErrorSection">
                <h1 className="titleErrorPage">page is not found</h1>
                <h2 className="titleErrorPageN">4<span> 0 </span>4</h2>
                <Link to='/' className="linkToMainPageBtnError">main page</Link>
            </section>
            <Footer />
        </>
    )
}