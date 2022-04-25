import React, { useState } from 'react';
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';




const GifExpertApp = ({ value = 10 }) => {
 
    const [categories, setCategories] = useState(['Dragon Ball' ]);

    return (
        <>
            <h2>CounterApp</h2>
            <AddCategorie setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={ category } category={ category }/>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
