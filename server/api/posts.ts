import posts from './post-data.json';

export default async (): Promise<PostMeta[]> => {
  return posts.data.map(post => {
    delete post.content
    return post
  });
};
