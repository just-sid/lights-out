import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import './Board.styles.css';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasWon: false,
        };
    }

    render() {
        return(
            <table className = 'Board'>
                <tbody>
                    <tr>
                        <Cell isLit = {true} />
                        <Cell isLit = {false} />
                        <Cell isLit = {true} />
                    </tr>
                </tbody>
            </table>
        )
    }
}


export default Board;
