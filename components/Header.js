import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 className="header__logo">La grosse caisse</h1>
        <h2 className="header__sub">Qui l'a lâchée ?</h2>
      </header>
    );
  }
}
