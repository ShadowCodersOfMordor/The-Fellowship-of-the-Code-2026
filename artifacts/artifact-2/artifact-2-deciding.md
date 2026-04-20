<>
# Artifact 2 – Deciding

## The Fellowship Companion
----

## Selected System Capability
### Information Clarification and Alignment

## Capability Description
The system enables Fellowship members to identify, surface, and resolve unclear or conflicting information by marking messages for clarification, collecting structured interpretations, and converging on a shared understanding.

### Why this capability?
This capability directly addresses one of the Fellowship’s core risks: acting on conflicting or misunderstood information. In uncertain and hostile environments, even small misinterpretations (e.g., route safety, enemy sightings) can lead to severe consequences.

Structuring how ambiguity is handled ensures that the group does not act on unstable or misaligned understanding.

---

### Why is it meaningful at this stage of the journey?
At the early-to-mid journey stage, the Fellowship is no longer operating with shared initial knowledge from Rivendell. Information becomes fragmented, and interpretations diverge. Before making critical decisions, the group must align on what is actually true. This capability ensures that disagreements are surfaced and resolved explicitly.

## Flow Design

The flow models how unclear or conflicting information is handled by the Fellowship. It highlights key user decisions such as identifying unclear information, flagging it, contributing interpretations, and confirming a shared understanding.

Full flow: see `/artifacts/artifact-2/src/decisions.mermaid.md`

## Interface Design (Wireframe)

The wireframe represents a structured message interaction model with three primary states:

### 1. Default State (Shared Message)
- Displays message content, author, and timestamp  
- Provides a clear action to flag the message as unclear  

### 2. Clarification State (Active Ambiguity)
- Message is marked as needing clarification  
- Shows who flagged the issue  
- Displays multiple structured interpretations from members  
- Allows users to:
  - Add an interpretation  
  - Confirm a proposed interpretation  

### 3. Resolved State (Aligned Understanding)
- Displays the final, agreed interpretation  
- Indicates who confirmed the resolution  
- Removes ambiguity and returns the message to a stable state  

Wireframe: see `/artifacts/artifact-2/src/decisions.wireframe.png`

## Design Rationale
The design structures how ambiguity is surfaced, externalized, and resolved within a distributed group operating under uncertainty. Instead of allowing unclear information to persist implicitly, the system introduces an explicit state transition from shared information to contested information.

Flagging a message does not attempt to resolve ambiguity; it reclassifies the information as unstable. This is critical because, in the given environment, the primary risk is not lack of information but acting on unverified or inconsistently interpreted information.
By requiring interpretations to be submitted in a structured form, the system transforms individual, internal assumptions into visible, comparable artifacts. This reduces hidden divergence and ensures that disagreement is observable at the group level. The system does not evaluate correctness; it ensures that differences in interpretation are made explicit before action is taken.
 
The resolution step enforces convergence. A message cannot return to the “resolved” state without a single, shared interpretation being selected. This creates a clear transition from ambiguity to alignment, which supports coordinated action. Responsibility for resolution remains with the group (or a leader), preserving the constraint that the system does not replace decision-making authority.

Several elements are intentionally excluded to maintain reliability under constraints:

•	No automated conflict resolution or prioritization, as the system cannot verify truth in an environment with incomplete information
•	No free-form discussion layer, which would reintroduce unstructured communication and increase cognitive load
•	No ranking or voting mechanisms, which could create false signals of certainty without resolving underlying ambiguity

The design assumes intermittent synchronization and limited attention. Therefore, interactions are minimized to discrete actions (flag, interpret, confirm), each producing a persistent state change in the shared context.
Overall, the system improves coordination not by increasing information volume, but
by controlling the state and visibility of uncertainty, ensuring that the Fellowship acts only on information that has been explicitly aligned.
