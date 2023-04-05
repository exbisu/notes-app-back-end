/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const Routers = require('./routers');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(Routers);
  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};
init();
