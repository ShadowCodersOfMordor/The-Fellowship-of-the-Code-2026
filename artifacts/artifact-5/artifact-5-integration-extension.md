# Chapter V – Integration & Extension

## Summary

In this chapter, the Fellowship Companion was extended with an additional system capability called **Priority Assessment**. The goal of this extension was to help users identify important messages more quickly within the shared communication workflow. The new capability was integrated into the existing message creation, review, clarification, and understanding process.

The system was also extended with the external JavaScript library **Moment.js**, which is used to display dynamic message timestamps. This makes the communication more meaningful because users can understand when information was created or clarified.

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

[System Wireframe](src/wireframe.png)

The wireframe introduces a priority selection during message creation, displays the selected priority within the shared group feed, and shows timestamps for shared and clarified messages.

---

### Implementation Snapshot

Implementation files:

- [HTML Interface](src/interface.html)
- [CSS Styling](src/style.css)
- [JavaScript Logic](src/logic.js)

The implementation extends the original Fellowship Companion by introducing Priority Assessment as an additional capability within the communication process.

The implementation also includes Moment.js as an external library. Moment.js is used to generate readable timestamps for messages and clarified updates.

---

## Meaningful Extension

The meaningful extension is the integration of the external JavaScript library **Moment.js**.

Moment.js is included in the HTML file before the project’s own JavaScript file:

```html
<script src="https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js"></script>
<script src="logic.js"></script>
```

The JavaScript logic uses Moment.js to create the current message time:

```javascript
function getCurrentTime() {
  return moment().format("HH:mm");
}
```

This affects the meaning of the system because the time of a message helps users evaluate how recent and relevant information is. In the context of the Fellowship, a warning about danger or movement may become less reliable over time.

---

## Design Rationale

The original purpose of the Fellowship Companion is to support communication alignment among group members.

Priority Assessment strengthens this purpose because not all messages have the same urgency. By allowing users to assign a priority level, important information becomes easier to identify and process.

The timestamp extension also supports the original system intent. Information in uncertain environments is time-sensitive. A message about danger, movement, or route safety may be useful when it is recent, but less reliable later.

The new capability integrates naturally with the existing workflow:

1. A user creates a message.
2. A priority level is selected.
3. A timestamp is created using Moment.js.
4. The message is shared with the group.
5. Group members can mark the message as understood or request clarification.
6. Clarified messages preserve their assigned priority and receive an updated timestamp.

This ensures that important and time-sensitive information remains visible throughout the communication process.

The system intentionally does not implement automatic prioritisation, notifications, escalation rules, advanced filtering, persistent storage, or real-time multi-user communication. Priority is assigned manually by the sender, and timestamps are generated locally in the browser.

---

## AI Assistance

AI assistance was used to:

- Generate implementation ideas for the Priority Assessment capability.
- Refine the integrated system flow.
- Review and improve the HTML, CSS, and JavaScript implementation.
- Identify Moment.js as a simple external library for meaningful timestamps.
- Support the creation of documentation and reflection text.
- Validate consistency between the system flow, wireframe, and implementation.

All final design decisions and implementation choices were reviewed and adapted manually.

---

## Lessons Learned

This chapter demonstrated how new functionality can be integrated into an existing system without changing its core purpose.

The introduction of Priority Assessment showed that even a relatively small capability can influence multiple aspects of a software system, including user interaction, interface design, state management, and documentation.

The use of Moment.js showed how an external library can extend the meaning of a system without adding unnecessary complexity. The system now touches something outside its own handwritten code while still remaining understandable and lightweight.

Another important lesson was the need for consistency between system flow, wireframe, and implementation. Each artifact should represent the same behaviour to ensure a coherent system design.

Overall, the extension improved the usefulness of the Fellowship Companion while preserving its original goal of supporting shared communication and information alignment.
