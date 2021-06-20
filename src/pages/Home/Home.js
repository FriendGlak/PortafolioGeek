import React from 'react';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import Presentation from '../../components/Presentation.jsx';


const Home = () => {
    return (
        <>
            <Presentation {...homeObjOne} />
            <Presentation {...homeObjTwo} />
            <Presentation {...homeObjThree} />
            <Presentation {...homeObjFour} />
        </>
    );
};

export default Home;
