import React from 'react';
import axios from 'axios';
import Head from 'next/head';

const Sobre = (data) => (
    <div>
        <Head>
            <title>Sobre - Celke</title>
            <meta name='robots' content='index, follow' />
            <meta name='description' content='Página da empresa ... sobre ....' />
        </Head>
        <h1>Sobre</h1>
        Titúlo: {data.response.titulo}<br />
        Descrição: {data.response.descricao}<br />
    </div>
);

Sobre.getInitialProps = async () => {
    var response = await axios.get(
        'http://localhost:8181/sobre'
    );
    
    //console.log(response.data);
    return {response: response.data}
}

export default Sobre;