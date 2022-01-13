import React from 'react';
import './style.css'

function Banner() {
    return (
        <div className='banner-component default-margin default-border'>
            <div className='textos'>
                <p className='titulo-banner text-left'>IR agora é no TC</p>
                <p className='sub-banner text-left'>Clientes Sencon têm acesso aos serviços de IR na plataforma do TC</p>
            </div>
        </div>
    );
}

export default Banner;