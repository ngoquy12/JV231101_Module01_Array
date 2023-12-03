// Có 2 cách để tạo mảng
// Cách 1: sử dụng đối tượng Array
// Yêu cầu: Tạo ra một mảng lưu trữ các số nguyên
// const ten_mang = new Array(gia_tri);
const array = new Array(1, 2, 3, 4, 5, 6);
console.log(array);
// Không nên sử dụng cách 1 vì: Khi chúng ta tạo ra một đối tượng bằng từ khóa new thì trên bộ nhớ heap
// sẽ tạo ra một vùng với để lưu trữ dữ liệu của mảng => làm tăng kích thuócw bộ nhớ

// Cách 2: sử dụng theo kiểu literal => Khuyến cáo dùng
const array2 = [7, 8, 9, 10, "nvquy", true, NaN, undefined, null];
console.log("Array2: ", array2);

// Cách truy xuất các phần tử trong mảng
// Cách 1: Dùng mảng và chỉ định vị trí cần lấy => Sử dụng trong trường hợp mảng ít phàn tử
// Cú pháp: ten_mang[index]
console.log(array2[3]);

// Sử dụng length để lấy ra độ dài của mảng
let array2Length = array2.length;
console.log("Độ dài của mảng: ", array2Length); // length: 9

// Cách 2:
for (let i = 0; i < array2.length; i++) {
  // console.log("Index: ", i);
  // console.log("Phấn tử: ", array2[i]);
  console.log(`Vị trí ${i} thì phần tử có giá trị là: ${array2[i]}`);
}

// Khai báo một mảng các số nguyên, lặp qua mảng và kiểm tra trong mảng có những số nào
// chí hết cho 2
const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 === 0) {
    console.log(array3[i]);
  }
}

// Các thao tác làm việc với mảng với các (built-in function: những hàm được ngôn ngữ xây dựng sẵn)
// 1. Thêm phần tử vào cuối mảng => hàm push()
array3.push(9);
console.log("Mảng sau khi push vào: ", array3);

// 2. Xóa phần tử ở cuối mảng => hàm pop()
let value = array3.pop();
console.log("Mảng sau khi pop: ", array3);
console.log("Giá trị vừa bị xóa ở cuối mảng là: ", value);

// 3. Thêm phần tử ở đầu mảng => hàm unshift()
array3.unshift(0);
array3.unshift(100);
array3.unshift(200);
console.log("Mảng sau khi thêm phần tử vào đầu: ", array3);

// 4. Xóa phần tử ở đầu mảng => hàm shift()
let value1 = array3.shift();
console.log("Mảng sau khi xóa ở đầu: ", array3);
console.log("Gía trị vừa được xóa ở đầu mảng: ", value1);

// Khai báo một mảng các số nguyên, lặp qua mảng và kiểm tra trong mảng có những số nào
// là số lẻ, sau đó trả về một mảng các số lẻ đó.

// Tạo một mảng rỗng
const array4 = [];

for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 !== 0) {
    array4.push(array3[i]);
  }
}

console.log("Mảng các phần tử không chia hết cho 2: ", array4);

// Chuyển đổi một mảng thành chuỗi: toString(), join()
const arrayConvertToString = array3.toString();
console.log(
  "Sau khi chuyển đổi bằng toString(): ",
  typeof arrayConvertToString
);

// Chuyển đổi mảng thành chuỗi: join()
const arrayConvertToString1 = array3.join(", ");
console.log("Sau khi chuyển đổi bằng join: ", arrayConvertToString1);

// Chuyển đổi từ string sang mảng
const myString = "NgọVănQuý";
// Hàm split() trong javascript => Chuyển đổi một chuỗi thành mảng dựa theo một điểm chung
let result = myString.split("");
console.log("Kết quả chuyển đổi: ", result);

// Cách để nối các mảng lại với nhau => concat()
const array5 = [1, 2, 3, 4, 5];
const array6 = [6, 7, 8, 9, 10];

const mergeArray = array5.concat(array6);
console.log("Mảng sau khi nối: ", mergeArray);

// 1. Tạo một máng gồm các tên, nhập một tên bất kỳ từ bán phím (dùng hàm promt()) và kiểm tra
// xem tên đó có tồn tại trong mảng không? Nếu có thì in ra vị trí của nó trong mảng và nếu không tìm thấy
// thì in ra nội dung là "Phần tử này không tồn tại trong mảng"

// let userName = prompt("Nhập tên cần tìm kiếm: ");
let userName = "Quý";
const listUser = ["Quý", "Nam", "Tâm", "An", "Bình"];

let index = null;

// Lặp qua mảng
for (let i = 0; i < listUser.length; i++) {
  if (userName === listUser[i]) {
    index = i; // Gán lại vị trí tìm thấy
    break; // Thoát ra khỏi vòng lặp khi tìm thấy
  } else {
    index = -1;
  }
}

if (index === -1) {
  console.log("Không tìm thấy tên");
} else {
  console.log(`Tên ${userName} được tìm thấy ở vị trí thứ ${index}`);
}

// 2. Nhập vào một mảng và đảo ngược mảng đó . Ví dụ: nhập vào [1,2,3,4] => [4,3,2,1]
const array7 = [1, 2, 3, 4];
const array8 = [];

for (let i = array7.length - 1; i >= 0; i--) {
  array8.push(array7[i]);
}

console.log(array8);

// 3. Tạo ra một mảng các số nguyên, nhập vào một số từ ngoài trình duyệt và trả về một mảng mới
// không chưa giá trị mà chúng ta nhập vào
// Ví dụ: Nhập vào số 5, mảng [1,2,3,4,5] => Kết quả mong đợi: [1,2,3,4]

const array9 = [1, 2, 3, 4, 5];
const array10 = [];
let number = +prompt("Mời bạn nhập số: ");

for (let i = 0; i < array9.length; i++) {
  if (number !== array9[i]) {
    array10.push(array9[i]);
  }
}

console.log("Mảng mới nhận được là: ", array10);
