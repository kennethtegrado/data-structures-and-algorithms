# Naming Convention

Names are everywhere in our software, that is why a good naming convention is important for creating a good application.

## Use Intention-Revealing Names

The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.

Choosing names that reveal intent can make it much easier to understand and change code.

**Example of a bad naming conventions**

```javascript
let x = 'KENNETH',
    y = 'RENZ';

console.log(`Hi I am ${x}, but I prefer that you call me by ${y}`);
```

**Refactor that to good naming conventions**

```javascript
let name = 'KENNETH',
    nickname = 'RENZ';

console.log(`Hi I am ${name}, but I prefer that you call me by ${nickname}`);
```

> Most problems in our codes are not because of its simplicity but rather its `implicity`. Implicity is the degree to which the context is not explicit in the code itself.

## Avoid Disinformation

Programmers must avoid leaving false clues that obscure the meaning of code. We should avoid words whose entrenched meanings vary from our intended meaning. For example, `gen` would be a poor variable name because people might misunderstand it for `generation` even though what you mean is gender.

Do not refer to groupings of variables such as `nameList` if it is not a **List**.
