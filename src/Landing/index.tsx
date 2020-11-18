import React from 'react';

// Components
import Quote from '../components/Quote';

import './styles.css';

const Landing: React.FC = () => {
    return (
        <div className="landing-container">
            <h1>Criatividade</h1>

            <Quote>
                “É o processo de mudança, de desenvolvimento, de evolução na organização da vida subjetiva.” - Ghiselin.
            </Quote>
        </div>
    );
}

export default Landing;