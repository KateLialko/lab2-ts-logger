import { v4 as uuid } from 'uuid';
import { add, deleteById, getAll, getById, ITour } from './tour.memory.repository';
import { validation } from './tour.validation';

export const createTour = (tour: ITour): ITour | boolean => {
  tour.id = uuid();
  if (!validation(tour)) return false;
  const result = add(tour);

  return result;
};

export const getAllTours = (): ITour[] => {
  return getAll();
};

export const getTourById = (id: string): ITour | undefined => {
  return getById(id);
};

export const deleteTourById = (id: string): ITour | undefined => {
  return deleteById(id);
};
