import React from 'react';

import { configType } from '../../lib/types';

import Header from '../Header';

const NotFound = ({ config: { logo, link } }) => (
  <>
    <Header logo={logo} link={link}>
      <span>
        Not Found
      </span>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href={`${process.env.PUBLIC_URL}/`}>
            Home
          </a>
        </li>
      </ul>
    </Header>
    <div className="container pt-5">
      <div className="row col-12 pt-5 pb-3">
        <div className="col-12 text-center">
          <h1>Error 404</h1>
        </div>
      </div>
      <div className="row col-12 pb-3">
        <div className="col-12 text-center">
          <h2>Publication not found</h2>
        </div>
      </div>
      <div className="row col-12 pb-3">
        <div className="col-12 text-center">
          <h2>
            <a href={`${process.env.PUBLIC_URL}/`}>
              Return to homepage
            </a>
          </h2>
        </div>
      </div>
    </div>
  </>
);

NotFound.propTypes = {
  config: configType.isRequired,
};

export default NotFound;
