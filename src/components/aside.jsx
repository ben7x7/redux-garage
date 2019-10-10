import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/garage-side.jpg')"}}></div>
      <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, simply the best !</p>
      {props.children}
    </div>
  );
}

export default Aside;
