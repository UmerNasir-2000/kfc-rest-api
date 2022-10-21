import { Model } from "mongoose";
import categories, { ICategory } from "./categories.model";

interface ICollection {
  categories: Model<ICategory>;
}

const db: ICollection = {
  categories,
};

export default db;
