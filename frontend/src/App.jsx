import React, { useState, useEffect } from 'react';

import {
    Tabs, Paper, Tab, Container, Grid, AppBar, Toolbar, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useFetch, { Fetcher } from './components/fetchData';
import Header from './components/header';
import RaiderTable from './components/raiderTable';
import RaidPanel from './components/raidPanel';

const App = () => (
    <CssBaseline>
        <AppBar position="sticky">
            <Toolbar>
                <Header />
            </Toolbar>
        </AppBar>
        <Container fixed>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignitems="stretch"
            >
                <Fetcher url="http://localhost:8000/api/raids">
                    {(raids) => raids.map(({ url }) => (
                        <div style={{ paddingTop: 15 }}>
                            <RaidPanel url={url} />
                        </div>
                    ))}
                </Fetcher>
            </Grid>
        </Container>
    </CssBaseline>
);

export default App;
