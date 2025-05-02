const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({message: 'test API working!'});
})

app.use('/api', router);

app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})

app.listen(3000, () => {
    console.log('App running and listening on port 3000');
});