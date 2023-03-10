import { graphql } from "../gql";

export const userQuery = graphql(`
 query users ($first: Int!) {
        users(first: $first) {
            data {
                id
                email
                created_at
            }
        }
    }
  `)
