import { create, getAll, getById, deleteById } from './tour.controller';
import express from 'express';

const router = express.Router();

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:tourId')
  .get(getById)
  .delete(deleteById);

export default router;
