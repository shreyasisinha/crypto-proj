import { mdsAesGmul } from './galois';

export const mixColumn = mdsAesGmul;

// arr : 16 bytes
// ip: 1x16, op: 1x16
export const mdsAesDiffuse = row => {
  if(row.length !== 16)
    throw Error("row should be of length 16");
  return mixColumn(row);
}