import { model, Schema } from "mongoose";
var stateSchema = new Schema({
    name: {
        type: String,
        require: true
    }
});
var stateModel = model('State', stateSchema);
export default stateModel;

//# sourceMappingURL=state.model.js.map