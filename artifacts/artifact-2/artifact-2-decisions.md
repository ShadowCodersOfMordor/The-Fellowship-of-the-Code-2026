<>
## The Fellowship Companion

# Selected System Capability
## Information Clarification and Alignment
# Capability Description
The system supports Fellowship members in both sharing information and reviewing received group messages.
Users can create and publish messages to the shared group feed, while other members can acknowledge the information or request clarification if parts of the message are unclear.
Instead of resolving ambiguity automatically, the system routes clarification requests back to the original sender.
The sender can then provide a clearer version of the information, which becomes visible to the group as an updated message.
The capability focuses on improving shared understanding and reducing misunderstandings during communication under uncertain conditions.

# Why this capability?
This capability directly addresses one of the Fellowship’s core risks: acting on conflicting or misunderstood information.
In uncertain and hostile environments, even small misinterpretations such as route safety or enemy sightings can lead to severe consequences.
Structuring how ambiguity is handled ensures that the group does not act on unstable or misaligned understanding.

# Why is it meaningful at this stage of the journey?
At the early-to-mid journey stage, the Fellowship is no longer operating with shared initial knowledge from Rivendell.
Information becomes fragmented, and interpretations diverge.
Before making critical decisions, the group must align on what is actually true.
This capability ensures that misunderstandings are surfaced and clarified explicitly before action is taken.

# Flow Design
The flow models how information is created, shared, reviewed, and clarified within the Fellowship.
It highlights key user actions such as creating messages, reviewing received information, requesting clarification, and publishing clarified updates back to the shared group feed.
The flow ensures that communication remains structured while keeping ambiguity visible and manageable.
Full flow: see `artifacts/artifact-2/src/decisions.mermaid.md`

# Interface Design (Wireframe)
The wireframe represents a structured group communication interface with four primary interaction states.
## 1. Message Creation
- Allows a Fellowship member to create and publish a message
- Includes message content and sender information
- Publishes the message to the shared group feed
## 2. Shared Group Feed
- Displays received messages to all Fellowship members
- Shows message content, sender, and timestamp
- Allows users to acknowledge the message or request clarification
## 3. Clarification State (Needs Clarification)
- Message is marked as needing clarification
- Shows who requested clarification
- Routes the clarification request back to the original sender
- Indicates that the information is currently unstable
## 4. Clarified State (Resolved Message)
- Displays the updated or clarified message from the original sender
- Indicates that the clarification has been addressed
- Returns the message to a stable shared state
Wireframe: see `/artifacts/artifact-2/src/decisions.wireframe.png`

# Design Rationale
The design structures how communication, ambiguity, and clarification are handled within a distributed group operating under uncertainty.
Instead of allowing unclear information to persist implicitly, the system introduces explicit communication states that make uncertainty visible before action is taken.
The interface supports both active communication through message creation and passive participation through message review and clarification handling.
Requesting clarification does not attempt to automatically resolve ambiguity. Instead, it reclassifies the information as unstable and routes the issue back to the original sender for clarification.
This is critical because, in the given environment, the primary risk is not lack of information but acting on incomplete or inconsistently understood communication.
By structuring clarification requests and updates visibly within the shared feed, the system reduces hidden misunderstandings and ensures that communication remains observable at the group level.
The system does not determine correctness or make decisions automatically. Responsibility for clarification and final interpretation remains with the Fellowship members.
Several elements are intentionally excluded to maintain reliability under constraints:
- No automated conflict resolution or prioritization
- No voting or ranking systems
- No complex discussion layers
The design assumes intermittent synchronization and limited attention.
Therefore, interactions are intentionally minimized to simple actions such as publishing messages, acknowledging information, and requesting clarification.
Overall, the system improves coordination not by increasing information volume, but by improving the visibility and structure of communication under uncertain conditions.
