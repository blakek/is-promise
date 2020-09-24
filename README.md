# @blakek/is-promise

> ✅ check if a value is Promise-like

Sometimes it makes sense to treat Promises and non-Promises differently. For
example, it can be helpful to only return a Promise if given a Promise. This
package helps with that.

If just checking to call `.then()`, you may be wanting to use the built-in
`Promise.resolve()`.

## Install

Using [Yarn]:

```bash
$ yarn add @blakek/is-promise
```

…or using [npm]:

```bash
$ npm i --save @blakek/is-promise
```

## Usage

```js
import { isPromise } from '@blakek/is-promise';

isPromise('test'); //» false

isPromise(Promise.resolve('test')); //» true

isPromise({ then: () => 'non-standard promise' }); //» true
```

## Contributing

[Node.js] and [Yarn] are required to work with this project.

To install all dependencies, run:

```bash
yarn
```

### Useful Commands

|                     |                                                 |
| ------------------- | ----------------------------------------------- |
| `yarn build`        | Builds the project to `./dist`                  |
| `yarn format`       | Format the source following the Prettier styles |
| `yarn test`         | Run project tests                               |
| `yarn test --watch` | Run project tests, watching for file changes    |

## License

MIT

[node.js]: https://nodejs.org/
[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/
