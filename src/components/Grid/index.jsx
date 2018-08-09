import React, { Component } from 'react';
import GridItem from './GridItem';

class Grid extends Component {
    render() {
        let items = [
            {
                name: 'Classic abstract',
                author: 'by Derek Potrene 2017',
                style: {
                    height: 190
                }
            },
            {
                name: 'Falling of human',
                author: 'by Albert Smith 2012',
                style: {
                    height: 235
                }
            },
            {
                name: 'People and rain',
                author: 'by Mary Wilson 1998'
            },
            {
                name: 'Like an Angel',
                author: 'by Valery Oruame 2001'
            },
            {
                name: 'Poor Simplicity',
                author: 'by Jack Somerson 1997'
            },
            {
                name: 'Missing moonlight',
                author: 'by Anna Marie Ven 2010'
            },
            {
                name: 'Stairs without colors',
                author: 'by Victor Rombera 2004'
            },
            {
                name: 'Blue travel',
                author: 'by Fred Gabrielson 1999'
            },
            {
                name: 'Beautiful impression',
                author: 'by Nancy Wither 2007'
            },
            {
                name: 'Like a Spring',
                author: 'by Roman Davidov 1987'
            },
            {
                name: 'Feelings collection',
                author: 'by Mike van Rahn 1995'
            },
            {
                name: 'In the circle',
                author: 'by San Van Coon 2011'
            },
            {
                name: 'Grey sky above me',
                author: 'by Victor Perkins 1999'
            },
            {
                name: 'Abstract thing',
                author: 'by Aaron Midelson 2001'
            },
            {
                name: 'Out of memory',
                author: 'by Jack Rose 2014'
            }
        ];

        return (
            <div className="js-chocolate">
                {items.map((item, i) => (
                    <GridItem key={i} id={i} item={item}/>
                ))}
            </div>
        );
    }
}

export default Grid;
