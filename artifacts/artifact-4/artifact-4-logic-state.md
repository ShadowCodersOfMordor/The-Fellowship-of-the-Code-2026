# Artifact 4: Logic and State

## Selected System Capability

The implemented system capability is **Information Clarification and Alignment**.

The interface allows Fellowship members to create and share group messages, review received information, mark messages as understood, or request clarification when information is unclear. If clarification is requested, the system routes the unclear message back to the original sender. The sender can then publish a clarified version, which becomes visible to the group.

## State and Logic

This capability depends on several explicit interface states:

- **Empty Feed**: No message has been sent yet.
- **Message Shared**: A user has published a message to the shared group feed.
- **Message Understood**: A received message has been marked as understood.
- **Needs Clarification**: A user has requested clarification because the message is unclear.
- **Clarification Missing**: The sender tried to publish a clarification without entering text.
- **Clarified Message Published**: The original sender has published a clearer version of the message.
- **Clarified Message Understood**: The clarified message has been accepted as understandable.

The JavaScript code modifies these states based on user interaction. For example, sending a message changes the state from **Empty Feed** to **Message Shared**. Requesting clarification changes the state to **Needs Clarification**. Publishing a clarified message changes the state to **Clarified Message Published**.

## Why This Capability Matters

This capability matters because the Fellowship operates in uncertain and potentially risky situations where unclear information can lead to wrong decisions. A message that seems clear to one member may be interpreted differently by another member.

By making uncertainty visible and allowing users to request clarification, the system prevents the group from acting on unstable or misunderstood information. The clarification process supports shared understanding, reduces ambiguity, and helps the Fellowship make better coordinated decisions at this stage of the journey.

## Implementation Files

The implementation is stored in the following files:

- [interface.html](./interface.html)
- [style.css](./style.css)
- [logic.js](./logic.js)
