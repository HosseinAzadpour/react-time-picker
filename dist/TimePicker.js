"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./TimePicker.css");
var _ArrowBackIosRounded = _interopRequireDefault(require("@mui/icons-material/ArrowBackIosRounded"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TimePicker = _ref => {
  let {
    sendDataToParent,
    prevPage,
    nextPage
  } = _ref;
  var minuteEl = (0, _react.useRef)();
  var minuteSelector = (0, _react.useRef)();
  var hourEl = (0, _react.useRef)();
  var hourSelector = (0, _react.useRef)();
  var [activeHour, setActiveHour] = (0, _react.useState)();
  var activeHourIndx = 59;
  var activeMinuteIndx = 299;
  var [activeMinute, setActiveMinute] = (0, _react.useState)();
  var Hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00"];
  var Minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
  (0, _react.useEffect)(() => {
    hourEl.current.addEventListener("scroll", () => {
      var hours = document.querySelectorAll("#hour");
      for (var i = 0; i < hours.length; i++) {
        if (hours[i].getBoundingClientRect().bottom > hourSelector.current.getBoundingClientRect().bottom && hours[i].getBoundingClientRect().top < hourSelector.current.getBoundingClientRect().top) {
          setActiveHour(Hours[i]);
        }
      }
    });
    minuteEl.current.addEventListener("scroll", () => {
      var minutes = document.querySelectorAll("#minute");
      for (var i = 0; i < minutes.length; i++) {
        if (minutes[i].getBoundingClientRect().bottom > minuteSelector.current.getBoundingClientRect().bottom && minutes[i].getBoundingClientRect().top < minuteSelector.current.getBoundingClientRect().top) {
          setActiveMinute(Minutes[i]);
        }
      }
    });
  });
  (0, _react.useEffect)(() => {
    hourEl.current.scrollTo({
      top: document.querySelectorAll("#hour")[activeHourIndx].offsetTop,
      behavior: "smooth"
    });
    minuteEl.current.scrollTo({
      top: document.querySelectorAll("#minute")[activeMinuteIndx].offsetTop,
      behavior: "smooth"
    });
  }, [document.readyState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: `${prevPage}`
  }, /*#__PURE__*/_react.default.createElement(_ArrowBackIosRounded.default, {
    className: "backIcon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "timePicker"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "addressSection"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0645\u0627\u0646")), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u062F\u0642\u06CC\u0642\u0647"), /*#__PURE__*/_react.default.createElement("div", {
    className: "timerContainer",
    ref: minuteEl
  }, Minutes.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("h4", {
      key: `minuteTimePicker-${index}`,
      id: "minute",
      className: activeMinute == item ? "active" : "",
      onClick: () => {
        setActiveMinute(item);
      }
    }, item);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hourSelector",
    ref: minuteSelector
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0633\u0627\u0639\u062A"), /*#__PURE__*/_react.default.createElement("div", {
    className: "timerContainer",
    ref: hourEl
  }, Hours.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("h4", {
      key: `hourTimePicker-${index}`,
      id: "hour",
      className: activeHour == item ? "active" : "",
      onClick: () => {
        setActiveHour(item);
      }
    }, item);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hourSelector",
    ref: hourSelector
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `${nextPage}`,
    onClick: () => {
      sendDataToParent({
        hour: activeHour,
        minute: activeMinute
      });
    }
  }, "\u062A\u0627\u06CC\u06CC\u062F"), /*#__PURE__*/_react.default.createElement("a", {
    href: `${prevPage}`
  }, "\u0644\u063A\u0648")));
};
var _default = exports.default = TimePicker;