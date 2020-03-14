import React from 'react';
import {
    Toolbar, Typography, Grid, Divider,
} from '@material-ui/core';

export default ({ raid }) => (
    <Toolbar>
        <Grid
          container
          direction="row"
          spacing={10}
          justify="space-between"
        >
            <Grid item sm={6} stype={{ flex: 1 }}>
                <Typography variant="h3">
                    {raid.raid}
                </Typography>
                <Divider style={{ maxWidth: '50%' }} />
                <Typography variant="h6">
                    {new Date(raid.date).toLocaleString()}
                </Typography>
            </Grid>
            <Grid item sm={6} justify="flex-end">
                <div>
                    <Typography variant="h6">
                        {`${raid.healers} healers`}
                    </Typography>
                    <Typography variant="h6">
                        {`${raid.tanks} tanks`}
                    </Typography>
                    <Typography variant="h6">
                        {`${raid.dps} dps`}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    </Toolbar>
);
