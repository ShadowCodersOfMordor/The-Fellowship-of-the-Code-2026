# The Red Book of Westmarch - Chapter IV: Logic & State

## Table of Contents

- [The Red Book of Westmarch - Chapter IV: Logic & State](#the-red-book-of-westmarch---chapter-iv-logic--state)
  - [Summary](#summary)
  - [Artifact](#artifact)
  - [AI Assistance](#ai-assistance)
  - [Lessons Learned](#lessons-learned)

---

## Summary

This chapter focuses on adding logic and state to the existing Fellowship Companion interface.

In the previous artifact, the interface only represented the communication and clarification process visually. In this phase, the same interface was extended with JavaScript so that it reacts to user interaction, stores the current message state, and updates the visible interface based on user actions.

The implemented system capability is **Information Clarification and Alignment**.

The interface now allows a user to:

- write and send a group message
- view the message in the shared group feed
- mark a message as understood
- request clarification when a message is unclear
- publish a clarified version of the message
- request clarification again if the clarified message is still not clear

### Learning Outcomes

- Understand the relationship between state, logic, and UI
- Apply plain JavaScript to control interface behavior
- Connect user actions to visible interface changes
- Reflect on how logic constraints shape interaction
- Keep the implementation aligned with the original system capability

---

## Artifact

File: [Artifact 4 - Logic & State](../artifacts/artifact-4/artifact-4-logic-state.md)

Build:

- [HTML interface](../artifacts/artifact-4/src/interface.html)
- [CSS styling](../artifacts/artifact-4/src/style.css)
- [JavaScript logic](../artifacts/artifact-4/src/logic.js)

Focus:

The artifact focuses on turning the static representation from Artifact 3 into a functional interface. The visual design was not redesigned or expanded. Instead, the main focus was on adding behavior, state changes, and interaction logic.

The JavaScript implementation introduces explicit state variables that store the current message, the clarified message, and the current status of the interface. These state values determine which sections are visible and how the interface responds after each user action.

The main interaction flow is:

1. A user writes a message and sends it to the group.
2. The message appears in the shared group feed.
3. The message can be marked as understood.
4. If the message is unclear, a clarification can be requested.
5. The original sender can publish a clarified message.
6. The clarified message can also be marked as understood or sent back for further clarification.

This supports the original concept because the interface does not only display communication, but also manages uncertainty and clarification within the group.

---

## AI Assistance

AI was used to support the development of the JavaScript logic and to improve the connection between the static interface and the required behavior.

At first, the interface already existed as an HTML and CSS representation. The main challenge was to decide how the page should behave once JavaScript was added. AI helped by suggesting a clear state-based structure for the interaction.

The AI assistance helped with:

- identifying the necessary state variables
- connecting buttons to user actions
- showing and hiding interface sections
- validating empty input fields
- updating status labels and badges
- keeping the clarified message process reusable
- ensuring that clarification can be requested again after a clarified message is published

However, the final decisions were adapted to fit the original assignment scope. No external libraries, backend, persistence, or additional features were added. The implementation stays focused on the selected system capability and uses only plain HTML, CSS, and JavaScript.

One important design decision was to allow the **Request Clarification** action not only on the first shared message, but also on the clarified message. This was added because a clarified response may still be unclear to the receiver. Therefore, the logic supports repeated clarification instead of ending the process too early.

---

## Lessons Learned

This assignment showed that interface design is not only about how something looks, but also about how it behaves.

The most important lesson was that state is necessary for an interface to feel functional. Without JavaScript, the page could show the communication process, but it could not react to user input. By adding state variables, the interface can remember whether a message has been sent, whether clarification is needed, and whether a clarified message has been published.

Another important lesson was that logic should follow the original concept and not create unnecessary new features. The task was not to redesign the interface, but to make the existing capability work. Because of this, the implementation stayed close to the original wireframe and static representation.

The clarification process also showed that interaction flows are often not strictly linear. A user may still not understand a message after it has been clarified. For that reason, the final clarified message also includes the option to request clarification again.

Overall, this chapter helped connect concept, representation, and execution. The Fellowship Companion now demonstrates how a shared communication interface can support group alignment by making unclear information visible, actionable, and revisable.
