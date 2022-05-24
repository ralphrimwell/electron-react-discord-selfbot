import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import backimg from '../assets/back-button.svg'


const HomeButton = () => {

  const history = useHistory();


    return(
      <div>
          <img className="backimg" src={backimg} onClick={() => history.push('/homepage')}/>
      </div>



    )



};

export default HomeButton;
