
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import Register from './pages/Register';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#42a5f5',
      contrastText:'#fff'
    },
    secondary: {
      main: '#42a5f5',
    },
  },
});
function App() {
  return (
    <div>
        <ThemeProvider theme={theme}>

    <BrowserRouter>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
