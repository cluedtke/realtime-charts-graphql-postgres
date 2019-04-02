import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Create a WebSocket link:
const link = new WebSocketLink({
    uri: 'ws://localhost:8080/v1alpha1/graphql',
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-access-key": "mylongsecretkey"
            }
        },
    }
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link,
    cache
});

ReactDOM.render(
    (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
