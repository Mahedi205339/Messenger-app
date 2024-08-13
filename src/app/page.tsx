import { db } from "@/lib/db";

export default async function Home() {
  
  await db.set('hello','hello')

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
