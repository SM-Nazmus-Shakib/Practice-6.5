const div= [];

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    div.push(i);
  }
}
console.log(div);

