import React from 'react';
import { Card } from './card';
import { Footer } from './footer';

export const Main = () => {
    return (
        <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col mdl-cell--1-offset-desktop mdl-cell--4-col-phone">
                    <div className="selfie"></div>    
                    </div>
                    <div className="mdl-cell mdl-cell--5-col  mdl-cell--4-col-phone">
                        <Card />
                    </div>
                </div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col mdl-cell--1-offset-desktop mdl-cell--4-col-phone">
                        <h3>Skills</h3>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col  mdl-cell--4-col-phone">
                        <Card />
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
}
