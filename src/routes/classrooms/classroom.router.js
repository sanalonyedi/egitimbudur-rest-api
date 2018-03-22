import express from 'express';
import config from 'config';

const route = () => {
    const router = new express.Router();
    
    router.route('/').get((req, res) => {
        res.send("user Id:" + req.tokenData.userId);
    });

    return router;
}

export default {
    route,
    routePrefix : `/${config.version}/classrooms`
}