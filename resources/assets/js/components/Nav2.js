import React, { Component, Fragment } from 'react';
import '../bootstrap.js';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';


export default class Navs extends Component {

    render() {
        return (
            <Fragment>
            <Header />
            <Content />
             <Footer />   
            </Fragment>
        );
    }
}
