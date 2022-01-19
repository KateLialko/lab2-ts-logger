import { deleteAllSchedulesById } from '../schedule/schedule.memory.repository';

export interface ITour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const tours: ITour[] = [];

export const add = (tour: ITour): ITour => {
  tours.push(tour);

  return tour;
};

export const getAll = (): ITour[] => tours;

export const getById = (id: string): ITour | undefined => tours.find((tour) => tour.id === id);

export const deleteById = (id: string): ITour | undefined => {
  const findIndex = tours.findIndex((tour) => tour.id === id);
  if (findIndex === -1) return;
  const removedElement = tours[findIndex];

  tours.splice(findIndex, 1);
  deleteAllSchedulesById(id);

  return removedElement;
};
