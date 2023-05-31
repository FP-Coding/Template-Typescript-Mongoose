import app from './app';
import 'dotenv/config';

const { PORT } = process.env;

// eslint-disable-next-line no-console
app.listen(Number(PORT), () => console.log(`Running on port ${PORT}`));