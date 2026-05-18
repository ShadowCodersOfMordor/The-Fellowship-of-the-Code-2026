# Reading the Runes – Code Analysis

## 1. What the code is supposed to do

The mini-application is a small “Hobbit Rations Tracker”.

It should show how many rations are available. The user can type in an amount and then either add rations or eat rations. After each action, the displayed status should update.

The initial amount is supposed to be 10 rations.

---

## 2. Identified Issues

### Issue 1: Rations are stored as text instead of a number

**Where it occurs:**

`let rations = "10";`

and also here:

`const value = amountInput.value;`

**What the code intends to do:**

The code wants to calculate with numbers. For example, if the user adds 5 rations, the result should be 15.

**What actually happens instead:**

Because `"10"` and the input value are strings, JavaScript treats the `+` operator as text joining instead of real addition.

For example:

`"10" + "5" = "105"`

So instead of increasing the rations correctly, the program creates an incorrect value.

**Why it matters:**

This directly affects the user experience because the displayed ration count becomes wrong. In a larger system, this could cause serious logic errors because later calculations would be based on incorrect data.

---

### Issue 2: The status is updated before the eating action is finished

**Where it occurs:**

```js
eatButton.addEventListener("click", () => {
  const value = amountInput.value;

  updateStatus();

  if (rations - value < 0) {
    alert("Not enough rations!");
  } else {
    rations = rations - value;
  }
});
```

**What the code intends to do:**

The code should first check if enough rations are available. If enough rations are available, it should subtract the amount and then update the displayed status.

**What actually happens instead:**

The status is updated before the program checks or changes the ration amount. This means the user interface can show old or inconsistent information.

For example, if the user eats 3 rations, the internal value may change, but the displayed text may still show the old amount until another action happens.

**Why it matters:**

The user may not immediately see the correct result after clicking “Eat Rations”. This makes the application feel unreliable. In a larger system, updating the user interface before validating or changing data could lead to wrong information being shown to users.

---

### Issue 3: The add and eat buttons use different logic order

**Where it occurs:**

In the add button, the code changes the rations first and then updates the status:

```js
rations = rations + value;
updateStatus();
```

But in the eat button, the status is updated before the validation and subtraction:

```js
updateStatus();

if (rations - value < 0) {
  alert("Not enough rations!");
} else {
  rations = rations - value;
}
```

**What the code intends to do:**

Both buttons should follow the same clear order:

1. Read the input
2. Validate the input
3. Update the data
4. Update the user interface

**What actually happens instead:**

The two buttons follow different logic orders. This makes the code harder to understand and easier to break later.

**Why it matters:**

Inconsistent logic can cause hidden bugs. If another developer joins the project, they may misunderstand how the application state is supposed to work. A clear and consistent structure makes the code easier to maintain.

---

## 3. Why these issues matter overall

These problems are important because the application may look simple, but it already shows typical logic mistakes that can also happen in larger projects.

The first issue affects the actual data. If numbers are accidentally stored or handled as text, calculations can become wrong without causing a syntax error. This is dangerous because the program still runs, but the result is incorrect.

The second issue affects the user interface. If the display is updated before the data is actually changed, the user may see outdated information. This makes the application confusing and less trustworthy.

The third issue affects the structure of the code. If similar actions follow different logic orders, the code becomes harder to understand, test, and maintain.

---

## 4. Possible Fixes

A better version would store the ration amount as a number, convert the input value to a number, and update the status only after the data has changed.

Example:

```js
let rations = 10;

function updateStatus() {
  statusText.innerText = "Rations available: " + rations;
}

addButton.addEventListener("click", () => {
  const value = Number(amountInput.value);
  rations = rations + value;
  updateStatus();
});

eatButton.addEventListener("click", () => {
  const value = Number(amountInput.value);

  if (rations - value < 0) {
    alert("Not enough rations!");
  } else {
    rations = rations - value;
    updateStatus();
  }
});
```

---
## 5. AI Assistance Reflection

We used AI to help us understand the code and identify logic problems.

It was helpful because it explained why the code runs without syntax errors but still behaves incorrectly. The most helpful part was the explanation that JavaScript input values are often treated as strings. This helped us understand why adding rations could produce a result like `105` instead of `15`.

However, AI assistance was not enough on its own. We still had to look at the code ourselves and decide which issues were actually important for the assignment. The main focus was not only fixing the code, but explaining what was wrong, why it matters, and what changed.

We also had to decide how detailed the explanation should be. The assignment asks for understanding and reasoning, not only for a corrected version of the code. Therefore, we focused on explaining the problems in the logic and the possible effect on the user experience.
