import { graphql } from "./__generated__"

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
