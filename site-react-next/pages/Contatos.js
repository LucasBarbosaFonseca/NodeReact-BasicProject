import React from 'react';
import axios from 'axios';
import Head from 'next/head';

const Contatos = (data) => (
    <div>
        <Head>
        <title>Contatos - Celke</title>
            <meta name='robots' content='index, follow' />
            <meta name='description' content='Página da empresa ... sobre ....' />
        </Head>
        <h1>Nossos contatos</h1>
        <ul>
            {data.response.map(contato => (
                <li key={contato._id}>
                    Nome: {contato.nome}<br />
                    Email: {contato.email}<br />
                    Titúlo: {contato.titulo}<br />
                    Menssagem: {contato.msg}<br /><hr />
                </li>
            ))}
        </ul>
    </div>
);

Contatos.getInitialProps = async () => {
    var response = await axios.get(
        'http://localhost:8181/contatos'
    );

    return {response: response.data}
}

export default Contatos;