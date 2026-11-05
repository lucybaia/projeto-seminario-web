import React from 'react';

function Cards(props) {
    return (
        <div style={{border:'1px solid #ccc', padding:'10px', margin:'10px', borderRadius:'5px'}}>
            <div className="card">
                <h3>{props.titulo}</h3>
                <p>{props.nomeAluno}</p>
            </div>
        </div>
    );
}

export default Cards;