# Patterns

## Why Patterns?

Why do we need patterns? The blunt answer is _**we don't want to reinvent the wheel!**_ Problems that occur frequently enough in tech life usually have well-defined solutions, which are flexible, modular and more understandable. These solutions when abstracted away from the tactical details become design patterns. If you experienced a [déjà vu](https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu) feeling when designing a solution for a problem that felt eerily similar to the solution of a previous problem, albeit in a different domain, then you were probably using a pattern unknowingly.

Below is an image showing the relationship among the various design patterns as explained by the seminal design patterns work done by the gang of four.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/75c85f5a-c75d-44fe-94e3-2b76eaf673a4/Untitled.png)

Let's consider an example to understand what design patterns are and how do they get applied. The class constructor is one of the basic concepts in an object oriented language. The constructors help create objects of the class and can take in parameters. Let us take the following class as an example.

```jsx
public class Aircraft {

    private String type;

    public Aircraft(String type) {
        this.type = type;
    }
}
```

---

In the above example, we have the default constructor for the class that takes in a single parameter the **`type`** of the aircraft. Now say after a few days, you realize you want to add additional properties to your **`Aircraft`** class. Say you want to add the color of the aircraft as a property, but you have already released a version of your library and can't modify the original constructor. The solution is to add another constructor with two parameters like so

```jsx
public class Aircraft {

    private String type;
    private String color;

    public Aircraft(String type) {
        this.type = type;
    }

    public Aircraft(String type, String color) {
        this.type = type;
        this.color = color;
    }
}
```

---

If you continue this way you'll end up having a bunch of constructors with increasing number of arguments looking like a telescope:

```jsx
Aircraft(String type)
Aircraft(String type, String color)
Aircraft(String type, String color, String prop3)
Aircraft(String type, String color, String prop3, String prop4)
```

The telescoping pattern is called an _**anti-pattern: how NOT to do things!**_ The way to approach a class with an increasing number of variables is to use the **Builder Pattern** that we'll discuss in depth in the following chapters.

Seasoned developers are expected to be well-versed in design patterns and applying them makes the code reusable and maintainable for future. Design patterns aren't limited to object oriented languages but also exist for other domains of Computer Science such as distributed systems, big data system or user interface.

## Suggestions for Object Oriented Design

Whenever writing code in an object oriented language, sticking to the following list of suggestions will make your code amenable to changes with the least effort.

-   Separate out parts of code that vary or change from those that remain the same.
-   Always code to an interface and not against a concrete implementation.
-   Encapsulate behaviors as much as possible.
-   Favor composition over inheritance. Inheritance can result in explosion of classes and also sometimes the base class is fitted with new functionality that isn't applicable to some of its derived classes.
-   Interacting components within a system should be as loosely coupled as possible.
-   Ideally, class design should inhibit modification and encourage extension.
-   Using patterns in your day to day work, allows exchanging entire implementation concepts with other developers via shared pattern vocabulary.

Some of the above suggestions are embodied in the patterns we'll be discussing in the upcoming lessons. However, remember that making one's design flexible and extensible correspondingly increases the complexity and understandability of the code base. One must walk a fine line between the two competing objectives when designing and writing software.

# Types of Design patterns

Design patterns for object orientated programs are divided into three broad categories listed below. These are the same categories used by GoF in their seminal work on design patterns.

-   Creational
-   Structural
-   Behavioural

Each of these are explained below

## Creational

Creational design patterns relate to how objects are constructed from classes. New-ing up objects may sound trivial but unthoughtfully littering code with object instance creations can lead to headaches down the road. The creational design pattern come with powerful suggestions on how best to encapsulate the object creation process in a program.

-   Builder Pattern
-   Prototype Pattern
-   Singleton Pattern
-   Abstract Factory Pattern

## Structural

Structural patterns are concerned with the composition of classes i.e. how the classes are made up or constructed. These include:

-   Adapter Pattern
-   Bridge Pattern
-   Composite Pattern
-   Decorator Pattern
-   Facade Pattern
-   Flyweight Pattern
-   Proxy Pattern

## Behavioral

Behavioral design patterns dictate the interaction of classes and objects amongst eachother and the delegation of responsibility. These include:

-   Interpreter Pattern
-   Template Pattern
-   Chain of Responsibility Pattern
-   Command Pattern
-   Iterator Pattern
-   Mediator Pattern
-   Memento Pattern
-   Observer Pattern
-   State Pattern
-   Strategy Pattern
-   Visitor Pattern

# Creational Pattern - In-depth

# Builder Pattern

As the name implies, a builder pattern is used to build objects. Sometimes, the objects we create can be complex, made up of several sub-objects or require an elaborate construction process. The exercise of creating complex types can be simplified by using the builder pattern. A _composite_ or an _aggregate_ object is what a builder generally builds.

