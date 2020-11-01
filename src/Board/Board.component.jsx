import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import './Board.styles.css';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasWon: false,
            board: this.craeteBoard()
        };
    }

    craeteBoard = () => {
        let board = [];
        
        for(let y = 0; y< this.props.nrows; y++) {
            let row = [];
            for(let x =0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
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
