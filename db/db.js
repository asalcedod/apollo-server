import mongoose from 'mongoose';

mongoose.Promise = global.Promise
mongoose. connect('mongodb://localhost/users', {useNewUrlParse: true});

// Defijnir el schema de cleintes

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    age: Number,
    emails: Array,
    avatar: Array,
    type: String
})

const Users = mongoose.model('users', userSchema);

export { Users };
