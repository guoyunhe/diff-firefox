var button = require('sdk/ui/button/toggle');
var panel = require("sdk/panel");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var diffButton = button.ToggleButton({
  id: "diff-button",
  label: "DIFF",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var diffPanel = panel.Panel({
  contentURL: self.data.url("diff-panel/diff-panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    diffPanel.show({
      position: diffButton
    });
  }
}

function handleHide() {
  diffButton.state('window', {checked: false});
}