import "zone.js/dist/zone";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout/Layout';


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactapp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/reactapp',
  },
  {
    name: 'vueapp',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/vueapp',
  },
  {
    name: 'angularapp',
    entry: '//localhost:3003',
    container: '#container',
    activeRule: '/angularapp',
  }
]);
start();


ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('mainroot')
);

