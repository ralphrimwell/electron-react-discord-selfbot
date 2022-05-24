import './App.global.css'
import './discord/bot';
import './discord/rpcback';
import React                      from 'react';
import { Switch, Route, Redirect, Link, BrowserRouter, useHistory} from 'react-router-dom';

import Home            from './pages/homePage';
import Commands        from './pages/commands';
import Dashboard       from './pages/dashboard';
import Login           from './pages/Login';
import NitroSniper     from './pages/nitrosniper';
import Nuker           from './pages/nuker';
import Profile         from './pages/profile';
import Protection      from './pages/protection';
import Raiding         from './pages/raiding';
import Register        from './pages/Register';
import ResetPassword   from './pages/ResetPassword';
import RichPresence    from './pages/rpc';
import TitleBar from './components/TitleBar';
import HomeButton from './components/HomeButton';


export default class App extends React.Component {
  render() {
    return(
            <div>
              <TitleBar />
              <Home/>
              <Switch>
                <Route exact path='/homepage'    component={Home} />
                <Route exact path='/commands'      component={Commands} />
                <Route exact path='/dashboard'     component={Dashboard} />
                <Route exact path='/login'         component={Login} />
                <Route exact path='/sniper'        component={NitroSniper}/>
                <Route exact path='/nuker'         component={Nuker} />
                <Route exact path='/profile'       component={Profile} />
                <Route exact path='/protection'    component={Protection} />
                <Route exact path='/raiding'       component={Raiding} />
                <Route exact path='/register'      component={Register} />
                <Route exact path='/resetpassword' component={ResetPassword} />
                <Route exact path='/rpc'           component={RichPresence} />
              </Switch>
            </div>
    )
  }
};


