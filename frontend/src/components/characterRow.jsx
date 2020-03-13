import React from 'react';
import {
    TableRow, TableCell, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Fetcher } from './fetchData';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const roles = {
    HEALER: 'priest',
    TANK: 'warrior',
    DPS: 'rogue',
};

const classIcons = {
    Cadros: 'druid',
    Malzifari: 'priest',
    Tamzin: 'warlock',
    Mansi: 'druid',
    Turq: 'rogue',
    Slackrah: 'warlock',
    Handsomepoo: 'warrior',
    Thrifty: 'warrior',
    Nukbar: 'shaman',
    Bill: 'rogue',
};

export default ({ url }) => (
    <Fetcher url={url}>
        {({ name, roles: characterRoles }) => (
            <TableRow key={name}>
                <TableCell align="left">
                    <img
                      alt={name}
                      src={`https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/${classIcons[name]}.png`}
                      style={{ width: 25, height: 25 }}
                    />
                </TableCell>
                <TableCell align="right">
                    <Typography>
                        {name}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    {characterRoles.map((role) => (
                        <img
                          alt={role}
                          src={`https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/${roles[role]}.png`}
                          style={{ width: 25, height: 25, paddingRight: 2 }}
                        />
                    ))}
                </TableCell>
            </TableRow>
        )}
    </Fetcher>
);
