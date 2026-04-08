import { Meeting } from '../types';

export const meeting07: Meeting = {
  id: 7,
  title: "Design Patterns",
  type: "materi",
  description: "Mempelajari design patterns yang umum digunakan untuk menyelesaikan masalah desain yang berulang.",
  objectives: [
    "Memahami konsep design patterns",
    "Mengenal berbagai kategori design patterns",
    "Mampu mengimplementasikan design patterns",
    "Memahami kapan menggunakan pattern tertentu"
  ],
  subtopics: [
    {
      title: "Pengantar Design Patterns",
      content: `**Design Patterns adalah solusi reusable untuk masalah umum dalam software design.**

**Gang of Four (GoF) - 1994:**
Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides

**Definisi:**
"Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."

**Elements of a Pattern:**

**1. Pattern Name:**
- Handle untuk describe design problem
- Vocabulary

**2. Problem:**
- When to apply pattern
- Context dan conditions

**3. Solution:**
- Elements, relationships, responsibilities
- Abstract description

**4. Consequences:**
- Results dan trade-offs
- Benefits dan liabilities

**23 GoF Patterns - 3 Categories:**

**Creational Patterns (5):**
- Object creation mechanisms
- Singleton, Factory Method, Abstract Factory, Builder, Prototype

**Structural Patterns (7):**
- Object composition
- Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy

**Behavioral Patterns (11):**
- Object interaction dan responsibility
- Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor, Interpreter

**Benefits:**
✅ Proven solutions
✅ Common vocabulary
✅ Best practices
✅ Reusability
✅ Maintainability

**When NOT to Use:**
❌ Over-engineering simple problems
❌ Forcing patterns where not needed
❌ Using pattern just to use it`
    },
    {
      title: "Creational Patterns",
      content: `**1. Singleton Pattern**

Ensure class has only one instance dan provide global access point.

**Use Case:**
- Database connection
- Logger
- Configuration manager
- Thread pool

**Implementation:**
\`\`\`java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {} // Private constructor
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
\`\`\`

**Thread-Safe (Double-Checked Locking):**
\`\`\`java
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

---

**2. Factory Method Pattern**

Define interface untuk creating object, tapi let subclasses decide which class to instantiate.

**Use Case:**
- Framework yang let application specify objects
- Parallel class hierarchies

**Example:**
\`\`\`java
// Product
interface Animal {
    void speak();
}

class Dog implements Animal {
    public void speak() { System.out.println("Woof!"); }
}

class Cat implements Animal {
    public void speak() { System.out.println("Meow!"); }
}

// Creator
abstract class AnimalFactory {
    abstract Animal createAnimal();
    
    public void makeAnimalSpeak() {
        Animal animal = createAnimal();
        animal.speak();
    }
}

class DogFactory extends AnimalFactory {
    Animal createAnimal() { return new Dog(); }
}

class CatFactory extends AnimalFactory {
    Animal createAnimal() { return new Cat(); }
}
\`\`\`

---

**3. Abstract Factory Pattern**

Provide interface untuk creating families of related objects without specifying concrete classes.

**Use Case:**
- UI toolkit (Windows, Mac, Linux themes)
- Database drivers

---

**4. Builder Pattern**

Separate construction of complex object dari representation.

**Use Case:**
- Complex object dengan many optional parameters
- Immutable objects

**Example:**
\`\`\`java
public class User {
    private String name;
    private int age;
    private String email;
    
    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
    }
    
    public static class Builder {
        private String name;
        private int age;
        private String email;
        
        public Builder name(String name) {
            this.name = name;
            return this;
        }
        
        public Builder age(int age) {
            this.age = age;
            return this;
        }
        
        public Builder email(String email) {
            this.email = email;
            return this;
        }
        
        public User build() {
            return new User(this);
        }
    }
}

// Usage
User user = new User.Builder()
    .name("John")
    .age(30)
    .email("john@example.com")
    .build();
\`\`\`

---

**5. Prototype Pattern**

Create new objects by cloning existing objects.

**Use Case:**
- Object creation is expensive
- Avoid subclasses of object creator`
    },
    {
      title: "Structural Patterns",
      content: `**1. Adapter Pattern**

Convert interface of class into another interface clients expect.

**Use Case:**
- Legacy code integration
- Third-party library integration

**Example:**
\`\`\`java
// Target interface
interface MediaPlayer {
    void play(String filename);
}

// Adaptee
class VLCPlayer {
    void playVLC(String filename) {
        System.out.println("Playing VLC: " + filename);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private VLCPlayer vlcPlayer;
    
    public MediaAdapter() {
        vlcPlayer = new VLCPlayer();
    }
    
    public void play(String filename) {
        vlcPlayer.playVLC(filename);
    }
}
\`\`\`

---

**2. Decorator Pattern**

Attach additional responsibilities to object dynamically.

**Use Case:**
- Add functionality without subclassing
- Java I/O streams

**Example:**
\`\`\`java
interface Coffee {
    double cost();
    String description();
}

class SimpleCoffee implements Coffee {
    public double cost() { return 5.0; }
    public String description() { return "Simple Coffee"; }
}

abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;
    
    public CoffeeDecorator(Coffee coffee) {
        this.coffee = coffee;
    }
}

class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) { super(coffee); }
    
    public double cost() { return coffee.cost() + 1.5; }
    public String description() { return coffee.description() + ", Milk"; }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) { super(coffee); }
    
    public double cost() { return coffee.cost() + 0.5; }
    public String description() { return coffee.description() + ", Sugar"; }
}

// Usage
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
// Cost: 7.0, Description: "Simple Coffee, Milk, Sugar"
\`\`\`

---

**3. Facade Pattern**

Provide unified interface to set of interfaces in subsystem.

**Use Case:**
- Simplify complex subsystem
- Layered architecture

**Example:**
\`\`\`java
// Complex subsystem
class CPU {
    void freeze() { }
    void jump(long position) { }
    void execute() { }
}

class Memory {
    void load(long position, byte[] data) { }
}

class HardDrive {
    byte[] read(long lba, int size) { return new byte[size]; }
}

// Facade
class ComputerFacade {
    private CPU cpu;
    private Memory memory;
    private HardDrive hardDrive;
    
    public ComputerFacade() {
        cpu = new CPU();
        memory = new Memory();
        hardDrive = new HardDrive();
    }
    
    public void start() {
        cpu.freeze();
        memory.load(0, hardDrive.read(0, 1024));
        cpu.jump(0);
        cpu.execute();
    }
}

// Usage
ComputerFacade computer = new ComputerFacade();
computer.start(); // Simple interface
\`\`\`

---

**4. Proxy Pattern**

Provide surrogate atau placeholder untuk another object.

**Types:**
- **Virtual Proxy:** Lazy initialization
- **Protection Proxy:** Access control
- **Remote Proxy:** Remote object representation

**Use Case:**
- Lazy loading
- Access control
- Logging
- Caching`
    },
    {
      title: "Behavioral Patterns",
      content: `**1. Observer Pattern**

Define one-to-many dependency, when one object changes state, all dependents notified.

**Use Case:**
- Event handling
- MVC (Model notifies Views)
- Pub/Sub systems

**Example:**
\`\`\`java
interface Observer {
    void update(String message);
}

class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void attach(Observer observer) {
        observers.add(observer);
    }
    
    public void detach(Observer observer) {
        observers.remove(observer);
    }
    
    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}

class ConcreteObserver implements Observer {
    private String name;
    
    public ConcreteObserver(String name) {
        this.name = name;
    }
    
    public void update(String message) {
        System.out.println(name + " received: " + message);
    }
}

// Usage
Subject subject = new Subject();
subject.attach(new ConcreteObserver("Observer1"));
subject.attach(new ConcreteObserver("Observer2"));
subject.notifyObservers("Hello!"); // Both observers notified
\`\`\`

---

**2. Strategy Pattern**

Define family of algorithms, encapsulate each one, make them interchangeable.

**Use Case:**
- Different algorithms untuk same task
- Payment methods
- Sorting algorithms

**Example:**
\`\`\`java
interface PaymentStrategy {
    void pay(int amount);
}

class CreditCardStrategy implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Credit Card");
    }
}

class PayPalStrategy implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using PayPal");
    }
}

class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}

// Usage
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardStrategy());
cart.checkout(100);
cart.setPaymentStrategy(new PayPalStrategy());
cart.checkout(200);
\`\`\`

---

**3. Command Pattern**

Encapsulate request as object, allowing parameterization dan queuing.

**Use Case:**
- Undo/Redo functionality
- Transaction systems
- Job queues

---

**4. Template Method Pattern**

Define skeleton of algorithm, let subclasses override specific steps.

**Example:**
\`\`\`java
abstract class DataProcessor {
    // Template method
    public final void process() {
        readData();
        processData();
        writeData();
    }
    
    abstract void readData();
    abstract void processData();
    
    void writeData() {
        System.out.println("Writing data...");
    }
}

class CSVProcessor extends DataProcessor {
    void readData() { System.out.println("Reading CSV"); }
    void processData() { System.out.println("Processing CSV"); }
}

class XMLProcessor extends DataProcessor {
    void readData() { System.out.println("Reading XML"); }
    void processData() { System.out.println("Processing XML"); }
}
\`\`\`

---

**5. State Pattern**

Allow object to alter behavior when internal state changes.

**Use Case:**
- State machines
- Workflow systems
- Game character states`
    },
    {
      title: "Pattern Selection & Anti-Patterns",
      content: `**Choosing the Right Pattern:**

**Questions to Ask:**
1. What problem am I trying to solve?
2. Is there a pattern that addresses this?
3. What are the trade-offs?
4. Is the pattern appropriate untuk my context?

**Pattern Relationships:**

**Complementary:**
- Composite + Iterator
- Strategy + Factory Method
- Observer + Mediator

**Alternatives:**
- Strategy vs State
- Adapter vs Facade
- Composite vs Decorator

**Pattern Combinations:**
- MVC = Observer + Strategy + Composite
- Repository = Factory + Singleton

---

**Anti-Patterns (What NOT to Do):**

**1. God Object**
- One class does everything
- Violates Single Responsibility
- Hard to maintain

**2. Spaghetti Code**
- No structure
- Tangled dependencies
- Hard to follow

**3. Golden Hammer**
- Using same solution untuk everything
- "If all you have is a hammer, everything looks like a nail"

**4. Lava Flow**
- Dead code yang tidak dihapus
- Fear of breaking things
- Technical debt

**5. Copy-Paste Programming**
- Duplicate code everywhere
- Violates DRY
- Maintenance nightmare

**6. Magic Numbers**
- Hard-coded values
- No explanation
- Use constants instead

**7. Premature Optimization**
- Optimizing before needed
- "Root of all evil" - Donald Knuth
- Focus on correctness first

**8. Not Invented Here (NIH)**
- Refusing to use external solutions
- Reinventing the wheel
- Wasted effort

**SOLID Principles (Foundation untuk Patterns):**

**S - Single Responsibility Principle**
- Class should have one reason to change

**O - Open/Closed Principle**
- Open untuk extension, closed untuk modification

**L - Liskov Substitution Principle**
- Subtypes must be substitutable untuk base types

**I - Interface Segregation Principle**
- Many specific interfaces better than one general

**D - Dependency Inversion Principle**
- Depend on abstractions, not concretions

**Best Practices:**
✅ Understand problem first
✅ Keep it simple (KISS)
✅ Don't over-engineer
✅ Refactor to patterns
✅ Document pattern usage
✅ Consider trade-offs`
    }
  ],
  references: [
    "Gamma, E., Helm, R., Johnson, R., Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented Software.",
    "Freeman, E., Freeman, E. (2004). Head First Design Patterns.",
    "Martin, R.C. (2017). Clean Architecture. Prentice Hall.",
    "Fowler, M. (1999). Refactoring: Improving the Design of Existing Code."
  ]
};
