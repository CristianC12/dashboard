import React from 'react';
import './style.css';

function ControleResultados() {
    return (
        <div className='ControleResultados-component default-margin-component default-border'>

            <div className='card-top'>
                <svg className='card-svg' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5844 0.5C14.0321 0.5 13.5844 0.947715 13.5844 1.5V15.5H12.5766V7.5C12.5766 6.94772 12.1289 6.5 11.5766 6.5H8.5688C8.01652 6.5 7.5688 6.94772 7.5688 7.5V15.5H6.56101V12C6.56101 11.4477 6.11329 11 5.56101 11H2.55322C2.00093 11 1.55322 11.4477 1.55322 12V15.531C1.12092 15.6413 0.80127 16.0333 0.80127 16.5C0.80127 17.0523 1.24898 17.5 1.80127 17.5H2.55322H5.56101H8.5688H11.5766H14.5844H17.5922H18.3441C18.8964 17.5 19.3441 17.0523 19.3441 16.5C19.3441 16.0333 19.0245 15.6413 18.5922 15.531V1.5C18.5922 0.947715 18.1445 0.5 17.5922 0.5H14.5844ZM16.5922 15.5V2.5H15.5844V15.5H16.5922ZM9.5688 8.5H10.5766V15.5H9.5688V8.5ZM4.56101 15.5V13H3.55322V15.5H4.56101Z" fill="#4364E8" />
                </svg>


                <p className='titulo-card'>Controle de resultados</p>
            </div>


        </div>
    );
}

export default ControleResultados



