import { model, Schema } from "mongoose";
var userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
var userModel = model('User', userSchema);
export default userModel;

//# sourceMappingURL=users.model.js.map