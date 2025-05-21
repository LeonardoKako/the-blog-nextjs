import { PostModel } from "@/models/post";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
