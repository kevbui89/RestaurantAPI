import React from 'react';
import '../../styles/Header.css';

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className='header-div'>
            Header name: {props.name}
        </div>
    ); 
}

export default Header;