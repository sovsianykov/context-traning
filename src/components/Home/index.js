import React, {Component} from 'react';
import './styles.scss'
import Navbar from "../Navbar";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Home;