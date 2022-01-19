import { ISchedule } from './schedule.memory.repository';
import { getTourById } from '../tour/tour.model';

export const validation = (schedule: ISchedule): boolean => {
  if (!schedule) return false;
  if (!schedule.id || schedule.id.length === 0) return false;
  if (!schedule.tourId || schedule.tourId.length === 0) return false;
  if (!schedule.startDate) return false;
  if (!schedule.endDate) return false;
  if (!schedule.createdAt) return false;
  if (!schedule.updatedAt) return false;
  if (!getTourById(schedule.tourId)) return false;

  return true;
};
