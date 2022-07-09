import { Resolvers } from './resolvers-types.generated';
import Query from './resolvers/query';
import Db from './db';
export interface TwitterResolverContext {
  db: Db;
}
const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
};

export default resolvers;
