import React, {Component} from 'react';
import './styles.scss'
import Navbar from "../Navbar";
import Header from "../Header";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
            </div>
        );
    }
}

export default Home;