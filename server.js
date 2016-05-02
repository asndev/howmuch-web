import webpack from 'webpack';
import path from 'path';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
import configBuilder, { DEV_ENV, PROD_ENV } from './webpack.config';
import express from 'express';

const env = process.env.NODE_ENV || PROD_ENV;

const app = express();
const port = process.env.PORT || 3000;


if (env === DEV_ENV) {
  const config = configBuilder(env);
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}


app.use(express.static(__dirname + '/dist'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("http://localhost:%s/ in your browser.", port);
  }
});
