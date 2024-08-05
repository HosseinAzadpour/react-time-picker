"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TimePicker = _interopRequireDefault(require("./components/TimePicker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  function handleDataFromChildDelete(data) {
    console.log(data);
    localStorage.setItem("time-picker-hour", data.hour);
    localStorage.setItem("time-picker-minute", data.minute);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
    prevPage: "/",
    nextPage: "",
    sendDataToParent: handleDataFromChildDelete
  }));
}
var _default = exports.default = App;