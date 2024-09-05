import {Document, model, Schema} from "mongoose";
import {User} from "@interfaces/users.interface";

const userSchema: Schema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;