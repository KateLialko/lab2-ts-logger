import { IPrice } from './price.memory.repository';
import { getScheduleById } from '../schedule/schedule.model';

export const validation = (schedule: IPrice): boolean => {
  if (!schedule) return false;
  if (!schedule.id || schedule.id.length === 0) return false;
  if (!schedule.scheduleId || schedule.scheduleId.length === 0) return false;
  if (!schedule.priceCurrency || schedule.priceCurrency.length === 0) return false;
  if (!schedule.priceValue) return false;
  if (!schedule.createdAt) return false;
  if (!schedule.updatedAt) return false;
  if (!getScheduleById(schedule.scheduleId)) return false;

  return true;
};
