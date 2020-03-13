import React from 'react';
import {
    Table, TableHead, TableCell, TableRow, Toolbar, Typography, Paper, AppBar, Grid, Divider,
} from '@material-ui/core';
import CharacterRow from './characterRow';


export default ({ raid }) => (
    <Table style={{ marginLeft: '5%', width: '90%', marginRight: '5%' }} size="small">
        <TableHead>
            <TableRow>
                <TableCell>Class</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Role</TableCell>
            </TableRow>
        </TableHead>
        {raid.raiders.map((raider) => (
            <CharacterRow url={raider} />
        ))}
    </Table>
);
