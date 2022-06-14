# import and export (modules)

In React projects (and actually in all modern JavaScriptprojects), you split your code across multiple JavaScript files - so-called **modules**. You do this, to keep each file/module focused and manageable.

To still access functionality in another file, you need **export** (to make it available) and **import** (to get access) statements.

You got two diﬀerent types of ***exports***:
- default (unnamed)
- namedexports

You can import default exports like this:
`import someNameOfYourChoice from './path/to/
file.js';`
Surprisingly, **someNameOfYourChoice** is totally up to you.


**Named exports** have to be imported by their name:

`import { someData } from './path/to/file.js';`

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing **named exports**, you can also import all named exports at once with the following syntax:

`import * as upToYou from './path/to/file.js';`

`upToYou` is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you `export const someData = ... ( /path/to/file.js ) `you can access it on `upToYou` like
this: `upToYou.someData`.

## avoid ModuleNotFoundError
to avoid moduleNotFoundError during importing you can create `package.json` and set type to module

```json
    {
    "type": "module"
    }
```