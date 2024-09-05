import {Document, model, Schema} from "mongoose";
import {Base} from "@interfaces/base.interface";

const stateSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
});

const stateModel = model<Base & Document>('State', stateSchema);

export default stateModel;