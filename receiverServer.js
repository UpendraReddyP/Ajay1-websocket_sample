const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'receiver')));
app.listen(5502, () => console.log('📦 Receiver running on http://localhost:5502'));