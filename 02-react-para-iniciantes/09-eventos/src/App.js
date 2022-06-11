import React from 'react';



const App = () => {
  const onClickComprar = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.timeStamp);
  }

  window.addEventListener("scroll", onClickComprar);
  return (
    <section style={{height: '500px'}}>
      <button onClick={onClickComprar}>Comprar</button>
    </section>
  );
};


export default App;
