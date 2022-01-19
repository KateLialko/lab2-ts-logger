export interface IPrice {
  id: string;
  scheduleId: string;
  priceValue: number;
  priceCurrency: string;
  createdAt: Date;
  updatedAt: Date;
}

const prices: IPrice[] = [];

export const add = (price: IPrice): IPrice => {
  prices.push(price);

  return price;
};

export const getAll = (): IPrice[] => prices;

export const getById = (id: string): IPrice | undefined => prices.find((price) => price.id === id);

export const deleteById = (id: string): IPrice | undefined => {
  const findIndex = prices.findIndex((price) => price.id === id);
  if (findIndex === -1) return;
  const removedElement = prices[findIndex];

  prices.splice(findIndex, 1);

  return removedElement;
};

export const deleteAllPricesById = (id: string): IPrice[] => {
  const findPrices = prices.filter((price) => price.scheduleId === id);

  for (const price of findPrices) {
    deleteById(price.id);
  }

  return findPrices;
};
