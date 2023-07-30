import { Injectable } from '@nestjs/common';
import { PostDto } from './blog.model';
import { BlogMongoRepository } from './blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogMongoRepository) {}

  // 모든 게시글 가져오기
  async getAllPosts() {
    return await this.blogRepository.getAllPost();
  }

  // 게시글 작성
  createPost(postDto: PostDto) {
    return this.blogRepository.createPost(postDto);
  }

  // 게시글 하나 가져오기
  async getPost(id): Promise<PostDto> {
    return await this.blogRepository.getPost(id);
  }

  // 게시글 삭제
  delete(id) {
    return this.blogRepository.deletePost(id);
  }

  // 게시글 업데이트
  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}
