import { Meeting } from '../types';

export const meeting06: Meeting = {
  id: 6,
  title: "Architectural Design",
  type: "materi",
  description: "Mempelajari prinsip-prinsip desain arsitektur perangkat lunak dan berbagai architectural patterns.",
  objectives: [
    "Memahami pentingnya arsitektur perangkat lunak",
    "Mengenal berbagai architectural patterns",
    "Mampu memilih arsitektur yang tepat untuk kebutuhan",
    "Memahami quality attributes dalam arsitektur"
  ],
  subtopics: [
    {
      title: "Pengantar Software Architecture",
      content: `**Software Architecture adalah fundamental organization dari sistem.**

**Definisi (IEEE 1471):**
"The fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles governing its design and evolution."

**Mengapa Arsitektur Penting:**

✅ **Communication:** Stakeholder discussion tool
✅ **Early Decisions:** Critical design choices
✅ **Transferable Abstraction:** Reusable patterns
✅ **Quality Attributes:** Enables system qualities
✅ **Cost Estimation:** Basis untuk estimasi
✅ **Risk Management:** Early risk identification

**Architecture vs Design:**
- **Architecture:** High-level structure, major components, system-wide decisions
- **Design:** Detailed design, algorithms, data structures, implementation details

**Architectural Views (4+1 Model - Kruchten):**

**1. Logical View**
- Fungsionalitas sistem
- Class diagrams, object diagrams
- For end-users dan developers

**2. Development View**
- Programmer's perspective
- Component, package diagrams
- Software management

**3. Process View**
- System dynamics, concurrency, performance
- Activity diagrams, sequence diagrams
- Integrators, performance engineers

**4. Physical View**
- Deployment, infrastructure
- Deployment diagrams
- System engineers

**+1 Scenarios (Use Case View)**
- Use cases yang illustrate views
- Validate architecture
- Discovery tool

**Quality Attributes (Non-Functional Requirements):**

**Performance:**
- Response time
- Throughput
- Resource utilization

**Scalability:**
- Load handling
- Growth capacity

**Availability:**
- Uptime percentage
- Fault tolerance

**Security:**
- Authentication
- Authorization
- Data protection

**Maintainability:**
- Modifiability
- Testability
- Analyzability

**Usability:**
- User experience
- Learnability

**Interoperability:**
- Integration capability
- Standards compliance`
    },
    {
      title: "Layered Architecture",
      content: `**Layered (N-Tier) Architecture**

Sistem diorganisir dalam layers, setiap layer provides services ke layer di atasnya.

**Classic 3-Tier:**

**1. Presentation Layer (UI)**
- User interface
- Input validation
- Display logic
- Technologies: HTML, CSS, JavaScript, React, Angular

**2. Business Logic Layer (Application/Domain)**
- Business rules
- Workflow
- Data processing
- Core functionality

**3. Data Access Layer (Persistence)**
- Database operations
- CRUD operations
- Data mapping
- ORM (Hibernate, Entity Framework)

**4-Tier Architecture:**
Add **Data Layer** (Database) as separate tier

**Characteristics:**

**Separation of Concerns:**
- Each layer has specific responsibility
- Clear boundaries

**Dependencies:**
- Layer depends only on layer below
- Unidirectional dependency
- Strict layering vs relaxed layering

**Advantages:**
✅ Easy to understand dan develop
✅ Clear separation of concerns
✅ Testability (mock lower layers)
✅ Maintainability
✅ Reusability
✅ Parallel development

**Disadvantages:**
❌ Performance overhead (layer traversal)
❌ Can become monolithic
❌ Tight coupling between layers
❌ Difficult to scale specific layers

**When to Use:**
- Traditional enterprise applications
- CRUD applications
- Clear separation needed
- Team organized by layers

**Example - E-Commerce:**
\`\`\`
┌─────────────────────────┐
│  Presentation Layer     │
│  (Web UI, Mobile App)   │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  Business Logic Layer   │
│  (Order Processing,     │
│   Inventory Management) │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  Data Access Layer      │
│  (Repository, DAO)      │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  Database Layer         │
│  (PostgreSQL, MongoDB)  │
└─────────────────────────┘
\`\`\``
    },
    {
      title: "Client-Server & MVC",
      content: `**Client-Server Architecture**

Distributed system dengan clients requesting services dari servers.

**2-Tier Client-Server:**
- **Thin Client:** Presentation only, logic di server
- **Fat Client:** Presentation + business logic, data di server

**3-Tier Client-Server:**
- Client: Presentation
- Application Server: Business logic
- Database Server: Data

**Advantages:**
✅ Centralized control
✅ Scalability (add more servers)
✅ Easier maintenance
✅ Resource sharing

**Disadvantages:**
❌ Server bottleneck
❌ Single point of failure
❌ Network dependency

---

**MVC (Model-View-Controller)**

Architectural pattern untuk interactive applications.

**Components:**

**Model:**
- Business logic dan data
- State of application
- Independent of UI
- Notifies views of changes

**View:**
- Presentation layer
- Display data dari model
- Multiple views possible
- User interface

**Controller:**
- Handles user input
- Updates model
- Selects view
- Application logic

**Flow:**
1. User interacts dengan View
2. Controller receives input
3. Controller updates Model
4. Model notifies View
5. View updates display

**Variations:**

**MVP (Model-View-Presenter):**
- Presenter mediates between View dan Model
- View is passive
- Better testability

**MVVM (Model-View-ViewModel):**
- ViewModel exposes data untuk View
- Data binding
- Popular in WPF, Angular, Vue

**Advantages:**
✅ Separation of concerns
✅ Multiple views
✅ Testability
✅ Parallel development
✅ Reusability

**Disadvantages:**
❌ Complexity untuk simple apps
❌ Learning curve
❌ Overhead

**Example - Web Application:**
\`\`\`
User → View (HTML/React)
         ↓
      Controller (API Endpoints)
         ↓
      Model (Business Logic + Data)
         ↓
      Database
\`\`\``
    },
    {
      title: "Microservices Architecture",
      content: `**Microservices - Distributed Architecture**

Application sebagai collection of small, independent services.

**Characteristics:**

**1. Independently Deployable**
- Each service can be deployed separately
- No need to redeploy entire application

**2. Organized Around Business Capabilities**
- Each service = business function
- Cross-functional teams

**3. Decentralized**
- Decentralized data management
- Each service owns its data
- Polyglot persistence

**4. Technology Diversity**
- Different tech stack per service
- Best tool for the job

**5. Failure Isolation**
- Service failure doesn't crash entire system
- Resilience patterns

**6. Scalability**
- Scale services independently
- Horizontal scaling

**Components:**

**API Gateway:**
- Single entry point
- Routing
- Authentication
- Rate limiting
- Load balancing

**Service Registry:**
- Service discovery
- Health checks
- Examples: Consul, Eureka

**Services:**
- Small, focused
- Own database
- RESTful APIs atau gRPC

**Message Queue:**
- Asynchronous communication
- Event-driven
- Examples: RabbitMQ, Kafka

**Advantages:**
✅ Independent deployment
✅ Technology flexibility
✅ Scalability
✅ Fault isolation
✅ Team autonomy
✅ Easier to understand (each service)

**Disadvantages:**
❌ Distributed system complexity
❌ Network latency
❌ Data consistency challenges
❌ Testing complexity
❌ Deployment complexity
❌ Monitoring challenges

**When to Use:**
- Large, complex applications
- Multiple teams
- Need for scalability
- Rapid deployment needed
- Different tech requirements

**Microservices Patterns:**

**Communication:**
- Synchronous: REST, gRPC
- Asynchronous: Message queues, events

**Data Management:**
- Database per service
- Saga pattern untuk distributed transactions
- CQRS (Command Query Responsibility Segregation)
- Event sourcing

**Resilience:**
- Circuit breaker
- Retry pattern
- Timeout
- Bulkhead

**Example:**
\`\`\`
API Gateway
    ├─→ User Service (Node.js + MongoDB)
    ├─→ Order Service (Java + PostgreSQL)
    ├─→ Payment Service (Python + MySQL)
    ├─→ Inventory Service (Go + Redis)
    └─→ Notification Service (Node.js + RabbitMQ)
\`\`\``
    },
    {
      title: "Event-Driven & Pipe-Filter",
      content: `**Event-Driven Architecture (EDA)**

System responds to events (state changes).

**Components:**

**Event Producers:**
- Generate events
- Don't know consumers

**Event Consumers:**
- Subscribe to events
- React to events

**Event Channel:**
- Message broker
- Event bus
- Examples: Kafka, RabbitMQ, AWS SNS/SQS

**Event Types:**
- **Simple Event:** State change notification
- **Event Carried State Transfer:** Event contains data
- **Event Sourcing:** Store events as source of truth

**Patterns:**

**Pub/Sub (Publish-Subscribe):**
- Publishers publish events
- Subscribers receive events
- Loose coupling

**Event Streaming:**
- Continuous flow of events
- Real-time processing
- Kafka, Kinesis

**Advantages:**
✅ Loose coupling
✅ Scalability
✅ Flexibility
✅ Real-time processing
✅ Asynchronous

**Disadvantages:**
❌ Complexity
❌ Debugging difficulty
❌ Event ordering challenges
❌ Eventual consistency

**Use Cases:**
- Real-time analytics
- IoT systems
- Notification systems
- Microservices communication

---

**Pipe-Filter Architecture**

Data flows through series of processing components (filters) connected by pipes.

**Components:**

**Filters:**
- Processing components
- Transform data
- Independent
- Reusable

**Pipes:**
- Connectors between filters
- Data flow
- Buffering

**Characteristics:**
- Sequential processing
- Each filter independent
- Reusable filters
- Easy to add/remove filters

**Advantages:**
✅ Reusability
✅ Flexibility
✅ Maintainability
✅ Parallel processing possible
✅ Easy to understand

**Disadvantages:**
❌ Not suitable untuk interactive systems
❌ Overhead dari data transformation
❌ Error handling complexity

**Examples:**
- Unix pipes: \`cat file.txt | grep "error" | sort | uniq\`
- Compiler: Lexer → Parser → Semantic Analyzer → Code Generator
- Image processing pipeline
- ETL (Extract, Transform, Load)

**Example - Data Processing:**
\`\`\`
Input → [Validate] → [Transform] → [Enrich] → [Aggregate] → Output
\`\`\`

**Variations:**
- **Linear:** Sequential filters
- **Non-linear:** Branching, merging
- **Feedback:** Output feeds back to earlier filter`
    }
  ],
  references: [
    "Bass, L., Clements, P., Kazman, R. (2012). Software Architecture in Practice. 3rd Edition.",
    "Fowler, M. (2002). Patterns of Enterprise Application Architecture.",
    "Newman, S. (2015). Building Microservices. O'Reilly.",
    "Richards, M. (2015). Software Architecture Patterns. O'Reilly."
  ]
};
