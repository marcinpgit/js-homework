import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { players, tableHead } from '../data/Players';


export class Main extends React.Component {
    render() {
        const playersId = Object.keys(players);
        return (
        <table>
            <th>{ tableHead[0] }</th>
            <th>{ tableHead[1] }</th>
            <th>{ tableHead[2] }</th>
            <th>{ tableHead[3] }</th>

            { playersId.map(num =>
                <tr key={num}>
                    <td>{ players[num].id }</td>
                    <td>{ players[num].name }</td>
                    <td>{ players[num].level }</td>
                    <td>{ players[num].description }</td>
                </tr>
            )}
        </table>
        );
    }
}