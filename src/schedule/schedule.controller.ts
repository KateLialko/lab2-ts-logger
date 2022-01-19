import express from 'express';

import * as scheduleService from './schedule.service';

export const create = (req: express.Request, res: express.Response): express.Response => {
  const { tourId, isActive, startDate, endDate } = req.body;
  const createdAt = new Date();
  const updatedAt = new Date();
  const id = '';

  const schedule = scheduleService.create({
    id,
    tourId,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    isActive,
    createdAt,
    updatedAt });

  if (!schedule) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Not_Create',
        message: 'Schedule not create',
      });
  }

  return res.status(200).send(schedule);
};

export const getAll = (_req: express.Request, res: express.Response): express.Response => {
  const schedules = scheduleService.getAll();

  if (schedules.length === 0) {
    return res
      .status(404)
      .send({
        code: 'Schedules_Not_Found',
        message: 'Schedules not found',
      });
  }

  return res.status(200).send(schedules);
};

export const getById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['scheduleId']) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Find_Error',
        message: 'Schedule Find Error',
      });
  }

  const schedule = scheduleService.getById(req.params['scheduleId']);

  if (!schedule) {
    return res
      .status(404)
      .send({
        code: 'Schedule_Not_Found',
        message: 'Schedule not found',
      });
  }

  return res.status(200).send(schedule);
};

export const deleteById = (req: express.Request, res: express.Response): express.Response => {
  if (!req.params || !req.params['scheduleId']) {
    return res
      .status(400)
      .send({
        code: 'Schedule_Delete_Error',
        message: 'Schedule Delete Error',
      });
  }

  const deletedSchedule = scheduleService.deleteById(req.params['scheduleId']);

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
