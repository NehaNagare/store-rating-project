
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./src/routes/auth');
const storeRoutes = require('./src/routes/stores');
const adminRoutes = require('./src/routes/admin');

app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req,res)=>res.send("Store Rating API Running"));

app.listen(5000,()=>console.log("Backend running on port 5000"));
