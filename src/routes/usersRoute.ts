import { editProfile, changePassword } from './../controllers/usersController';
import express from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController';
import { verifyToken } from '../middlewares/veryfyToken';

const Router = express.Router();
Router.route('/').get(getAllUsers);
Router.route('/:userId').get(verifyToken, getUserById);
Router.route('/edit/:userId').put(verifyToken, editProfile);
Router.route('/edit/:userId/password').put(verifyToken, changePassword);

module.exports = Router;
