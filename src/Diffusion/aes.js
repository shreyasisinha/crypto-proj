import { aesGMul } from './galois';
import { transpose } from './helpers';

const rightShift = (num, arr) => {
  const newArray = Array.from(arr);
  for (let i = 0; i < arr.length; ++i)
    newArray[(num + i) % arr.length] = arr[i];
  return newArray;
};

const shiftRows = (arr) => {
  if(arr.length !== 4 || arr[0].length !== 4)
    throw Error("the array should be 4x4");
  const newArray = Array(arr.length);
  const shifts = [0, 3, 2, 1];
  for (let i = 0; i < arr.length; ++i)
    newArray[i] = rightShift(shifts[i], arr[i]);
  return newArray;
};

const mixColumn = arr => {
  const t = transpose(arr); 
  const ans = [];
  for(let row of t) {
    ans.push(aesGMul(row));
  } 
  return ans;
}

// done
const singleDimToSrow = arr => {
  if(arr.length !== 16)
    throw Error("array should of size 16");
  const ans = [[], [], [], []];
  for(let i=0; i < 16; ++i) {
    ans[i%4][Math.floor(i/4)] = arr[i];
  }
  return ans;
}

const mat2Row = mat => {
  let ans = [];
  for(let row of mat) 
    ans = ans.concat(row);
  return ans;
}

export const aesDiffuse = arr => {
  const mat = singleDimToSrow(arr);
  return mat2Row(mixColumn(shiftRows(mat)));
}