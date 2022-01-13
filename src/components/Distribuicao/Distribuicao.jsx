import React from 'react';
import './style.css';

function Distribuicao() {
    return (
        <div className='distribuicao-component default-margin-component default-border'>

            <div className='card-top'>
                <svg className='card-svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.8184C5.46916 3.30553 2.75 6.33522 2.75 10C2.75 14.0041 5.99594 17.25 10 17.25C13.6648 17.25 16.6945 14.5308 17.1816 11H10C9.44772 11 9 10.5523 9 10V2.8184ZM17.1816 9C17.0085 7.74543 16.5144 6.59334 15.7849 5.62929L12.4142 9H17.1816ZM14.3707 4.21508C13.4067 3.48557 12.2546 2.99149 11 2.8184V7.58579L14.3707 4.21508ZM10 0.75C4.89137 0.75 0.75 4.89137 0.75 10C0.75 15.1086 4.89137 19.25 10 19.25C15.1086 19.25 19.25 15.1086 19.25 10C19.25 4.89137 15.1086 0.75 10 0.75Z" fill="#4364E8" />
                </svg>

                <p className='titulo-card'>Distribuição de Custódia</p>
            </div>


        </div>
    );
}

export default Distribuicao



