import { deleteAllPricesById } from '../price/price.memory.repository';

export interface ISchedule {
  id: string;
  tourId: string;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const schedules: ISchedule[] = [];

export const add = (schedule: ISchedule): ISchedule => {
  schedules.push(schedule);

  return schedule;
};

export const getAll = (): ISchedule[] => schedules;

export const getById = (id: string): ISchedule | undefined => schedules.find((schedule) => schedule.id === id);

export const deleteById = (id: string): ISchedule | undefined => {
  const findIndex = schedules.findIndex((schedule) => schedule.id === id);
  if (findIndex === -1) return;
  const removedElement = schedules[findIndex];

  schedules.splice(findIndex, 1);
  deleteAllPricesById(id);

  return removedElement;
};

export const deleteAllSchedulesById = (id: string): ISchedule[] => {
  const findSchedules = schedules.filter((schedule) => schedule.tourId === id);

  for (const schedule of findSchedules) {
    deleteById(schedule.id);
  }

  return findSchedules;
};
