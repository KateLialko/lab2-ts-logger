import { v4 as uuid } from 'uuid';
import { add, deleteById, getAll, getById, IPrice } from './price.memory.repository';
import { validation } from './price.validation';

export const createPrice = (price: IPrice): IPrice | boolean => {
  price.id = uuid();
  if (!validation(price)) return false;
  const result = add(price);

  return result;
};

export const getAllPrices = (): IPrice[] => {
  return getAll();
};

export const getPriceById = (id: string): IPrice | undefined => {
  return getById(id);
};

export const deletePriceById = (id: string): IPrice | undefined => {
  return deleteById(id);
};
