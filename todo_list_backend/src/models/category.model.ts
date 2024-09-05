import {Document, model, Schema} from "mongoose";
import {Base} from "@interfaces/base.interface";

const categorySchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
});

const categoryModel = model<Base & Document>('Category', categorySchema);

export default categoryModel;
