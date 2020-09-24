/**
 * Loosely checks if a value is a promise (thenable)
 */
export function isPromise(object: any): boolean {
  return (
    object instanceof Promise ||
    (Boolean(object) &&
      (typeof object === 'object' || typeof object === 'function') &&
      typeof object.then === 'function')
  );
}

export default { isPromise };
