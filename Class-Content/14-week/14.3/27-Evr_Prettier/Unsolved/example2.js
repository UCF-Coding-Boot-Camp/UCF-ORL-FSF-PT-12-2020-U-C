const txt = " model-view-controller ";

const acronym = txt.trim().split("-").map(word => {
  return word.toUpperCase().charAt(0)
}).join("");

console.log(acronym);
