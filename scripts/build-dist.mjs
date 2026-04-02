import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const templatePath = path.join(root, "index.template.html");

const restoreIndex = async (backup) => {
  if (backup === null) {
    if (existsSync(indexPath)) {
      await fs.unlink(indexPath);
    }
    return;
  }

  await fs.writeFile(indexPath, backup, "utf8");
};

const run = async () => {
  const template = await fs.readFile(templatePath, "utf8");
  const originalIndex = existsSync(indexPath)
    ? await fs.readFile(indexPath, "utf8")
    : null;

  try {
    await fs.writeFile(indexPath, template, "utf8");
    execSync("npx vite build", { stdio: "inherit", cwd: root });
  } finally {
    await restoreIndex(originalIndex);
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
