import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume3.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Dhruv-Gambhir-Resume.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}