import React from 'react';

const MainInput = ({value,setValue}) => {
    let onChangeText = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <input placeholder='Enter value ... ' onChange={(event) => onChangeText(event)}/>
            <p>{value}</p>
        </div>
    )
}

export default MainInput;