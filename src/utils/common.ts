export function shortenString(str: string | undefined) {
  return str?.substring(0, 6) + '...' + str?.substring(str.length - 4)
}

export function addressToSeed(address: any) {
  var addr = address.slice(2, 10);
  var seed = parseInt(addr, 16);
  return seed;
}