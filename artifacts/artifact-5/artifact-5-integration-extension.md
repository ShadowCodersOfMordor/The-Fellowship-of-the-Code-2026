# Chapter 5 – Integration & Extension

## Summary

In this chapter, the Fellowship Companion was extended with an additional system capability called **Priority Assessment**. The goal of this extension was to help users identify important messages more quickly within the shared communication workflow. The new capability was integrated into the existing message creation, review, clarification, and understanding process.

The chapter also demonstrates how the different parts of the system connect through an integrated system flow, an updated wireframe, and an implementation snapshot.

---

## Artifact

### Selected Capability

**Priority Assessment**

Users can now classify a message as either **Normal Priority** or **High Priority** before publishing it to the shared group feed. This helps group members identify urgent information and focus on important messages first.

### System Flow

The integrated system flow is documented in:

`src/flowchart-system.mermaid.md`

The flow shows how message creation, clarification requests, clarification publishing, message understanding, and priority assessment interact within a single workflow.

### Wireframe

The updated wireframe is stored in:

`src/wireframe-system.png`

The wireframe introduces a priority selection during message creation and displays the selected priority inside the shared group feed and clarified message view.

### Implementation Snapshot

The implementation consists of:

* `src/interface.html`
* `src/style.css`
* `src/logic.js`

The extension adds:

* Priority selection controls during message creation
* Priority badges for shared messages
* Priority badges for clarified messages
* Additional state management for message priority

---

## Design Rationale

The original purpose of the Fellowship Companion is to support communication alignment among group members.

Priority Assessment strengthens this purpose because not all messages have the same urgency. By allowing users to assign a priority level, important information becomes easier to identify and process.

The new capability integrates naturally with the existing workflow:

1. A user creates a message.
2. The user selects a priority level.
3. The message is shared with the group.
4. Group members can mark the message as understood or request clarification.
5. Clarified messages preserve their original priority level.

This ensures that important information remains visible throughout the complete communication process.

The system intentionally does not perform automatic prioritisation, notification delivery, or escalation. Priority is assigned manually by the sender to keep the implementation simple and aligned with the scope of the project.

---

## AI Assistance

AI assistance was used to:

* Generate implementation ideas for the Priority Assessment capability.
* Refine the system flow and identify integration points.
* Review the HTML, CSS, and JavaScript implementation.
* Support the creation of documentation and reflection text.
* Validate consistency between the system flow, wireframe, and implementation.

All design decisions, integration choices, and final implementation details were reviewed and adjusted manually.

---

## Lessons Learned

This chapter demonstrated how new functionality can be integrated into an existing system without changing its core purpose.

The introduction of Priority Assessment showed that even a relatively small capability can affect multiple parts of a system, including user interaction, system state, interface design, and documentation.

Another important lesson was the value of maintaining consistency between the system flow, wireframe, and implementation. Each artifact should represent the same behaviour to avoid misunderstandings during development and review.

Overall, the extension improved the usefulness of the Fellowship Companion while preserving its original focus on shared communication and information alignment.

