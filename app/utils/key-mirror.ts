// Copyright © 2023 Thing Inc. All rights reserved.
// See License for license information.

/**
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
export default function keyMirror<T extends {}>(obj: T): {[K in keyof T]: K} {
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }

  const ret: any = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    // Mirror the key by assigning it to itself in the new object
    ret[key] = key;
  }
  return ret;
}
