import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Cadastre-se já!</h1>
        <Form onSubmit={(event) => { event.preventDefault(); }} />
      </main>
      <Footer />
    </>
  );
};


export default App;
