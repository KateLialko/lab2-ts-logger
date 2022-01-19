import { IPrice } from './price.memory.repository';
import { createPrice, deletePriceById, getAllPrices, getPriceById } from './price.model';

export const create = (newPrice: IPrice): IPrice | boolean => createPrice(newPrice);

export const getAll = (): IPrice[] => getAllPrices();

export const getById = (id: string): IPrice | undefined => getPriceById(id);

export const deleteById = (id: string): IPrice | undefined => {
  const deletePrice = deletePriceById(id);

  return deletePrice;
};
