import { Exclude, Expose, Transform } from "class-transformer";
import { ObjectId } from "mongoose";
import { S3_BUCKET_URL } from "../../../utils/constants";

@Exclude()
export class FetchCategoriesResponseDTO {
  @Expose({ name: "_id" })
  id: ObjectId;

  @Expose()
  @Transform(({ value }) => value.toUpperCase())
  title: string;

  @Expose({ name: "imagePath" })
  @Transform(({ value }) => `${S3_BUCKET_URL}/${value}`)
  image: string;
}
