import type { IncomingMessage, ServerResponse } from 'http'
import { useQuery } from 'h3'
import posts from './post-data.json';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const query = useQuery(req)

  return posts.data.find(post => post.id == query.id)
};
