import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';

const app = express();

// app.use((req, res, next) => {
//   // console.log();
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use(routes);

export default app;
