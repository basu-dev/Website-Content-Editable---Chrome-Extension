document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", (e) => {
    sendMessage({ type: "checkboxState", value: e.target.checked });
  });

  sendMessage(
    {
      type: "getDesignMode",
    },
    function (checked) {
      checkbox.checked = checked;
    }
  );
});

function sendMessage(data, callback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data, callback);
  });
}
