import { app } from './server/app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening to port ' + PORT);
});
