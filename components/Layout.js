import react from 'react';
import Head from 'next/head';
import {Container} from 'semantic-ui-react';
import Header from './Header';

export default (props) =>{
  return (
    <Container style={{marginTop: '10px'}}>
    <Head>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <Header />
    {props.children}
    <h1>I am a Footer</h1>
    </Container>
  );
};
