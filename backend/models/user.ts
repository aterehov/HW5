import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

interface IUser {
  email: string;
  password: string;
}

interface IUserMethods {
  isValidPassword(password: any): boolean;
}

type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

// UserSchema.methods.isValidPassword = async function (password: any) {
//   const user = this;
//   const compare = await bcrypt.compare(password, user.password);

//   return compare;
// };

UserSchema.method("isValidPassword", async function (password: any) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
});

const UserModel = mongoose.model("user", UserSchema);

// module.exports = UserModel;
export default UserModel;
