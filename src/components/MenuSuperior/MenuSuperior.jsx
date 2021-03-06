import React from 'react';
import './style.css';

function MenuSuperior() {
    return (
        <>
            <div className='menuSuperior'>
                <div>
                    <p>Imposto de Renda
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12ZM10.6667 8C10.6667 7.26362 11.2636 6.66667 12 6.66667H12.01C12.7464 6.66667 13.3433 7.26362 13.3433 8C13.3433 8.73638 12.7464 9.33334 12.01 9.33334H12C11.2636 9.33334 10.6667 8.73638 10.6667 8ZM13.1641 11.3815L13.347 10.2843L12.2486 10.46L11.1236 10.64C10.6873 10.7099 10.3902 11.1201 10.46 11.5564C10.5299 11.9927 10.9401 12.2898 11.3764 12.22L11.403 12.2157L10.8359 15.6185C10.7934 15.8733 10.8766 16.133 11.0593 16.3157C11.242 16.4984 11.5017 16.5816 11.7565 16.5391L12.8815 16.3516C13.3173 16.279 13.6118 15.8668 13.5391 15.431C13.4665 14.9952 13.0543 14.7007 12.6185 14.7734L12.5982 14.7768L13.1641 11.3815Z" fill="#7C8597" />
                        </svg>
                    </p>

                </div>
                <div>
                    <button id='ATIVO'> 
                        Dashboard
                    </button>
                    <button>
                        Menu Principal
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.292893C1.18342 -0.097631 1.81658 -0.097631 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.097631 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683418 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C8.01957 7.89464 7.76522 8 7.5 8C7.23478 8 6.98043 7.89464 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z" fill="#8D96A6" />
                        </svg>

                    </button>
                    <button>
                        Calculadora de IR
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.292893C1.18342 -0.097631 1.81658 -0.097631 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.097631 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683418 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C8.01957 7.89464 7.76522 8 7.5 8C7.23478 8 6.98043 7.89464 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z" fill="#8D96A6" />
                        </svg>

                    </button>
                    <button>
                        Controle de Resultados
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.292893C1.18342 -0.097631 1.81658 -0.097631 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.097631 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683418 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C8.01957 7.89464 7.76522 8 7.5 8C7.23478 8 6.98043 7.89464 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z" fill="#8D96A6" />
                        </svg>

                    </button>
                    <button>
                        Configura????es
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.292893C1.18342 -0.097631 1.81658 -0.097631 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.097631 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683418 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C8.01957 7.89464 7.76522 8 7.5 8C7.23478 8 6.98043 7.89464 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z" fill="#8D96A6" />
                        </svg>

                    </button>
                </div>
            </div>
        </>
    );
}

export default MenuSuperior;

