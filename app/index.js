import React from 'react';
import { render } from 'react-dom';
import { Navbar, Drawer } from './components/navbar';
import { Main } from './components/main'

render(
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Navbar />
        <Drawer />
        <Main />
    </div>,
    document.getElementById('app')
);
