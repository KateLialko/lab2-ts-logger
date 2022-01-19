import express from 'express';

import * as priceService from './price.service';

export const create = (req: express.Request, res: express.Response): express.Response => {
  const { scheduleId, priceValue, priceCurrency } = req.body;
  const createdAt = new Date();
  const updatedAt = new Date();
  const id = '';

  const price = priceService.create({
    id,
    scheduleId: scheduleId.toString(),
    priceValue: Number(priceValue),
    priceCurrency: priceCurrency.toString(),
    createdAt,
    updatedAt,
  });

  if (!price) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Not_Create',
        message: 'Schedule not create',
      });
  }

  return res.status(200).send(price);
};

export const getAll = (_req: express.Request, res: express.Response): express.Response => {
  const prices = priceService.getAll();

  if (prices.length === 0) {
    return res
      .status(404)
      .send({
        code: 'Schedules_Not_Found',
        message: 'Schedules not found',
      });
  }

  return res.status(200).send(prices);
};

export const getById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['priceId']) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Find_Error',
        message: 'Schedule Find Error',
      });
  }

  const price = priceService.getById(req.params['priceId']);

  if (!price) {
    return res
      .status(404)
      .send({
        code: 'Schedule_Not_Found',
        message: 'Schedule not found',
      });
  }

  return res.status(200).send(price);
};

export const deleteById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['priceId']) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Delete_Error',
        message: 'Schedule Delete Error',
      });
  }

  const deletedSchedule = priceService.deleteById(req.params['priceId']);

  if (!deletedSchedule) {
    return res
      .status(404)
      .send({
        code: 'Schedule_Not_Found',
        message: 'Schedule not found ',
      });
  }

  return res.status(200).send(deletedSchedule);
};
