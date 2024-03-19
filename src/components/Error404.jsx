import Footer from "./Footer";
import Header from "./Header";
import '../components/Error404.css'

export function Error404() {
    return (
        <>
            <Header />
            <section className="ErrorSection">
                <h1 className="titleErrorPage">page is not found</h1>
                <h2 className="titleErrorPageN">4<span> 0 </span>4</h2>
                <button className="linkToMainPageBtnError">main page</button>
            </section>
            <Footer />
        </>
    )
}