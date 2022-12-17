chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type == "checkboxState") {
    setDesignMode(message.value);
  }

  if (message.type == "getDesignMode") {
    sendResponse(getDesignMode());
  }
});

document.addEventListener("keydown", (event) => {
  var code = event.code;
  if (code === "Alt") {
    // Do nothing.
    return;
  }
  if (event.altKey) {
    if (event.key == "q") {
      setDesignMode(!getDesignMode());
    }
  }
});

function getDesignMode() {
  let designMode = document.designMode;
  if (designMode == "on") return true;
  return false;
}

function setDesignMode(truth) {
  document.designMode = truth ? "on" : "off";
}
