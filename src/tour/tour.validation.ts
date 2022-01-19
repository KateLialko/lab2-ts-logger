import { ITour } from './tour.memory.repository';

export const validation = (tour: ITour): boolean => {
  if (!tour) return false;
  if (!tour.id || tour.id.length === 0) return false;
  if (!tour.title || tour.title.length === 0) return false;
  if (!tour.slug || tour.slug.length === 0) return false;
  if (!tour.description || tour.description.length === 0) return false;
  if (!tour.createdAt) return false;
  if (!tour.updatedAt) return false;

  return true;
};
