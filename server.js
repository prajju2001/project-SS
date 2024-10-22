const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(bodyParser.json());

app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
