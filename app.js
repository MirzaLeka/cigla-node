const express = require('express');
const ytld = require('ytdl-core');
const cors = require('cors');

const app = express();

app.use(cors())

app.listen(3000, () => {
    console.log('started on 3000')
})

app.get('/', (req, res) => {
    res.send('hello!')
})

app.get('/download', (req, res) => {
    const { URL } = req.query;

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytld(URL, {
        format: 'mp4',
        filter: 'audioandvideo',
        quality: 'highest'
    }).pipe(res)
});
