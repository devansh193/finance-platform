import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({path:".env"});

export default defineConfig({
    schema: "./db/schema.ts",
    out: './drizzle/migrations',
    driver: "pg",
    dbCredentials:{
        connectionString: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});