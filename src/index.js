import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import Modal from './modules/_modal/Modal';
import Home from './modules/home/Home';
import Schedule from './modules/schedule/Schedule';
import About from './modules/about/About';
import Gallery from './modules/gallery/Gallery';
import Footer from './modules/footer/Footer';
import './mobile.scss';


class App extends Component{
    state = {
        showModal: false
    }

    handleModal = () =>{
        let { showModal } = this.state;
        this.setState({showModal : !showModal})
    }

    render(){
        let { showModal } = this.state;
        return(
            <div>
                <Home modal={this.handleModal} />
                <Schedule />
                <About modal={this.handleModal} />
                <Gallery />
                <Footer />
                {showModal && <Modal modal={this.handleModal}/>} 
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
