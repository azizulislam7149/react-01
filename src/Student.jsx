import React from 'react';

const Student = ({task,isDone}) => {
    return (
        <div>
           
           <h2>{isDone ? 'Yes' : 'he is ten years old '} :{task} </h2>
        </div>
    );
};

export default Student;