import test from 'ava';
import { isPromise } from './index';

test('returns if argument is a promise', t => {
  t.true(isPromise(new Promise(() => null)));
  t.true(isPromise(Promise.resolve()));
  t.true(isPromise({ then: (): any => null }));

  const promiseLike = (): any => null;
  t.false(isPromise(promiseLike));
  promiseLike.then = (): any => null;
  t.true(isPromise(promiseLike));

  t.false(isPromise(123));
  t.false(isPromise(null));
  t.false(isPromise(undefined));
  t.false(isPromise('then'));
  t.false(isPromise(true));
  t.false(isPromise(false));
  t.false(isPromise([]));
  t.false(isPromise({}));
  t.false(isPromise({ then: 'not a function' }));
});
