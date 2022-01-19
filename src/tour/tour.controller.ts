import express from 'express';

import * as tourService from './tour.service';

export const create = (req: express.Request, res: express.Response): express.Response => {
  const { title, slug, description, isActive } = req.body;
  const createdAt = new Date();
  const updatedAt = new Date();
  const id = '';

  const tour = tourService.create({ title,
    slug,
    description,
    isActive,
    createdAt,
    updatedAt,
    id });

  if (!tour) {
    return res
      .status(400)
      .send({
        code: 'Tour_Not_Create',
        message: 'Tour not create',
      });
  }

  return res.status(200).send(tour);
};

export const getAll = (_req: express.Request, res: express.Response): express.Response => {
  const tours = tourService.getAll();

  if (tours.length === 0) {
    return res
      .status(404)
      .send({
        code: 'Tours_Not_Found',
        message: 'Tours not found',
      });
  }

  return res.status(200).send(tours);
};

export const getById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['tourId']) {
    return res
      .status(400)
      .send({
        code: 'Tour_Find_Error',
        message: 'Tour Find Error',
      });
  }

  const tour = tourService.getById(req.params['tourId']);

  if (!tour) {
    return res
      .status(404)
      .send({
        code: 'Tour_Not_Found',
        message: 'Tour not found',
      });
  }

  return res.status(200).send(tour);
};

export const deleteById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['tourId']) {
    return res
      .status(400)
      .send({
        code: 'Tour_Delete_Error',
        message: 'Tour Delete Error',
      });
  }

  const deletedTour = tourService.deleteById(req.params['tourId']);

  if (!deletedTour) {
    return res
      .status(404)
      .send({
        code: 'Tour_Not_Found',
        message: 'Tour not found ',
      });
  }

  return res.status(200).send(deletedTour);
};
