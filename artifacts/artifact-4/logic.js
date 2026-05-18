const state = {
  currentMessage: "",
  clarifiedMessage: "",
  feedStatus: "empty"
};

const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messageError = document.getElementById("messageError");

const feedEmpty = document.getElementById("feedEmpty");
const messageCard = document.getElementById("messageCard");
const messageText = document.getElementById("messageText");
const messageBadge = document.getElementById("messageBadge");

const understoodButton = document.getElementById("understoodButton");
const clarificationButton = document.getElementById("clarificationButton");

const clarificationSection = document.getElementById("clarificationSection");
const originalMessageText = document.getElementById("originalMessageText");
const clarificationForm = document.getElementById("clarificationForm");
const clarificationInput = document.getElementById("clarificationInput");
const clarificationError = document.getElementById("clarificationError");

const clarifiedSection = document.getElementById("clarifiedSection");
const clarifiedMessageText = document.getElementById("clarifiedMessageText");
const finalUnderstoodButton = document.getElementById("finalUnderstoodButton");
const finalClarificationButton = document.getElementById("finalClarificationButton");

const statusPill = document.getElementById("statusPill");

function updateStatus(text) {
  statusPill.textContent = `State: ${text}`;
}

function showSharedMessage(message) {
  feedEmpty.classList.add("hidden");
  messageCard.classList.remove("hidden");

  messageText.textContent = message;
  messageBadge.textContent = "Shared";
  messageBadge.className = "badge shared";

  clarificationSection.classList.add("hidden");
  clarifiedSection.classList.add("hidden");

  updateStatus("Message Shared");
}

function markAsUnderstood() {
  messageBadge.textContent = "Understood";
  messageBadge.className = "badge clarified";
  updateStatus("Message Understood");
}

function requestClarification() {
  clarificationSection.classList.remove("hidden");
  clarifiedSection.classList.add("hidden");

  originalMessageText.textContent = state.currentMessage;

  state.feedStatus = "needs clarification";

  messageBadge.textContent = "Needs Clarification";
  messageBadge.className = "badge waiting";

  messageCard.classList.remove("hidden");

  updateStatus("Needs Clarification");
}

function publishClarification(clarification) {
  state.clarifiedMessage = clarification;
  state.currentMessage = clarification;
  state.feedStatus = "clarified";

  clarifiedMessageText.textContent = clarification;

  clarificationSection.classList.add("hidden");
  clarificationInput.value = "";

  messageCard.classList.add("hidden");
  clarifiedSection.classList.remove("hidden");

  updateStatus("Clarified Message Published");
}

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = messageInput.value.trim();

  if (message === "") {
    messageError.textContent = "Please enter a message before sending it.";
    updateStatus("Message Missing");
    return;
  }

  messageError.textContent = "";

  state.currentMessage = message;
  state.clarifiedMessage = "";
  state.feedStatus = "shared";

  showSharedMessage(message);

  messageInput.value = "";
});

understoodButton.addEventListener("click", function () {
  if (state.currentMessage === "") {
    return;
  }

  markAsUnderstood();
});

clarificationButton.addEventListener("click", function () {
  if (state.currentMessage === "") {
    return;
  }

  requestClarification();
});

clarificationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const clarification = clarificationInput.value.trim();

  if (clarification === "") {
    clarificationError.textContent = "Please enter a clarification before publishing it.";
    updateStatus("Clarification Missing");
    return;
  }

  clarificationError.textContent = "";
  publishClarification(clarification);
});

finalUnderstoodButton.addEventListener("click", function () {
  updateStatus("Clarified Message Understood");
});

finalClarificationButton.addEventListener("click", function () {
  requestClarification();
});
