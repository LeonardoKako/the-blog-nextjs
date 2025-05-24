import { PostModel } from "@/models/post";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel>;
  findById(id: string): Promise<PostModel>;
}
