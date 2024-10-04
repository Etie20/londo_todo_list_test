import { model, Schema } from "mongoose";
var categorySchema = new Schema({
    name: {
        type: String,
        require: true
    }
});
var categoryModel = model('Category', categorySchema);
export default categoryModel;

//# sourceMappingURL=category.model.js.map