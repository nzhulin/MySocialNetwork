import preloader from '../../../assets/images/preloader.gif';
import React from 'react';


let Preloader = (props) => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={preloader} />
    </div>;
}


export default Preloader;