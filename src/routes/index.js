import AuthRouter from './auth/auth.router';

const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
}

export default AppRoutes;