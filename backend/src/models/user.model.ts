import mongoose from 'mongoose';

const DataShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    code: Number
}, {
    timestamps: true
}
);

const users = mongoose.model('Users', DataShema);

export default users;