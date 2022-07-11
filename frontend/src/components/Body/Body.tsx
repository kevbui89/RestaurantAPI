import React from 'react';
import Content from './Content/Content';
import '../../styles/Body.css';

interface BodyProps {
    name: string;
}

const Body: React.FC<BodyProps> = (props) => {
    return (
        <div className='body'>
            Body name: {props.name}
            <Content />
        </div>
    ); 
}

export default Body;