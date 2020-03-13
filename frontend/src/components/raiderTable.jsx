import React from 'react';
import {
    Table, TableHead, TableCell, TableRow, Toolbar, Typography, Paper, AppBar, Grid, Divider,
} from '@material-ui/core';
import CharacterRow from './characterRow';

import useFetch from './fetchData';

export default ({ url }) => {
    const [raid, loading] = useFetch(url);


    return (
        loading ? 'loading' : (
            <Paper key={url}>
                <Toolbar>
                    <Grid
                      container
                      direction="row"
                      spacing={24}
                      justify="space-between"

                    >
                        <Grid item sm={6} stype={{ flex: 1 }}>
                            <Typography variant="h3">
                                {raid.raid}
                            </Typography>
                            <Divider />
                            <Typography variant="h6">
                                {new Date(raid.date).toLocaleString()}
                            </Typography>
                        </Grid>
                        <Grid item sm={6} justify="flex-end">
                            <Typography variant="h6">
                                {`${raid.healers} healers`}
                            </Typography>
                            <Typography variant="h6">
                                {`${raid.tanks} tanks`}
                            </Typography>
                            <Typography variant="h6">
                                {`${raid.dps} dps`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <div>
                    <Table size="small">
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
                </div>
            </Paper>
        ));
};
