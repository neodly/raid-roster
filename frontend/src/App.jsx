import React, { useState, useEffect } from 'react';

import {
    Container, Grid, AppBar, Toolbar, Typography, FormControl,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Fetcher } from './components/fetchData';
import Header from './components/header';
import RaidsContainer from './components/raidsContainer';


const App = () => (
    <CssBaseline>

        <div style={{
            height: '250px',
            position: 'relative',
        }}
        >
            <img
              style={{ width: '100%', height: '100%', position: 'absolute' }}
              src="https://gamepedia.cursecdn.com/wowpedia/thumb/a/ac/Blackrock_Mountain_%28image3%29.jpg/1200px-Blackrock_Mountain_%28image3%29.jpg"
            />
        </div>

        <Container fixed>
            <Grid
              container
              alignitems="stretch"
            >
                <Grid item xs={3}>
                    <Typography variant="h6"> SOB Raiding Roster </Typography>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  xs={9}
                >
                    <Fetcher url="http://localhost:8000/api/raids">
                        {(raids) => console.log(raids) || <RaidsContainer raids={raids} />}
                    </Fetcher>
                </Grid>
            </Grid>
        </Container>
    </CssBaseline>
);

export default App;
