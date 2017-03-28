import React from 'react';
import ReactDOM from 'react-dom';

class ChocolateItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let items = [
            {
                name: "Classic abstract",
                author: "by Derek Potrene 2017"
            },
            {
                name: "Falling of human",
                author: "by Albert Smith 2012"
            },
            {
                name: "People and rain",
                author: "by Mary Wilson 1998"
            },
            {
                name: "Like an Angel",
                author: "by Valery Oruame 2001"
            },
            {
                name: "Poor Simplicity",
                author: "by Jack Somerson 1997"
            },
            {
                name: "Missing moonlight",
                author: "by Anna Marie Ven 2010"
            },
            {
                name: "Stairs without colors",
                author: "by Victor Rombera 2004"
            },
            {
                name: "Blue travel",
                author: "by Fred Gabrielson 1999"
            },
            {
                name: "Beautiful impression",
                author: "by Nancy Wither 2007"
            },
            {
                name: "Like a Spring",
                author: "by Roman Davidov 1987"
            },
            {
                name: "Feelings collection",
                author: "by Mike van Rahn 1995"
            },
            {
                name: "In the circle",
                author: "by San Van Coon 2011"
            },
            {
                name: "Grey sky above me",
                author: "by Victor Perkins 1999"
            },
            {
                name: "Abstract thing",
                author: "by Aaron Midelson 2001"
            },
            {
                name: "Out of memory",
                author: "by Jack Rose 2014"
            }
        ];

        return (
            <div className="js-chocolate">
                {items.map((picture, key) => (
                    <div className="js-item" key={key}>
                        <div className={"item-" + (key + 1)}>&nbsp;</div>
                        <div className="item-info">
                            <p className="item-text">{ picture.name }</p>
                            <p className="item-author">{ picture.author }</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <ChocolateItem />,
    document.getElementById("js-chocolate-test")
);

