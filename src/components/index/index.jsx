import Home from './../Home/index';
import Portfolio from './../Portfolio/index';
import Work from './../Work/index';
import Social from './../Social/index';
import About from './../About/index';
import Footer from './../Footer/index';
import Profile from './../Profile/index';

function Index() {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <Social />
            <Footer />
        </div>

    );
}

export default Index;
