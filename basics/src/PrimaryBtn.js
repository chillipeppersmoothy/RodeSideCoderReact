import React from 'react';

const PrimaryBtn = ({value,setValue}) => {
    let clearInput = () => {
        setValue("");
    }
    
    return (
        <div>
            <button className='btn' onClick={() => clearInput()}>{value}</button>
        </div>
    )
}

export default PrimaryBtn;