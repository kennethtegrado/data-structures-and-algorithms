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

Avoid names such as `namGenEma` or `naGeEM` and instead use `nameGenderEmail`.

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

# Functions

## Functions should be small

The first rule of functions is that they should be small.

A good function is a function that only takes about 2-5 lines long.

## Functions should only do one thing

> FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.

To know if a function is doing more than one thing, check if you can extract another function from it with a name that is not merely a restatement of its implementation.

## One Level of Abstraction per Function

In order to make our function only do one thing, we need to make sure that the statements within our function are all at the same level of abstraction.

## The Stepdown Rule

Every function should be followed by those at the next level of abstraction so that we can read the program, descending one level of abstraction at a time as we read down the list of functions.

**Simple Imlementation in Paragraph**

```
To include the setups and teardowns, we include setups, then we include the test page content, and then we include the teardowns.
    - To include the setups, we include the suite setup if this is a suite, then we include the
    regular setup.
    - To include the suite setup, we search the parent hierarchy for the “SuiteSetUp” page
    and add an include statement with the path of that page.
    - To search the parent. . .
```

## Use Descriptive Names

Don't be afraid to make a name long. A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment. Use a naming convention that allows multiple words to be easily read in the function names, and then make use of those mulitple words to give the function a name that says what it does.

## Function Arguments

The ideal number of arguments for a function is zero `(niladic)`. Next comes one `(monadic)`, followed closely by two `(dyadic)`. Three arguments `(triadic)` should be avoided where possible. More than three `(polyadic)` requires very special jsutification - and then shouldn't be used anyway.

### Common Monadic Forms

A single argument in a function may be asking a question about that argument. At the same time, it can also mean that we want to transform it into something else and returning it. These two things are what users are what readers expect when they see a function with a single argument.

> `event` - a function that accepts a single argument but creates an alteration in the system.

### Flag Arguments

Passing a boolean into a function is a truly terrible practice. It loudly procalims that this funcion does more than one thing. It does one thing if the flag is true and another if the flag is false.

### Dyadic Functions

A function with two arguments is harder to understand than a monadic function. Use only dyadic functions if we are trying to take ordered components of a single value.

> writeField(name) is better than writeField(output-Stream, name)

**Best Use Cased of Dyadic**

```
Point p = new Point(0,0)
```

### Triads

Functions that take three arguments are significantly harder to understand than dyads.

### Argument Objects

When a function seems to need more than two or three arguments, it is likely that some of those arguments ought to be wrapped into a class of their own.

Reducing the number of arguments by creating objects out of them may seem like cheating, but it's not. When groups of variables are passed together, the way x and y are in the example above, they are likely part of a concept that deserves a name of its own.

### Verbs and Keywords

Choosing good names for a function can go a long way toward explaining the intent of the function and the order and intent of the arguments.

-   Monads should have a verb/noun pair. Ex. `writeField(name)`.

## Have no Side Effects

Your function promises to do one thing, but it also does other hidden things. Sometimes it will make unexpected changes to the variables of its own class. Sometimes it will make them to the parameters passed into the function or to system globals. In either the case they are devious and damaging mistruths that often result in strange temporal couplings and order dependencies.

### Output Arguments

Arguments are most naturally interpreted as inputs to a function. If you have been programming for more than a few years, I'm sure you've done a double-take on an argument that was actually an output rather than an input.

<!-- 76 -->
