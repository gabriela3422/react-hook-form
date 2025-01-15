import Home from "../pages/Home/Home.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {DataProvider} from "../context/DataContext.jsx";

const MainLayout = () => {
    return (
        <div className="main-app">
            <div className="container">
                <Header/>
                <main>
                    <DataProvider>
                        <Home/>
                    </DataProvider>
                </main>
                <Footer/>
            </div>
        </div>
    )
}
export default MainLayout