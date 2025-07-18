import express from 'express';
import shorturlRoutes from './routes/shorturls';

const app = express();
const PORT = 3000;
app.use('/shorturls', shorturlRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});