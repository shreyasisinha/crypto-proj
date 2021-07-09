const numOnBits = n => {
  let c = 0;
  while(n > 0)  {
    if((n & 1) === 1)
      ++c;
    n >>= 1;
  }
  return c;
};

export const branchNumber = (ip, op) => {
  let ans = 0;
  for(let i=0; i < ip.length; ++i)
    ans += numOnBits(ip[i]^op[i]);
  return Math.floor(ans);
}