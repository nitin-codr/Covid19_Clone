import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import './App.css';
class Navbar extends Component {
    state = {
        open: false
    }
    handleClose = () => {
        this.setState({open: false})
    }
    handleToggle = () => {
        let x=this.state.open;
        this.setState({open: !x});
    }
    handleKey = (event) => {
        console.log(event);
        if(event.keyCode===27) {
            this.handleClose();
        }
    }
    render() {
        return (
            <div className="bd-example">
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <a className="home_logo" href="/">Covid-19</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <Button variant="contained" color="primary" style={{margin: "1% 0.5%", padding: "1%", minWidth: "8vw", color: "white"}} href="/">
                                Home
                            </Button>
                            <Button variant="contained" color="primary" style={{margin: "1% 0.5%", padding: "1%", minWidth: "8vw", color: "white"}} href="/symptoms">
                                Symptoms
                            </Button>
                            <Button variant="contained" color="primary" style={{margin: "1% 0.5%", padding: "1%", minWidth: "8vw", color: "white"}} href="/preventions">
                                Preventions
                            </Button>
                            <Button variant="contained" color="primary" style={{margin: "1% 0.5%", padding: "1%", minWidth: "8vw", color: "white"}} href="/faqs">
                                FAQs
                            </Button>
                            <Button variant="contained" color="primary" style={{margin: "1% 0.5%", padding: "1%", minWidth: "8vw", color: "white"}} href="/about">
                                About Us
                            </Button>
                        </ul>
                        <form className="form-inline">
                            <Button variant="contained" color="secondary" onClick={this.handleToggle}>
                                Show Covid-19 Symptoms Checker
                            </Button>
                            <Backdrop open={this.state.open} onKeyDown={(e) => this.handleKey(e)} onClick={this.handleClose} style={{zIndex: "100"}}>
                                <div className="backdrop_data">
                                    <h2 >Covid-19 Symptoms checker: By Johns Hopkins Medicine</h2>
                                    <ul >
                                        <h5>
                                            <li>
                                                Check yourself for coronavirus symptoms.
                                            </li>
                                            <li>
                                                Learn how to protect yourself and others from COVID-19.
                                            </li>
                                            <li>
                                                Get coronavirus information important to parents and caregivers.
                                            </li>
                                            <li>
                                                Click on 'I accept' to continue.
                                            </li>
                                        </h5>
                                    </ul>
                                    <iframe className="checker_iframe" id="checker-iframe" title="Coronavirus (COVID-19) Self-Checker" src="https://jhmcoronavirusselfchecker.azurewebsites.net/" />
                                </div>
                            </Backdrop>
                        </form>
                    </div>
                </nav>
            </div>
        )
    };
};

export default Navbar;