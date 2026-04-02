import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const distPath = path.join(root, "dist");
const assetsPath = path.join(root, "assets");
const badgesPath = path.join(root, "badges");

const removeIfExists = async (targetPath) => {
  if (existsSync(targetPath)) {
    await fs.rm(targetPath, { recursive: true, force: true });
  }
};

const copyIfExists = async (sourcePath, destinationPath) => {
  if (existsSync(sourcePath)) {
    await fs.cp(sourcePath, destinationPath, { recursive: true, force: true });
  }
};

const run = async () => {
  execSync("node scripts/build-dist.mjs", { stdio: "inherit", cwd: root });

  await removeIfExists(assetsPath);
  await removeIfExists(badgesPath);

  await copyIfExists(path.join(distPath, "assets"), assetsPath);
  await copyIfExists(path.join(distPath, "badges"), badgesPath);
  await copyIfExists(path.join(distPath, "index.html"), path.join(root, "index.html"));
  await copyIfExists(path.join(distPath, "CNAME"), path.join(root, "CNAME"));
  await copyIfExists(path.join(distPath, "naijaLogo.jpg"), path.join(root, "naijaLogo.jpg"));
  await copyIfExists(path.join(distPath, "vite.svg"), path.join(root, "vite.svg"));

  await removeIfExists(distPath);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
