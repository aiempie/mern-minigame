const authRouters = require("./auth/authRouters");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;
  app.use(apiRoute("auth"), authRouters);
};

module.exports = routes;
