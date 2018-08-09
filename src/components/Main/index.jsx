import React, { Component } from 'react';
import Grid from '../Grid';

class Main extends Component {
    render() {
        return (
            <main className="container-fluid chocolate-grid-items">
                <div className="chocolate-grid-text">
                    <h4>Resize container with pictures</h4>
                </div>
                <Grid />
            </main>
        );
    }
}

export default Main;
