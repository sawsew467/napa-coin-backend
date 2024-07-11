import express from 'express';

import { createOneFrame, deleteFrame, editFrame, getAllFrames, getFrameById } from '../controllers/framesController';

const Router = express.Router();
Router.route('/').post(createOneFrame);
Router.route('/').get(getAllFrames);
Router.route('/:id').get(getFrameById);
Router.route('/:id').patch(editFrame);
Router.route('/:id').delete(deleteFrame);

module.exports = Router;
