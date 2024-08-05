"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _TimePicker = _interopRequireDefault(require("./TimePicker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// برای استفاده از matcherهای اضافی
// فرض می‌کنیم فایل TimePicker در همان پوشه است

// تست برای اطمینان از رندر صحیح کامپوننت
test("renders TimePicker component", () => {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
    prevPage: "/",
    nextPage: "/about",
    sendDataToParent: () => {}
  }));

  // بررسی وجود عنوان
  expect(_react2.screen.getByText("انتخاب زمان")).toBeInTheDocument();

  // بررسی وجود دکمه‌ها
  expect(_react2.screen.getByText("تایید")).toBeInTheDocument();
  expect(_react2.screen.getByText("لغو")).toBeInTheDocument();
});

// تست برای بررسی عملکرد کلیک بر روی ساعت
test("selects an hour on click", () => {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
    prevPage: "/",
    nextPage: "/about",
    sendDataToParent: () => {}
  }));

  // شبیه‌سازی کلیک بر روی ساعت
  const hourElement = _react2.screen.getAllByText("00")[0]; // انتخاب اولین ساعت "00"
  _react2.fireEvent.click(hourElement);

  // بررسی اینکه ساعت فعال تغییر کرده است
  expect(hourElement).toHaveClass("active");
});

// تست برای بررسی ارسال داده‌ها به والد
test("calls sendDataToParent with correct data on confirm", () => {
  const mockSendDataToParent = jest.fn();
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
    prevPage: "/",
    nextPage: "/about",
    sendDataToParent: mockSendDataToParent
  }));

  // شبیه‌سازی انتخاب ساعت و دقیقه
  const hourElement = _react2.screen.getAllByText("01")[0];
  const minuteElement = _react2.screen.getAllByText("15")[0];
  _react2.fireEvent.click(hourElement);
  _react2.fireEvent.click(minuteElement);

  // شبیه‌سازی کلیک بر روی دکمه تایید
  const confirmButton = _react2.screen.getByText("تایید");
  _react2.fireEvent.click(confirmButton);

  // بررسی اینکه تابع ارسال داده‌ها با داده‌های صحیح فراخوانی شده است
  expect(mockSendDataToParent).toHaveBeenCalledWith({
    hour: "01",
    minute: "15"
  });
});