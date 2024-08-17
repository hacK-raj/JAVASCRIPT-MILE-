function capitalizeName(name) {
  let modifiedName =
    name.charAt(0) === name.charAt(0).toLowerCase()
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;

  return modifiedName;
}

let userName = "rajdeep";
let result = capitalizeName(userName);
console.log(result); // Output: Rajdeep
