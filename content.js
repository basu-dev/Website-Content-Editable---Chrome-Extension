chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "checkboxState") {
    setDesignMode(message.value);
  }

  if (message.type == "getDesignMode") {
    sendResponse(getDesignMode());
  }
});

document.addEventListener("keydown", (event) => {
  const code = event.code;
  if (code === "Alt") return; // Do nothing.
  if (event.altKey && event.key == "q") setDesignMode(!getDesignMode());
});

function getDesignMode() {
  if (document.designMode == "on") return true;
  return false;
}

function setDesignMode(truth) {
  document.designMode = truth ? "on" : "off";
}
