const express = require('express');
const ytld = require('ytdl-core');
const cors = require('cors');

const app = express();

app.use(cors())

const PORT = process.env.port || process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('path?URL=<LINK>')
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
