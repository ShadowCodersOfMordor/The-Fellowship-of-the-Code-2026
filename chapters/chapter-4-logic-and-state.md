# Chapter IV: Logic and State

## Summary

In this phase we extended the static interface from Assignment 3 with JavaScript logic and state.

The goal was not to redesign the interface or add new features, but to make the existing communication flow functional. The interface now reacts to user input, updates its visible state, and supports message sharing, clarification requests, and clarified messages.

## Artifact

Artifact 4 implements the capability **Information Clarification and Alignment** with interactive behavior.

Files included:

- [interface.html](../artifacts/artifact-4/src/interface.html)
- [style.css](../artifacts/artifact-4/src/style.css)
- [logic.js](../artifacts/artifact-4/src/logic.js)

The implementation uses explicit interface states:

1. Empty feed
2. Message shared
3. Message understood
4. Needs clarification
5. Clarified message published
6. Clarified message understood

These states correspond to the communication flow designed in Artifact 2 and the interface structure represented in Artifact 3.

The JavaScript handles user interactions such as sending a message, requesting clarification, publishing a clarified message, and marking a message as understood.

## AI Assistance

AI tools helped with structuring the JavaScript logic, identifying useful state variables, and connecting the existing HTML elements to user interactions.

AI also helped refine the implementation so that it stayed within the assignment constraints: no backend, no external libraries, no persistence, and no redesign of the interface.

However, the final behavior was adapted to match our project logic. In particular, we adjusted the clarification flow so that a clarified message can still be questioned again if it remains unclear.

## Lessons Learned

This assignment showed how interface behavior depends on state.

We learned that even a simple static interface needs clear state variables once it becomes interactive. The system must know whether the feed is empty, whether a message has been shared, whether clarification is needed, and whether a clarified message has been published.

We also learned that JavaScript should not add unnecessary complexity. Its purpose in this artifact is to express the existing communication logic clearly and make the interface behave according to the previously designed flow.

[Artifact 4 – Logic and State](../artifacts/artifact-4/artifact-4-logic-state.md)
