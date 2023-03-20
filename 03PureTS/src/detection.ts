function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  id.toLowerCase();
}

// Type Guards
function printAll(strs: string | string[] | null) {
  if (strs) { // not null
    if (typeof strs === "object") { // is array
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}