import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';


const palette = {
    primary: { main: '#BDBDBD', contrastText: '#000000' },
    secondary: { main: '#E65100', contrastText: '#000000' },
};
const themeName = 'Silver Trinidad Snow Leopard';

const theme = createMuiTheme({ palette, themeName });


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById('app'),
);
