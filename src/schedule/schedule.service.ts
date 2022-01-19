import { ISchedule } from './schedule.memory.repository';
import { createSchedule, deleteScheduleById, getAllSchedules, getScheduleById } from './schedule.model';

export const create = (newSchedule: ISchedule): ISchedule | boolean => createSchedule(newSchedule);

export const getAll = (): ISchedule[] => getAllSchedules();

export const getById = (id: string): ISchedule | undefined => getScheduleById(id);

export const deleteById = (id: string): ISchedule | undefined => {
  const deleteSchedule = deleteScheduleById(id);

  return deleteSchedule;
};
