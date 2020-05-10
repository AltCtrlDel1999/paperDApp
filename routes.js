const routes = require('next-routes')();

routes.add('/documents/new','/documents/new');
routes.add('/documents/:address','/documents/show');
routes.add('/documents/:address/versions','/documents/versions/index');

module.exports = routes;
