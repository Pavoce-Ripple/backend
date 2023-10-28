import { Document, model, Schema } from "mongoose";

export interface UserDocument extends Document {
  fullName: string;
  walletId: string;
  businessName: string;
  email: string;
  profilePic: string;
  businessLogo: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true },
    walletId: { type: String, required: true, unique: true },
    businessName: { type: String, required: true },
    email: { type: String, required: true },
    profilePic: { type: String },
    businessLogo: { type: String },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<UserDocument>("User", UserSchema);
