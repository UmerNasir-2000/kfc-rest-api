import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { FetchCategoriesResponseDTO } from "../mappings/categories/fetch-categories/fetch-categories.response.dto";
import { Status } from "../models/categories.model";
import db from "../models/index";

export const fetchCategories = async (request: Request, response: Response) => {
  const categories = await db.categories
    .find({ status: Status.ENABLED })
    .sort({ createdAt: -1 });

  response.status(200).json({
    categories: plainToInstance(FetchCategoriesResponseDTO, categories),
  });
};
