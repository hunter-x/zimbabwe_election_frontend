import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

export default class RootContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const TITLE = <Translate type='text' content='contact.title' />//Zimbabwe election

        return (
            <div>
                <Navbar home='' about='' data='' contact='active' />

                <section className="main-services">
                    <div className="container">
                        <div className="row">
                            <div className="flat-title style1">
                                <h2>{TITLE}</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}