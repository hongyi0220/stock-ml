const express = require('express')
const app = express()
const path = require('path');
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});