import React from 'react';

import './styles.css';

const Quote: React.FC = ({ children }) => {
    return(
        <div className="blockquote">
            <p>{children}</p>
        </div>
    );
}

export default Quote;