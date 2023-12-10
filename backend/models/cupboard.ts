import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const cupboardSchema = new Schema({
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

export const CupboardModel = mongoose.model('Cupboard', cupboardSchema);

export type CupboardModelType = InferSchemaType<typeof cupboardSchema>;