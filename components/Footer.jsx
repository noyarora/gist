import React from 'react';

const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    left: 0,
    textAlign: 'center',
    background: '#f2f2f2'
}

const Footer = () => {
    return (
        <footer style={style}>
            <p style={{margin: '10px 0', fontSize: '12px'}}>A project by Prannoy Arora</p>
        </footer>
    );
}


export default Footer;