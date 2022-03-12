interface Post {
  id: string,
  title: string,
  imageUrl: string,
  description: string,
  content: string,
  date: string,
  datetime: string,
  readingTime: string,
}

interface PostMeta extends Omit<Post, 'content'> {}
