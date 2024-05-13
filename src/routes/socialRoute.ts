import express from 'express';

import { createSocial, deleteSocial, editSocial, getAllSocials } from '../controllers/socialController';

const Router = express.Router();
Router.route('/').post(createSocial);
Router.route('/').get(getAllSocials);
Router.route('/:id').patch(editSocial);
Router.route('/:id').delete(deleteSocial);

module.exports = Router;
