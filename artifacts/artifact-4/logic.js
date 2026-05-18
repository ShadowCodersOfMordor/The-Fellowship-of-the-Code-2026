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

  updateStatus("Needs Clarification");
}

function publishClarification(clarification) {
  state.clarifiedMessage = clarification;
  state.currentMessage = clarification;
  state.feedStatus = "clarified";

  messageText.textContent = clarification;

  messageBadge.textContent = "Clarified";
  messageBadge.className = "badge clarified";

  clarifiedSection.classList.remove("hidden");
  clarifiedMessageText.textContent = clarification;

  clarificationSection.classList.add("hidden");
  clarificationInput.value = "";

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
  clarificationSection.classList.add("hidden");
  clarifiedSection.classList.add("hidden");
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
  markAsUnderstood();
  updateStatus("Clarified Message Understood");
});
