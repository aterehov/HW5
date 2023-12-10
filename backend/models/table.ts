import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const tableSchema = new Schema({
  size: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  color: {
    name: {
      type: String,
      required: true
    },
    hex: {
      type: String,
      required: true
    }
  },
  left: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String, 
    required: false
  },
  image: {
    type: String,
    required: false
  }
    // fullName: {
    //     type: String,
    //     required: true,
    // },
    // key: {
    //     type: Number,
    // },
    // isAdmin: {
    //     type: Schema.Types.Boolean,
    //     default: false,
    // }
});

export const TableModel = mongoose.model('Table', tableSchema);

export type TableModelType = InferSchemaType<typeof tableSchema>;