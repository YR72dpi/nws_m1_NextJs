import { pgTable, integer, varchar, text } from "drizzle-orm/pg-core"

export const content = pgTable('content', {
  id: integer(),
  name: varchar(),
  content: text()
});