import React from 'react';
import './Cell.styles.css';

const Cell = (props) => {
    let classes = "Cell" + (props.isLit ? " Cell-lit" : "");
    return (
        <td className = {classes} />
    )
}

export default Cell;