import React from 'react';

import './styles.css';

type BlockProps = {
    count: string;
    title: string;
};

const Block: React.FC<BlockProps> = ({ children, count, title }) => {
    return(
        <div className="block-container">
            <h5>{count}</h5>

            <h3>{title}</h3>

            <p className="block-content">
                {children}
            </p>
        </div>
    );
}

export default Block;