import fs from "fs";
import { Command } from "commander";
import chalk from "chalk";
import loadItems from "./utils/loadItems.js";
//import updateItem from "./controllers/updateItem.js";

const program = new Command();

program
  .name("BudgetTracker")
  .description("Budget tracker of my shooping list")
  .version("1.0.0");
// Add title, quanitity, price per quanitity
program
  .command("new")
  .description("Add new item")
  .option("-t, --title <value>", "Add title")
  .option("-q, --quanitity <value>", "Add quanitity")
  .option("-p, --unitprice <value>", "Add price per unit")
  .action((options) => {
    const title = options.title;
    const quanitity = options.quanitity;
    const unitprice = options.unitprice;

    const newItem = {
      title: title,
      quanitity: quanitity,
      unitprice: unitprice,
    };
    const items = loadItems("./data/items.json");

    items.push(newItem);

    fs.writeFileSync("./data/items.json", JSON.stringify(items));
  });

// Update the Items
/*program.command("update"
    .description("update the item"
    .option("-t, --title <value>", "title for the item to update")
    .option("-n, --newtitle <value>", "new title" )
    .option("-q, --quanitity <value>", "new quanitity")
    .option("-p, --unitprice <value>", "unit price of the new item")
    .action((options) => {
        const title = options.title;
        const newquanitity = options.quanitity;
        const newunitprice = options.unitprice;
        const newtitle = options.newtitle;
        updateItem(title, newtitle, newquanitity, newunitprice);
    })
    )
)*/

// Get items (get all items)
program
  .command("read")
  .description("Get all items")
  .option("-t, --title <value>", "title of the item read")
  .action((options) => {
    const title = options.title;
    const allItems = loadItems("./data/items.json");
    if (title) {
      const item = allItems.find((item) => item.title === title);
      if (item) {
        console.log(
          `${chalk.blue(item.title)} | ${chalk.green(item.quanitity)} | ${chalk.red(item.unitprice)}`,
        );
      } else {
        console.log(chalk.yellow(`No item found with title: ${title}`));
        return;
      }
      return;
    }
    if (allItems.length === 0) {
      console.log(chalk.yellow("No item saved yet"));
      return;
    }
    allItems.forEach((item) => {
      console.log(
        `${chalk.blue(item.title)} | ${chalk.green(item.quanitity)} | ${chalk.red(item.unitprice)}`,
      );
    });
  });

// Delete
program
  .command("delete")
  .description("delete a specific contact")
  .option("-t, --title <value>", "title for the item to be deleted")
  .action((options) => {
    const title = options.title;
    const allItems = loadItems("./data/items.json");
    console.log(title);
    if (allItems.length === 0) {
      console.log(chalk.green(`You don't have any items`));
      return;
    }

    const remainingItems = allItems.filter((item) => item.title !== title);
    if (remainingItems.length === allItems.length) {
      console.log(chalk.red(`No item with title ${title}`));
      return;
    }
    fs.writeFileSync("./data/items.json", JSON.stringify(remainingItems));
    console.log(chalk.blue("Item deleted successfully"));
  });

program.parse(process.argv);
