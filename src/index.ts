import express from 'express';

import tourRouter from './tour/tour.router';
import scheduleRouter from './schedule/schedule.router';
import priceRouter from './price/price.router';
import morgan from 'morgan';

const app = express();

app.use(express.json() as express.RequestHandler);

app.use(
  morgan('tiny', {
    stream: {
      write: (message: string) => console.log(message.replace('\n', '')),
    },
  }),
);

app.use('/tour', tourRouter);
app.use('/schedule', scheduleRouter);
app.use('/price', priceRouter);

app.listen(3000, () => {
  console.log('app is running on http://localhost:3000');
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
process.on('uncaughtException', () => {});