Formally, a _**builder pattern encapsulates or hides the process of building a complex object and separates the representation of the object and its construction. The separation allows us to construct different representations using the same construction process.**_ In Java speak, different representations implies creating objects of different classes that may share the same construction process.

### Class Diagram

The class diagram consists of the following entities

-   **Builder**
-   **Concrete Builder**
-   **Director**
-   **Product**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20de94e1-a2ba-4344-9e5d-7e37d2d90c56/Untitled.png)

Example:

Continuing with our example of airplanes let's say the construction of an aircraft involves the three steps in order:

1.  the making of the cockpit
2.  then the engine
3.  and finally the wings

In our hypothetical world, every aircraft requires at least the above three steps. However, a passenger aircraft can have an added step of making bathrooms in the plane. The steps represent the _**construction**_ process from our formal definition. The _**product**_ is an aircraft but can have different _**representations**_ such as an F-16 or a Boeing-747. Using the same construction process, we should be able to produce both F-16s and Boeings.

Let's see some code now. First we'll start with the abstract interface for our **`AircraftBuilder`** class. The builder contains a method for each component that can be part of the final product. These methods are selectively overridden by concrete builders depending on if the builders will be including that part in the final product variant that they are responsible for building.

```jsx
public abstract class AircraftBuilder {

    public void buildEngine() {

    }

    public void buildWings() {

    }

    public void buildCockpit() {

    }

    public void buildBathrooms() {

    }

    abstract public IAircraft getResult();
}
```

Now we'll implement two concrete builders, one for F-16 and one for Boeing-747.

```jsx
public class Boeing747Builder extends AircraftBuilder {

    Boeing747 boeing747;

    @Override
    public void buildCockpit() {

    }

    @Override
    public void buildEngine() {

    }

    @Override
    public void buildBathrooms() {
        
    }

    @Override
    public void buildWings() {

    }

    public IAircraft getResult() {
        return boeing747;
    }
}

public class F16Builder extends AircraftBuilder {

    F16 f16;

    @Override
    public void buildEngine() {
        // get F-16 an engine
        // f16.engine = new F16Engine();
    }

    @Override
    public void buildWings() {
        // get F-16 wings
        // f16.wings = new F16Wings();
    }

    @Override
    public void buildCockpit() {
        f16 = new F16();
        // get F-16 a cockpit
        // f16.cockpit = new F16Cockpit();
    }

    public IAircraft getResult() {
        return f16;
    }
}
```

For brevity's sake, we have provided the skeleton of the builders and skipped individual implementation of each method. Note the **`F16Builder`** doesn't override the **`buildBathrooms`** method, since there are no bathrooms in the F-16 cockpit. The Boeing's builder does override the bathroom's method since a Boeing-747 has bathrooms for passengers.

The process or algorithm required to construct the aircraft which in our case is the specific order in which the different parts are created is captured by another class called the **`Director`**. The director is in a _sense **directing**_ the construction of the aircraft. The final product is still returned by the builders.

```jsx
public class Director {

    AircraftBuilder aircraftBuilder;

    public Director(AircraftBuilder aircraftBuilder) {
        this.aircraftBuilder = aircraftBuilder;
    }

    public void construct(boolean isPassenger) {
        aircraftBuilder.buildCockpit();
        aircraftBuilder.buildEngine();
        aircraftBuilder.buildWings();

        if (isPassenger)
            aircraftBuilder.buildBathrooms();
    }
}
```

Notice how we can pass in the builder of our choice, and vary the _aircraft product_ (representation) to be either an F-16 or a Boeing-747. In our scenario, the builders return the same supertype however that may not be the case if the builders return products that aren't very similar.

The client will consume the pattern like so:

```jsx
public class Client {

    public void main() {

        F16Builder f16Builder = new F16Builder();
        Director director = new Director(f16Builder);
        director.construct(false);

        IAircraft f16 = f16Builder.getResult();
    }
}
```

The **`AircraftBuilder`** interface hides how a given aircraft gets built. The client is unaware of the classes **`F16Engine`**, **`F16Cockpit`,** and similar classes for Boeing-747.

**Skipping the director**

You may find the builder pattern being used without the **director.** The client can directly instantiate the builder and invoke the required methods to get a product for itself. This is a common antidote for **telescoping constructors.** Imagine a class with too many attributes but some attributes are to be set optionally. In such a case the builder can be invoked to only set the required attributes and create a product.

## Caveats
> The builder pattern might seem similar to the abstract factory pattern but one difference is that the builder pattern creates an object step by step whereas the abstract factory pattern returns the object in one go.