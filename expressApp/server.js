const express = require('express');
const app = express();
console.log(__dirname + '../');
app.use(express.static(__dirname + '../../todo_one/build/'));
app.listen(1337);