import React from 'react';

const Singer = ({name}) => {
    return (
        <div className='singer'>
            <h2> id :{name.id} </h2>
            <h2>position:{name.quality} </h2>
            <h2>name:{name.name} </h2>
        </div>
    );
};

export default Singer;