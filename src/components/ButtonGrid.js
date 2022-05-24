import React from 'react';
import { useHistory, Link } from 'react-router-dom'

import dashboardimg from '../assets/speedometer2.svg'
import personimg from '../assets/person-fill.svg'
import crosshairimg from '../assets/crosshair.svg'
import nukerimg from '../assets/nuker.svg'
import commandsimg from '../assets/commands.svg'
import shieldimg from '../assets/shield-shaded.svg'
import rpcimg from '../assets/rpc.svg'

const ButtonGrid = () => {


      const history = useHistory();


        return (

            <div className="grid-buttons">
                  <button className="grid-button" onClick={() => history.push('/dashboard')}>
                    <div>
                      <img className="dashboardimg" src={dashboardimg} />
                    </div>

                  </button>
                  <button className="grid-button" onClick={() => history.push('/profile')}>
                  <div>
                      <img className="personimg" src={personimg} />
                    </div>
                  </button>
                  <button className="grid-button" onClick={() => history.push('/sniper')}>
                  <div>
                      <img className="crosshair" src={crosshairimg} />
                    </div>
                  </button>
                  <button className="grid-button" onClick={() => history.push('/nuker')}>
                  <img className="nuker" src={nukerimg} />
                  </button>


                  <button className="grid-button" onClick={() => history.push('/commands')}>
                  <img className="commands" src={commandsimg}/>
                  </button>

                  <button className="grid-button" onClick={() => history.push('/protection')}>
                    <img className="shield" src={shieldimg} />
                    </button>
                  <button className="grid-button" onClick={() => history.push('/rpc')}>
                  <img className="rpc" src={rpcimg} />
                  </button>
                  <button className="grid-button" onClick={() => history.push('/commands')}>

                  </button>
              </div>
        );

};

export default ButtonGrid;
