import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = (props) => {
  return <div className = 'preloader'>
    <img style={props.style} alt='' src={preloader} />
  </div>
}

export default Preloader;