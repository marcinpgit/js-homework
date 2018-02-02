import React from 'react';
import { players, tableHead } from '../data/Players';

export class Main extends React.Component {
    render() {
        const playersId = Object.keys(players);
        const tableVal = Object.values(tableHead);
        return (
        <table>
            <th>{ tableVal[0] }</th>
            <th>{ tableVal[1] }</th>
            <th>{ tableVal[2] }</th>
            <th>{ tableVal[3] }</th>

            { playersId.map(num =>
                <tr>
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