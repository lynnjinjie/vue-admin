/**
 * @param {string}
 * @returns {Boolean}
 *
 */

export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.includes(str)
}
