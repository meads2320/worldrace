const mongoose = require('mongoose');
const connection = `mongodb+srv://${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}@${process.env.REACT_APP_CLUSTER}/${process.env.REACT_APP_DATABASE}`;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));