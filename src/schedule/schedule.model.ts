import { v4 as uuid } from 'uuid';
import { add, deleteById, getAll, getById, ISchedule } from './schedule.memory.repository';
import { validation } from './schedule.validation';

export const createSchedule = (schedule: ISchedule): ISchedule | boolean => {
  schedule.id = uuid();
  if (!validation(schedule)) return false;
  const result = add(schedule);

  return result;
};

export const getAllSchedules = (): ISchedule[] => {
  return getAll();
};

export const getScheduleById = (id: string): ISchedule | undefined => {
  return getById(id);
};

export const deleteScheduleById = (id: string): ISchedule | undefined => {
  return deleteById(id);
};
