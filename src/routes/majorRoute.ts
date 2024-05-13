import express from 'express';

import { createMajor, deleteMajor, editMajor, getAllMajors } from '../controllers/majorController';

const Router = express.Router();
Router.route('/').post(createMajor);
Router.route('/').get(getAllMajors);
Router.route('/:id').patch(editMajor);
Router.route('/:id').delete(deleteMajor);

module.exports = Router;
