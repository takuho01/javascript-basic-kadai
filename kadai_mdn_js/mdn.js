
const dateObjectName = new Date();

// console.log(dateObjectName);

const year = dateObjectName.getFullYear();
const month = dateObjectName.getMonth()+1;
const date = dateObjectName.getDate();
// console.log(dateObjectName.getDay());
// console.log(dateObjectName.getHours());
// console.log(dateObjectName.getMinutes());
// console.log(dateObjectName.getSeconds());

console.log(`${year}年${month}月${date}日`);

