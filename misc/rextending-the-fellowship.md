# Extending the Fellowship

## Task 1 – Automation: Fellowship Scout Report

For this task, we created a small automation using Microsoft Power Automate.
The goal was to explore how software systems can react automatically to events without requiring traditional programming.

Scouts travelling across Middle-earth are responsible for reporting sightings of members of the Fellowship. To submit a report, scouts use a Microsoft Form called **Fellowship Scout Report**.

### Form Fields

The form collects the following information:

* Scout Name
* Fellowship Member
* Last Known Location
* Threat Level
* Scout Report

### Example Report

* **Scout:** Ranger of the North
* **Fellowship Member:** Legolas
* **Last Known Location:** Northern Mountains
* **Threat Level:** Medium
* **Scout Report:** Legolas was seen scouting ahead across the mountain tops.

### Workflow

The automation follows a simple trigger-response pattern:

1. A scout submits a Fellowship Scout Report using Microsoft Forms.
2. Microsoft Forms stores the submitted response.
3. Power Automate detects that a new response has been submitted.
4. The workflow retrieves all information from the form.
5. An email containing a quest log entry is generated and sent automatically.

### Trigger

**Trigger:** A new Microsoft Forms response is submitted.

### Outcome

**Outcome:** A quest log email containing the submitted report is automatically generated and distributed.

This simulates how scouts could provide intelligence updates to important figures such as Gandalf or Elrond, allowing information to be shared quickly and consistently throughout the Fellowship's journey.

### Technologies Used

* Microsoft Forms
* Microsoft Power Automate
* Outlook Email

### Reflection

This exercise provided hands-on experience with low-code automation tools. 
It demonstrated how existing services can be connected to create useful workflows without writing custom code.

The solution shows how a simple form submission can trigger a series of automated actions, transforming user input into structured information that is automatically distributed to other parties. This highlights the power of modern automation platforms and their ability to rapidly create functional systems with minimal development effort.


### Screenshots

#### Microsoft Form
<img width="1122" height="767" alt="image" src="https://github.com/user-attachments/assets/6872764d-5f03-443d-ac1d-b0559d2242b9" />
<img width="1097" height="526" alt="image" src="https://github.com/user-attachments/assets/64b6eb25-fb03-459d-a344-53ba5e190315" />



#### Power Automate Flow
<img width="1161" height="550" alt="image" src="https://github.com/user-attachments/assets/c9fe1785-1e36-4e51-9fd6-4a28d8b60dca" />




#### Generated Quest Log Email
<img width="882" height="477" alt="image" src="https://github.com/user-attachments/assets/686a428d-9d83-4c19-92e8-dc84bd91deb3" />

# Task 2 – The Ring Bearer

## Description

For the low-code application task, we created a small game using Microsoft MakeCode Arcade called **The Ring Bearer**.

The game is inspired by *The Lord of the Rings*. The player takes control of Frodo, whose objective is to carry the One Ring to Mount Doom and destroy it. The game takes place in a simplified version of Mordor, represented by a dark volcanic environment.

## Gameplay

The player controls Frodo using the keyboard arrow keys. A Mount Doom sprite is placed on the map and serves as the final objective.

An Orc enemy is also present on the map. The Orc continuously follows Frodo and acts as an obstacle. The player must avoid the Orc while navigating toward Mount Doom.

The game contains two possible outcomes:

### Victory Condition

* Frodo reaches Mount Doom.
* The Ring is destroyed.
* The game ends with a victory screen.

### Failure Condition

* The Orc touches Frodo.
* The Ring is captured.
* The game ends with a game over screen.

## Implementation

The game was created using the visual block-based editor provided by Microsoft MakeCode Arcade.

The following components were implemented:

* A player character representing Frodo.
* Player movement using keyboard controls.
* A goal object representing Mount Doom.
* An Orc enemy that follows the player.
* Collision detection between game objects.
* A win condition when Frodo reaches Mount Doom.
* A lose condition when Frodo is caught by the Orc.

The game logic was implemented using MakeCode Arcade blocks rather than traditional programming.

## Technologies Used

* Microsoft MakeCode Arcade
* Block-based visual programming

## Reflection

This exercise provided practical experience with low-code development tools and demonstrated how interactive applications can be created with minimal setup and very little traditional coding.

The project showed how sprites, player controls, events, collision detection, and simple game logic can be combined to create a complete gameplay loop. While the game is intentionally simple, it successfully demonstrates the core concepts of game development and event-driven programming in a visual environment.

## Game Link

https://arcade.makecode.com/S13350-03113-86524-77378



