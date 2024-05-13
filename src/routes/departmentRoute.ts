import express from 'express';

import {
    createDepartment,
    deleteDepartment,
    editDepartment,
    getAllDepartments,
} from '../controllers/departmentController';

const Router = express.Router();
Router.route('/').get(getAllDepartments);
Router.route('/').post(createDepartment);
Router.route('/:id').patch(editDepartment);
Router.route('/:id').delete(deleteDepartment);

module.exports = Router;
