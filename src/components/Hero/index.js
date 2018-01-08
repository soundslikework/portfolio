import React from 'react';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';

const Hero = (props) => {
    const data = props.data;
    return (
        <header>
            <div className="title-container">
                <h2>
                    <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 200, blink: true}}>
                        { data.label.map((labelItem, i) => {
                            return (
                                <span>
                                <span>{labelItem}</span>
                                { i < data.label.length - 1 ? <Typist.Backspace count={labelItem.length} delay={2000} /> : '' }
                                </span>
                            )
                        })}
                    </Typist>
                </h2>
                <h1 className="App-title">{data.name}</h1>
            </div>
        </header>
    );
};

export default Hero;