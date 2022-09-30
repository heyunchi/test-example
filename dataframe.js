import { DataFrame } from "dataframe-js";
// From a dictionnary (Hash)
// const df = new DataFrame({
//     column1: [3, 6, 8], // <------ A column
//     column2: [3, 4, 5, 6],
//     quality: [4, 6, 1, 6]
// }, ['column1', 'column2', 'quality']);
// df.sortBy('quality')

const df = new DataFrame([
    [1, 6, 9, 10, 12], // <------- A row
    [1, 2],
    [6, 7, 9, 8, 9, 12],
], ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);

// df.show();
// const data = df.toCollection()
const data = df.select('c2').toDict()
    // const data1 = df.filter({ 'c1': 1 });
const max = df.stat.max('c2')
console.log(data);
console.log(max);