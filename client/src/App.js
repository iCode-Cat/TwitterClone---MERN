
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Application from './components/Application';
import UserProvider from "./providers/UserProvider";
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
    <UserProvider>
    <Application/>
    </UserProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
