import React from 'react';

import './styles.css';

const Quote: React.FC = ({ children }) => {
    return(
        <p>{children}</p>
    );
}

export default Quote;