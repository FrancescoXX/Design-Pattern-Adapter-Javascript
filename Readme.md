# Adapter Design Pattern 
___

## Structural Design Pattern

## 📌Introduction
The Adapter pattern is used to allow a new use of an existing interface of a class, with a new interface, using the same methods.
We separate the code well (Single responsibility principle).
We dont need to change the existing class (open/closed principle).
___

## ⚡️In short
We have:
Target: Interface the client uses.
Adapter: Transforms the request of the client to a specific request.
Adapteee: Class we want to adapt.
___


## 💡Intent
- Wrap an existing class with a new interface.
- Convert an interface into another one.
- Let classes work together that couldn't otherwise because of incompatible interfaces.
___


## 🔧 Apply when (we want to)
- Re-use an existing class, but the interface is not compatible
- Combine unrelated classes with an incompatible interface
___

## ✅Pro
- Single Responsibility Principle: We can separate the different interfaces' logic.
- Open/Closed Principle. We can introduce new adapters without breaking the existing code.
___


## ⚠️Cons
- How much adapting does the adapter do? Complex adaptations could be be hard to write
- The overall complexity of the code increases 
- We need to introduce new interfaces and classes. 
- Sometimes it’s better to change the class. (Not always possible by the way).
___


## 🏆 Great for
- Connect to legacy systems
- Adapt one interface to another
___