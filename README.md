# realtime-charts-graphql-postgres

Adapted from https://www.smashingmagazine.com/2019/03/realtime-charts-graphql-postgres/

## Components
1. Postgres with Timescale extension
2. Hasura GraphQL Engine
3. React app using Apollo client

## Starting the app
1. Start _Postgres_ and _Hasura_:
```
docker-compose up -d
```
http://localhost:8080/console to access _Hasura GraphQL Engine console_.

2. Start the _React_ app
```
cd time-series-chart
npm start
```
http://localhost:3000 to open the app.