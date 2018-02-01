import React from 'react';
import { players } from '../data/Players';

export class Main extends React.Component {
    render() {
        const playersId = Object.keys(players);
        return (
        <table>
            {playersId.map(id =>
                <tr>{ players[id].id}</tr>
            )}
        </table>
        );
    }
}