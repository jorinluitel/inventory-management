import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
});

const Users = model("user", usersSchema);

export default Users;