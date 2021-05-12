import Register from '../pages/Register';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Application = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        {/* Registeration popup */}
        <Route path="/register/flow">
          <Signup/>
        </Route>
        <Route path="/login">
          <Signin/>
        </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default Application