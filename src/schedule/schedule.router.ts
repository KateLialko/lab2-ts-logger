import { create, getAll, getById, deleteById } from './schedule.controller';
import express from 'express';

const router = express.Router();

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:scheduleId')
  .get(getById)
  .delete(deleteById);

export default router;
