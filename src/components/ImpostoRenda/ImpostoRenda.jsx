import React from 'react';
import './style.css';

function ImpostoRenda() {
    return(
        <div className='IR-component default-margin default-border'>

            <div className='IR-top'>
                <svg className='IRsvg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9375 4.75003H12.5V9.00001C12.5 9.55229 12.9477 10 13.5 10H17.75V18.6C17.75 18.7651 17.6832 18.928 17.5566 19.0518C17.4293 19.1762 17.252 19.25 17.0625 19.25H6.9375C6.748 19.25 6.57067 19.1762 6.44337 19.0518C6.31684 18.928 6.25 18.7651 6.25 18.6V5.40003C6.25 5.23498 6.31684 5.07203 6.44337 4.94831C6.57067 4.82385 6.748 4.75003 6.9375 4.75003ZM19.75 18.6V9.00791V8.99255V8.70003C19.75 8.43092 19.6415 8.17316 19.4491 7.98502L14.3866 3.03502C14.1998 2.85233 13.9488 2.75003 13.6875 2.75003H13.5099H13.4897H6.9375C6.23189 2.75003 5.55078 3.02389 5.04514 3.5183C4.53873 4.01345 4.25 4.68986 4.25 5.40003V18.6C4.25 19.3102 4.53873 19.9866 5.04514 20.4818C5.55078 20.9762 6.23189 21.25 6.9375 21.25H17.0625C17.7681 21.25 18.4492 20.9762 18.9549 20.4818C19.4613 19.9866 19.75 19.3102 19.75 18.6ZM14.5 6.16422V8.00001H16.3358L14.5 6.16422ZM9 12.5C8.44772 12.5 8 12.9477 8 13.5C8 14.0523 8.44772 14.5 9 14.5H15C15.5523 14.5 16 14.0523 16 13.5C16 12.9477 15.5523 12.5 15 12.5H9ZM8 16.5C8 15.9477 8.44772 15.5 9 15.5H15C15.5523 15.5 16 15.9477 16 16.5C16 17.0523 15.5523 17.5 15 17.5H9C8.44772 17.5 8 17.0523 8 16.5ZM9 9.50003C8.44772 9.50003 8 9.94774 8 10.5C8 11.0523 8.44772 11.5 9 11.5H9.75H10.5C11.0523 11.5 11.5 11.0523 11.5 10.5C11.5 9.94774 11.0523 9.50003 10.5 9.50003H9.75H9Z" fill="#4364E8"/>
                </svg>
                <p className='titulo-IR'>Calculadora de IR</p>
            </div>

            <div className='dropDown-IR'>
                
            </div>

            <div className='valores'>
                <p>Meses de cálculo atualmente disponíveis:</p>     <p className='valor-numero'>0</p>
                <p>Meses de cálculo para contratar:</p>     <p className='valor-numero'>0</p>  
                <p>Contratar mais meses (quantidade ao lado):</p>   <p className='valor-numero'>0</p>
                <p>Valor por mês:</p>   <p className='valor-mensal'>R$22,90</p>
            </div> 

        </div>
    );
}

export default ImpostoRenda 



