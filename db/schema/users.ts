import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../helper";

export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(0),
  ...timestamps,
});
