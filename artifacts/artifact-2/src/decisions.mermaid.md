```mermaid
flowchart TD

A[User receives message] --> B[User acknowledges message - Got it]

B --> C{Is the information clear?}

C -->|Yes| D[User acts based on shared understanding]
D --> Z[End]

C -->|No| E[User flags message as unclear]

E --> F[System marks message as Needs Clarification]
F --> G[System notifies all members]

G --> H[Members review message]

H --> I{Do members agree on interpretation?}

I -->|Yes| J[One member confirms interpretation]
J --> K[System updates message to Resolved]
K --> L[All members see clarified version]
L --> Z

I -->|No| M[Members submit different interpretations]
M --> N[System highlights conflict]

N --> O[Discussion or leader decision]
O --> P[Final interpretation selected]

P --> K
