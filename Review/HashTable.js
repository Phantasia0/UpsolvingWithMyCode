const table = new Map();
table.set("key1", 100);
table.set("key2", 200);

const object = { a: 1 };
table.set(object, "A1");
table.delete(object);

const temp = table.keys();
table.forEach((value, key) => {
  table.set(key, value * 2);
});
table.forEach((value, key) => {
  console.log(table.get(key));
});
table.values();
if (table.has("key2")) {
  console.log(table.get("key2"));
}

//console.log(temp);
console.log(table);

table.clear();

const tableSet = new Set();
tableSet.add("key");
tableSet.delete("key");
