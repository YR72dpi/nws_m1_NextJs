import React from 'react';
import { drizzle } from 'drizzle-orm/postgres-js'
import { content } from '@/db/schema';
import 'dotenv/config'
import postgres from 'postgres'
import { eq } from "drizzle-orm";
import { notFound } from 'next/navigation';

const connectionString = process.env.DATABASE_URL as string
// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

const Perso = async ({params,}: {params: Promise<{ id: string }>}) => {
  const { id } = await params
  const contentFromDb = (await db.select().from(content).where(eq(content.id, parseInt(id))))[0];
  console.log(contentFromDb)

  if(!contentFromDb) notFound()

  return (
    <div>
        <p>{contentFromDb.name}, {contentFromDb.content}</p>
    </div>
  );
};

export default Perso
