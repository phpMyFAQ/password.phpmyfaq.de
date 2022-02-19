import * as sha256 from 'fast-sha256';
import { Buffer } from 'buffer';

/**
 * This is the Typescript implementation of the PHP code used in
 * phpMyFAQ:
 *
 * <?php
 * ...
 * hash('sha256', $password . $salt . $userName);
 * ...
 *
 * @param userName
 * @param password
 * @param salt
 */
export const generateHash = (userName: string, password: string, salt: string) => {
  const uint8array = new TextEncoder().encode(password + salt + userName);
  const hash = new sha256.Hash();

  hash.update(uint8array);

  return Buffer.from(hash.digest()).toString('hex');
}
