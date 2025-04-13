export const resolvablePromise = () => {
  let resolve;
  let reject;
  const promise: any = new Promise((_resolve, _reject) => {
    resolve = (...args: any) => {
      promise.fullfilled = true;
      promise.pending = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      _resolve(...args);
    };
    reject = (...args: any) => {
      promise.rejected = true;

      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      _reject(...args);
    };
  });
  promise.resolve = resolve;
  promise.reject = reject;
  promise.pending = true;
  return promise;
};
