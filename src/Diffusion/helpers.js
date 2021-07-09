// export const matmul = (A, B) => {
//   let m = A.length,
//     l = A[0].length,
//     n = B[0].length;
//   if (l !== B.length)
//     throw Error("matrix A B in matmul should be size: mxn, nxp");
//   let C = [];
//   let i = 0,
//     j = 0,
//     k = 0;
//   for (i = 0; i < m; i++) {
//     const ans = [];
//     for (j = 0; j < n; j++) {
//       let total = 0;
//       for (k = 0; k < l; k++) {
//         total += A[i][k] * B[k][j];
//       }
//       ans.push(total);
//     }
//     C.push(ans);
//   }
//   return C;
// };

export const transpose = (mat) =>
  mat[0].map((_, colIndex) => mat.map((row) => row[colIndex]));


// export const pushCol = (arr, toPush) => {
//   if (arr.length === 0) {
//     return toPush;
//   } else if (arr.length !== toPush.length) {
//     throw Error("rows for arr and toPush should be equal");
//   } else {
//     for (let i = 0; i < arr.length; ++i) {
//       for(let p of toPush[i])
//         arr[i].push(p)
//     }
//     return arr;
//   }
// };
