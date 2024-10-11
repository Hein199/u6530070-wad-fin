import dbConnect from "@/lib/db";

export async function register() {
  console.log("API Endpoint:", process.env.NEXT_PUBLIC_API_BASE)
  console.log("Connecting to database...");
  await dbConnect();
}
