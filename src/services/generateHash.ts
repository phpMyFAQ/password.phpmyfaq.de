import { Hash } from 'fast-sha256';
import { Buffer } from 'buffer';

/**
 * Generates a SHA-256 hash based on the username, password, and salt.
 *
 * This is the TypeScript implementation of the PHP code used in phpMyFAQ:
 *
 * <?php
 * ...
 * hash('sha256', $password . $salt . $userName);
 * ...
 *
 * @param userName - The user's name
 * @param password - The user's password
 * @param salt - The salt value
 * @returns The generated hash in hexadecimal format
 */
export const generateHash = (userName: string, password: string, salt: string): string => {
  if (!userName) {
    throw new Error('userName must be provided');
  }
  if (!password) {
    throw new Error('password must be provided');
  }
  if (!salt) {
    throw new Error('salt must be provided');
  }

  const inputString = `${encodeURI(password)}${salt}${userName}`;
  const uint8array = new TextEncoder().encode(inputString);

  const hash = new Hash();
  hash.update(uint8array);

  return Buffer.from(hash.digest()).toString('hex');
};
