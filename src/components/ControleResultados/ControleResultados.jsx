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
            <div className='controle-resultados-top'>
                <p className='assinaturaTitulo'>
                    Assinatura anual Controle de Resultados*
                </p>
                <p className='assinaturaDescricao'>
                    Assine o Controle de Resultados e tenha acesso a todos os controles durante 12 meses.
                </p>
                <p id='assinaturaOBS'>
                    *Não inclui o cálculo de IR
                </p>
                <div className='assinaturaPreco'>
                    <p id='precoAssinatura'>
                        R$ 349,90
                    </p>
                    <p id='precoAssinaturaANO'>
                        ano
                    </p>
                </div>

            </div>
            <div className='controle-resultados-bot'>
                <button id='contratar'>Contratar</button>

                <button id='acessar'>
                    <svg id="svg-acesso" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15698 0C8.6047 0 8.15698 0.447715 8.15698 1C8.15698 1.55228 8.6047 2 9.15698 2H11.0553L5.26238 7.79289C4.87185 8.18342 4.87185 8.81658 5.26238 9.20711C5.6529 9.59763 6.28606 9.59763 6.67659 9.20711L12.4695 3.41421V5.3125C12.4695 5.86478 12.9172 6.3125 13.4695 6.3125C14.0218 6.3125 14.4695 5.86478 14.4695 5.3125V1C14.4695 0.447715 14.0218 0 13.4695 0H9.15698ZM2.46948 4.5C2.46948 3.94772 2.9172 3.5 3.46948 3.5H5.96948C6.52177 3.5 6.96948 3.05228 6.96948 2.5C6.96948 1.94772 6.52177 1.5 5.96948 1.5H3.46948C1.81263 1.5 0.469482 2.84315 0.469482 4.5V11C0.469482 12.6569 1.81263 14 3.46948 14H9.96948C11.6263 14 12.9695 12.6569 12.9695 11V8.5C12.9695 7.94772 12.5218 7.5 11.9695 7.5C11.4172 7.5 10.9695 7.94772 10.9695 8.5V11C10.9695 11.5523 10.5218 12 9.96948 12H3.46948C2.9172 12 2.46948 11.5523 2.46948 11V4.5Z" fill="#4364E8" />
                    </svg>
                    Acessar
                </button>
            </div>

        </div>
    );
}

export default ControleResultados



