import mongoose, { trusted } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.models.users || mongoose.model('User', UserSchema);