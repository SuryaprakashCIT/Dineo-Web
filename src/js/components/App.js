import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dineo from '../containers/dineoContainer';
require('../../scss/style.scss');

const App = () => (
    <MuiThemeProvider>
        <Dineo />
    </MuiThemeProvider>
);
 
export default App;
