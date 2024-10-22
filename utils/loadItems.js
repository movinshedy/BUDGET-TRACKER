import fs from "fs";
function loadItems(path) {
  const loadItems = fs.readFileSync(path, "utf8");
  if (!loadItems) {
    return [];
  }
  return JSON.parse(loadItems);
}

export default loadItems;
