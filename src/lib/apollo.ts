import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ouycq918od01xk3xi7ckch/master",
  cache: new InMemoryCache(),
});
