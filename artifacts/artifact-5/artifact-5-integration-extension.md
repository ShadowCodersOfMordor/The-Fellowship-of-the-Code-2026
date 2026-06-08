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

[System Wireframe](src/wireframe-system.png)

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
