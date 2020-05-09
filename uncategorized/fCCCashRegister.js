function checkCashRegister(price, cash, cid) {
  // should find out what to return
  // and should get the amount thats in the drawer,

  // the change due
  let changeDue = cash - price;

  // the cash in drawer is the sum of everything in the 2nd position of the cid array

  // be aware of floating point arithmetic here
  const totalInDrawer = cid
    .reduce((curr, arr) => curr + parseFloat(arr[1]), 0)
    .toFixed(2);

  console.log('changeDue: ', changeDue, 'totalInDrawer:', totalInDrawer);
  const origCid = [];

  for (let arr of cid) {
    origCid.push([...arr]);
  }

  if (changeDue > totalInDrawer)
    return { status: 'INSUFFICIENT_FUNDS', change: [] };

  if (changeDue === totalInDrawer) return { status: 'CLOSED', change: origCid };

  // now have to worry about the other cases like not having the exact change, and having exact change

  // to get change we have to go through each denomination and see if we can go through each one

  // should be a greedy algorithm taking the best option that we can

  // want to push the change we can create into the changeArr
  const changeArr = [];
  let hunds = 0;
  let twens = 0;
  let tens = 0;
  let fives = 0;
  let ones = 0;
  let quarts = 0;
  let dimes = 0;
  let nicks = 0;
  let pens = 0;

  while (changeDue > 0) {
    if (changeDue - 100 >= 0) {
      if (cid[8][1] >= 100) {
        hunds += 1;
        cid[8][1] -= 100;
        changeDue -= 100;
        continue;
      }
    }
    if (changeDue - 20 >= 0) {
      if (cid[7][1] >= 20) {
        twens += 1;
        cid[7][1] -= 20;
        changeDue -= 20;
        continue;
      }
    }
    if (changeDue - 10 >= 0) {
      if (cid[6][1] >= 10) {
        tens += 1;
        cid[6][1] -= 10;
        changeDue -= 10;
        continue;
      }
    }
    if (changeDue - 5 >= 0) {
      if (cid[5][1] >= 5) {
        fives += 1;
        cid[5][1] -= 5;
        changeDue -= 5;
        continue;
      }
    }
    if (changeDue - 1 >= 0) {
      if (cid[4][1] >= 1) {
        ones += 1;
        cid[4][1] -= 1;
        changeDue -= 1;
        continue;
      }
    }

    if (changeDue - 0.25 >= 0) {
      if (cid[3][1] >= 0.25) {
        quarts += 1;
        cid[3][1] = (cid[3][1] - 0.25).toFixed(2);
        changeDue = (changeDue - 0.25).toFixed(2);
        continue;
      }
    }

    if (changeDue - 0.1 >= 0) {
      if (cid[2][1] >= 0.1) {
        dimes += 1;
        cid[2][1] = (cid[2][1] - 0.1).toFixed(2);
        changeDue = (changeDue - 0.1).toFixed(2);
        continue;
      }
    }
    if (changeDue - 0.05 >= 0) {
      if (cid[1][1] >= 0.05) {
        nicks += 1;
        cid[1][1] = (cid[1][1] - 0.05).toFixed(2);
        changeDue = (changeDue - 0.05).toFixed(2);
        continue;
      }
    }
    if (changeDue - 0.01 >= 0) {
      if (cid[0][1] >= 0.01) {
        pens += 1;
        cid[0][1] = (cid[0][1] - 0.01).toFixed(2);
        changeDue = (changeDue - 0.01).toFixed(2);
        continue;
      }
    }
    // if it doesn't hit anyone of these and its not 0 we can return
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
    // break;
  }

  const outputChange = [];

  if (hunds > 0) outputChange.push(['ONE HUNDRED', hunds * 100]);
  if (twens > 0) outputChange.push(['TWENTY', twens * 20]);
  if (tens > 0) outputChange.push(['TEN', tens * 10]);
  if (fives > 0) outputChange.push(['FIVE', fives * 5]);
  if (ones > 0) outputChange.push(['ONE', ones * 1]);
  if (quarts > 0) outputChange.push(['QUARTER', quarts * 0.25]);
  if (dimes > 0) outputChange.push(['DIME', dimes * 0.1]);
  if (nicks > 0) outputChange.push(['NICKEL', nicks * 0.05]);
  if (pens > 0) outputChange.push(['PENNY', pens * 0.01]);

  const newTotal = cid
    .reduce((curr, arr) => curr + parseFloat(arr[1]), 0)
    .toFixed(2);

  // console.log(parseInt(newTotal));
  // console.log(outputChange)

  // console.log('hunds: ', hunds, '\ntwenties:', twens,'\ntens:', tens, '\nfives:', fives, '\nones:', ones, '\nquarters:', quarts, '\ndimes:', dimes, '\nnickels:', nicks, '\npennies:', pens)

  if (parseInt(newTotal) === 0) {
    console.log(origCid);
    return { status: 'CLOSED', change: origCid };
  }

  return { status: 'OPEN', change: outputChange };
}

checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
