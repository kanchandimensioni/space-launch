import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/component/Home'
import { Provider } from 'react-redux'

export default (store) => {
    const content = renderToString(
        <Provider store= {store}>
             <Home />
        </Provider>
    );
    return `
        <html>
        </head><head>
          <body>
              <div id="root">${content}</div>
              <script src="bundle.js"></script>
          </body
        <//html>
        `;
};