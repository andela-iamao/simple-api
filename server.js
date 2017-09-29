import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'Success'
  });
});

app.use(router);

app.listen(5000, () => {
  console.log('server started on 3000');
});
