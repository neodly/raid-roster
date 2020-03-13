import React, { useState, useEffect } from 'react';

import {
    Tabs, Paper, Tab, Container, Grid, AppBar, Toolbar, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useFetch from './components/fetchData';
import Header from './components/header';
import RaiderTable from './components/raiderTable';


const App = () => {
    const [data, loading] = useFetch('http://localhost:8000/api/raids');
    return (
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
                    {loading ? 'Loading'
                        : data.map(({ url }) => (
                            <div style={{ paddingBottom: 5 }}>
                                <RaiderTable url={url} />
                            </div>
                        ))}

                </Grid>
            </Container>
        </CssBaseline>
    );
};


export default App;
