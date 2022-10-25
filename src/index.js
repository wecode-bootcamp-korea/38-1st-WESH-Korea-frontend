import React from 'react';
import React-dOM from 'react-dom/client';
import Router from '../src/Router';
import './styles/reset.scss';
import './styles/common.scss';

const root = React-dOM.createRoot(document.getElementById('root'));
root.render(<Router />);
