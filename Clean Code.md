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

## Make Meaningful Distinctions

Programmers create problems for themselves when they write code solely to satisfy a compiler or interpreter. Because programmers know that they can't use the same variable names to refer to two things in the same scope, there are ways where programmers are tempted to change one name in an `arbitrary` way.

### The don'ts

-   Using noninformative names
    -   a1, a2, a2
        -   What does a even mean
-   Using indistinct noise words
    -   PersonInfo and PersonData has not make any different meaning from a Person name
-   Using indistinguishible names
    -   moneyAmount is indistinguishable from money

## Use Pronounceable Names

It is important to make variable names pronounceable because a significant part of our brains is dedicated to the concept of words.

Avoid names such as `namGenEma` and instead use `nameGenderEmail`.

## Use Searchable Names

Using single-letter names and numeric constants make searching for variables in an application difficult. One will easily find `FIRST_NAME` than a variable `x` during development and debugging.

## Avoid Mental Mapping

Readers shouldn't have to mentally translate your names into other names they already know.

## Class Names

Classes and objects should have a noun or noun phrase names like Person, Component, and Account. Avoid words like Manager, Processor, Data, or Info in the name of a class. A class name should not be a verb.

### Method Names

Methods should have verb or verb phrase names like postPayment, deletePage, or save. Accessors, mutators, and predicates should be named for ther value and prefixed with `get, set, and is`.

## Don't be cute

Ensure that names you used are understandable for all kinds of people. Avoid using collioguialisms or slang.

## Pick One Word per Concept

Pick one word for one abstract concept and stick with it. Avoid interchanging words like fetch, retrive, and get but choose one for the whole program.

A consistent lexicon is a great boon to the programmers who must use your code.

## Don't Pun

Avoid using the same word for two purposes. For example, when we are using the prefix `add` for classes that creates a new value by adding or concatenating two values, but we decided to also use `add` for methods that insert an item to a list, it is a pun.

## Use Solution Domain Names

Remember that the people who read your code will be programmers so you should use computer science (CS) terms, algorithm names, pattern names, math terms, and so forth.

## Use Problem Domain Names

When you cannot use programming related terms for naming, then you can use problem domain names.

## Add Meaningful Context

Imagine that you have variables named firstName, lastName, street, houseNumber, city, state, and zipcode. Taken together it’s pretty clear that they form an address. But what if you just saw the state variable being used alone in a method? Would you automatically infer that it was part of an address? You can add context by using prefixes: addrFirstName, addrLastName, addrState, and so on. At least readers will understand that these variables are part of a larger structure. Of course, a better solution is to create a class named Address. Then, even the compiler knows that the variables belong to a bigger concept.
