import { ITour } from './tour.memory.repository';
import { createTour, deleteTourById, getAllTours, getTourById } from './tour.model';

export const create = (newTour: ITour): ITour | boolean => createTour(newTour);

export const getAll = (): ITour[] => getAllTours();

export const getById = (id: string): ITour | undefined => getTourById(id);

export const deleteById = (id: string): ITour | undefined => {
  const deleteTour = deleteTourById(id);

  return deleteTour;
};
