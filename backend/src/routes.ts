import express from 'express';
import userController from './controllers/users.controller';

const routes: express.Router = express.Router();

// Routes
routes.post('/api/users', userController.create);

export default routes;
