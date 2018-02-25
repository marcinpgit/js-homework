import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { players, tableHead } from '../data/Players';


export class Main extends React.Component {
    render() {
        const playersId = Object.keys(players);
        const tableHeader = Object.keys(tableHead);
        return (
        <table>
            { tableHeader.map(th =>
                <th>{ tableHead[th] }</th>)}

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