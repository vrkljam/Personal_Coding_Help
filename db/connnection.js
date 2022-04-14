const mongoose = require('mongoose');

const connectionString ="mongodb+srv://mikev:mikev@cluster0.ap9gd.mongodb.net/howto?retryWrites=true&w=majority";
mongoose.connect(connectionString);

module.exports = mongoose
