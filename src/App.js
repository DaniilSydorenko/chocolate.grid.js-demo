import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    componentDidMount () {
        new window.Chocolate({
            containerSelector: '.js-chocolate',
            containerMaxWidth: 1180,
            itemSelector: '.js-item',
            columnWidth: 260,
            columnMargin: 30
        })
    }

    render () {
        return (
            <div className="wrapper container-fluid">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
