import React from 'react';
import './style.css';
import SvgCimaBaixo from './SvgCimaBaixo';

function CustodiaPosicao() {
    return (
        <div className='CustodiaPosicao-component default-margin-component default-border'>

            <div className='card-top'>
                <svg className='card-svg-posicao' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.89355 1.99878C2.89355 1.44649 2.44584 0.998779 1.89355 0.998779C1.34127 0.998779 0.893555 1.44649 0.893555 1.99878V2.00878C0.893555 2.56106 1.34127 3.00878 1.89355 3.00878C2.44584 3.00878 2.89355 2.56106 2.89355 2.00878V1.99878ZM6.41603 0.998779C5.86374 0.998779 5.41603 1.44649 5.41603 1.99878C5.41603 2.55106 5.86374 2.99878 6.41603 2.99878H18.476C19.0282 2.99878 19.476 2.55106 19.476 1.99878C19.476 1.44649 19.0282 0.998779 18.476 0.998779H6.41603ZM6.41603 6.99878C5.86374 6.99878 5.41603 7.44649 5.41603 7.99878C5.41603 8.55106 5.86374 8.99878 6.41603 8.99878H18.476C19.0282 8.99878 19.476 8.55106 19.476 7.99878C19.476 7.44649 19.0282 6.99878 18.476 6.99878H6.41603ZM5.41603 13.9988C5.41603 13.4465 5.86374 12.9988 6.41603 12.9988H18.476C19.0282 12.9988 19.476 13.4465 19.476 13.9988C19.476 14.5511 19.0282 14.9988 18.476 14.9988H6.41603C5.86374 14.9988 5.41603 14.5511 5.41603 13.9988ZM1.89355 6.99878C2.44584 6.99878 2.89355 7.44649 2.89355 7.99878V8.00878C2.89355 8.56106 2.44584 9.00878 1.89355 9.00878C1.34127 9.00878 0.893555 8.56106 0.893555 8.00878V7.99878C0.893555 7.44649 1.34127 6.99878 1.89355 6.99878ZM2.89355 13.9913C2.89355 13.439 2.44584 12.9913 1.89355 12.9913C1.34127 12.9913 0.893555 13.439 0.893555 13.9913V14.0013C0.893555 14.5536 1.34127 15.0013 1.89355 15.0013C2.44584 15.0013 2.89355 14.5536 2.89355 14.0013V13.9913Z" fill="#4364E8" />
                </svg>


                <p className='titulo-card-posicao'>Posição de Custódia</p>
            </div>

            <div>
                <table className='custodia-table'>
                    <tr id='tabela-itens'>
                        <td>
                            Ativo
                        </td>
                        <td>
                            <SvgCimaBaixo />
                            Corretora
                        </td>
                        <td>
                            <SvgCimaBaixo />
                            Quantidade
                        </td>
                        <td>
                            <SvgCimaBaixo />
                            Custo Médio
                        </td>
                        <td>
                            <SvgCimaBaixo />
                            Custo Total
                        </td>
                    </tr>
                    <div className='TRcinza'></div>
                    <tr>
                        <td>CARE11</td>
                        <td>XP</td>
                        <td>000000</td>
                        <td>R$00,00</td>
                        <td>R$00.00,000</td>
                    </tr>
                    <tr>
                        <td>CARE11</td>
                        <td>XP</td>
                        <td>000000</td>
                        <td>R$00,00</td>
                        <td>R$00.00,000</td>
                    </tr>
                    <div className='TRcinza'></div>
                    <tr>
                        <td>CARE11</td>
                        <td>XP</td>
                        <td>000000</td>
                        <td>R$00,00</td>
                        <td>R$00.00,000</td>
                    </tr>
                    <tr>
                        <td>CARE11</td>
                        <td>XP</td>
                        <td>000000</td>
                        <td>R$00,00</td>
                        <td>R$00.00,000</td>
                    </tr>
                    <div className='TRcinza'></div>
                    <tr>
                        <td>CARE11</td>
                        <td>XP</td>
                        <td>000000</td>
                        <td>R$00,00</td>
                        <td>R$00.00,000</td>
                    </tr>
                </table>
            </div>
            <div className='table-pages'>
                <button className='botao-pagina'>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.08647 0.542893C6.477 0.933418 6.477 1.56658 6.08647 1.95711L3.04358 5L6.08647 8.04289C6.47699 8.43342 6.47699 9.06658 6.08647 9.45711C5.69595 9.84763 5.06278 9.84763 4.67226 9.45711L0.922256 5.70711C0.73472 5.51957 0.629363 5.26522 0.629363 5C0.629363 4.73478 0.73472 4.48043 0.922257 4.29289L4.67226 0.542893C5.06278 0.152369 5.69595 0.152369 6.08647 0.542893Z" fill="#4364E8" />
                    </svg>
                </button>

                <div>
                    <p>
                        1
                    </p>
                </div>

                <button className='botao-pagina'>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.922257 9.45711C0.531733 9.06658 0.531733 8.43342 0.922257 8.04289L3.96515 5L0.922257 1.95711C0.531732 1.56658 0.531733 0.933416 0.922257 0.542892C1.31278 0.152369 1.94595 0.152368 2.33647 0.542892L6.08647 4.29289C6.47699 4.68342 6.47699 5.31658 6.08647 5.70711L2.33647 9.45711C1.94595 9.84763 1.31278 9.84763 0.922257 9.45711Z" fill="#4364E8" />
                    </svg>
                </button>

                <button className='botao-visualizar'>Visualizar Lista Completa</button>
            </div>

        </div>
    );
}

export default CustodiaPosicao



