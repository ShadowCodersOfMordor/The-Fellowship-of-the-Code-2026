# Chapter V – Integration & Extension

## Summary

In this chapter, the Fellowship Companion was extended with an additional system capability called **Priority Assessment**. The goal of this extension was to help users identify important messages more quickly within the shared communication workflow. The new capability was integrated into the existing message creation, review, clarification, and understanding process.

The chapter also demonstrates how the different parts of the system connect through an integrated system flow, an updated wireframe, and an implementation snapshot.

---

## Artifact

### Selected Capability

**Priority Assessment**

Users can now classify a message as either **Normal Priority** or **High Priority** before publishing it to the shared group feed. This helps group members identify urgent information and focus on important messages first.

---

### System Flow

The integrated system flow is available here:

[System Flow](src/flowchart-system.mermaid.md)

The flow shows how message creation, priority assessment, clarification requests, clarification publishing, and message understanding interact within a single workflow.

---

### Wireframe

The updated wireframe is available here:

[System Wireframe](src/wireframe-system.png)

The wireframe introduces a priority selection during message creation and displays the selected priority within the shared group feed and clarified message view.

---

### Implementation Snapshot

Implementation files:

- [HTML Interface](src/interface.html)
- [CSS Styling](src/style.css)
- [JavaScript Logic](src/logic.js)

The implementation extends the original Fellowship Companion by introducing Priority Assessment as an additional capability within the communication process.

---

## Design Rationale

The original purpose of the Fellowship Companion is to support communication alignment among group members.

Priority Assessment strengthens this purpose because not all messages have the same urgency. By allowing users to assign a priority level, important information becomes easier to identify and process.

The new capability integrates naturally with the existing workflow:

1. A user creates a message.
2. A priority level is selected.
3. The message is shared with the group.
4. Group members can mark the message as understood or request clarification.
5. Clarified messages preserve their assigned priority.

This ensures that important information remains visible throughout the complete communication process.

The system intentionally does not implement automatic prioritisation, notifications, escalation rules, or advanced filtering. Priority is assigned manually by the sender to keep the implementation lightweight and aligned with the project scope.

---

## AI Assistance

AI assistance was used to:

- Generate implementation ideas for the Priority Assessment capability.
- Refine the integrated system flow.
- Review and improve the HTML, CSS, and JavaScript implementation.
- Support the creation of documentation and reflection text.
- Validate consistency between the system flow, wireframe, and implementation.

All final design decisions and implementation choices were reviewed and adapted manually.

---

## Lessons Learned

This chapter demonstrated how new functionality can be integrated into an existing system without changing its core purpose.

The introduction of Priority Assessment showed that even a relatively small capability can influence multiple aspects of a software system, including user interaction, interface design, state management, and documentation.

Another important lesson was the need for consistency between system flow, wireframe, and implementation. Each artifact should represent the same behaviour to ensure a coherent system design.

Overall, the extension improved the usefulness of the Fellowship Companion while preserving its original goal of supporting shared communication and information alignment.
