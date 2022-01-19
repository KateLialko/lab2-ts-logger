import { create, getAll, getById, deleteById } from './price.controller';
import express from 'express';

const router = express.Router();

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:priceId')
  .get(getById)
  .delete(deleteById);

export default router;
