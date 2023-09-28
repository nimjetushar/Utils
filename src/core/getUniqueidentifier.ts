/**
 * returns random string which can be used as an unique identifier
 *
 * @export
 * @return {*}  {string}
 */
export function getUiqueIdentifier(): string {
  return Math.random().toString(16).slice(2);
}
