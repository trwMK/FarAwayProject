Building a From and handle submissions

1. Build normal html form
2. Create an handleSubmit function with prevent the default for SPA
   To Handle submissions I need three steps
3. create a state and set the default value -> (const [desc, setDesc] = useState(""))
4. Put that value (from the state) in the form so that React handles the input and not the DOM element
5. Listen and update for the onChange method to set the state if the user change the input

Different State vs. Props

State:
-> internale data, owned by component [state, setState] = useState(..);
-> component "memory" (Can hold data over time)
-> can be updated by the component itself
-> updating state causes component to re-render
-> Used to make components interactiv

Props:
-> external data, owned by parent component
-> similar to function parameters
-> read-only
-> receiving new props causes component to re-render. Usually when the parent`s state has been updated
-> Used by parent to configure child component ("settings")

---

"THINKING IN REACT" AS A PROCESS

THE "THINKING IN REACT" PROCESS:

1. Break the desired UI into componetns and establish the component tree
2. Build a static version in React (without state)
3. Think about state:
   -> When to use state
   -> Types of state: local vs. global
   -> Where to place each piece of state
4. Establish data flow:
   -> One-way data flow
   -> Child-to-parent communication
   -> Accessing global state

WHEN YOU KNOW HOW TO "THINK IN REACT", I will be ablte to answer:

- How to break up a UI design into components?
- How to make some components reusable?
- How to assemble UI from reusable components?
- What pieces of state do I need for interactivity?
- Where to place state? (What component should "own" each piece of state?)
- What types of state can or should I use?
- How to make data flow through app?

WHAT IS STATE MANAGEMENT? (Section 79)
-> State management: Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app
-> Giving each piece of state a home

TYPES of state: local vs. global state
Local state:
-> State needed only by one or few components
-> State that is defined in a component and only that component and child components have access to it (by passing via props)
-> We should always start with local state!

Global state:
-> State that many components might need
-> Shared state that is accessible to every component in the entire application

STATE: WHEN AND WHERE?
Need to store data -> Will data change at some point? -> No? Then regular const varibale
-> Yes? Then "Can be computed from existing state/props?" -> Yes? Derive state
-> No? Should it re-render component? -> No? Ref(useRef)
-> Yes? Place a new piece of state in component (Always start with local state) -> only used by this component? -> Yes? Leave in component
-> No? Also used by a child component? -> Yes? Pass to child via props
-> No? Used by one or a few sibling components? -> Yes? Lift state up to first common parent
-> No? Probably global state!
