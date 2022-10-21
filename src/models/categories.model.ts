import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  title: string;
  imagePath: string;
  order: number;
  status: string;
  createdAt: Date;
}

export enum Status {
  ENABLED = "enable",
  DISABLED = "disable",
}

const categorySchema = new Schema<ICategory>(
  {
    title: { type: "string", required: true },
    imagePath: { type: "string", required: true },
    order: { type: "number", required: true },
    status: { type: "string", required: true, enum: Status },
  },
  {
    timestamps: {
      updatedAt: false,
    },
  }
);

export default model<ICategory>("Category", categorySchema);
