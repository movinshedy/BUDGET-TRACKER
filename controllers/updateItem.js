/*import fs from 'fs';
import loadItems from "../utils/loadItems.JS";
function updateItem(title, newtitle, newquanitity, newunitprice) {
    const allItems = loadItems("./data/items.json");

    if (newquanitity){
        const updateItems = allItems.map((item) => {
            if(item.title === title ){
               item.quanitity = newquanitity;
               return item; 
            }
            return item;
        })
        fs.writeFileSync("./data/items.json", JSON.stringify(updateItems));

    }

    if (newunitprice){
    const updateItems = allItems.map((item) => {
        if (item.title === title) {
            item.quanitity = newquanitity;
            return item;
        }
        return item;
    })  
    fs.writeFileSync("./data/items.json", JSON.stringify(updateItems)); 

    }

    if (newtitle){
        const updateItems = allItems.map((item) =>{
         if (item.title === title){
            item.title = newtitle;
            return item;
         }
         return item;
        })
        fs.writeFileSync("./data/items.json", JSON.stringify(updateItems));

    }
}


export default updateItem;*/
