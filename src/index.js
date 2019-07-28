import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import * as serviceWorker from './serviceWorker'
import './sass/index.scss'

import data from './data.json'

import Modal from './modules/_modal/Modal'
import Home from './modules/home/Home'
import Agenda from './modules/agenda/Agenda'
import Schedule from './modules/schedule/Schedule'
import About from './modules/about/About'
import Gallery from './modules/gallery/Gallery'
import Footer from './modules/footer/Footer'
import Thanks from './modules/thanks/Thanks'
import './mobile.scss'

class App extends Component{
    state = {
        showModal: false
    }

    handleModal = () =>{
        let { showModal } = this.state;
        this.setState({showModal : !showModal})
    }

    Landing = () => {
        let { showModal } = this.state;
        return(
        <React.Fragment>
            <Home modal={this.handleModal} />
            { data.config.evento_ativo && 
            <div>
                <Schedule />
                <Agenda />
            </div>
            }
            <About modal={this.handleModal} />
            <Gallery />
            <Footer />
            {showModal && <Modal modal={this.handleModal}/>} 
        </React.Fragment>
        )
    }

    render(){        
        return(
            <Router>
                <Route path="/" exact component={this.Landing} />
                <Route path="/thanks" exact component={Thanks} />                
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
