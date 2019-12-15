import * as sha256 from 'fast-sha256';

function generateHash(userName: string, password: string, salt: string) {
  const uint8array = new TextEncoder().encode(password + salt + userName);
  const hash = new sha256.Hash();

  hash.update(uint8array);

  return new Buffer(hash.digest()).toString('hex');
}

export default generateHash;