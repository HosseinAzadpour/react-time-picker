import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// برای استفاده از matcherهای اضافی
import TimePicker from "./TimePicker"; // فرض می‌کنیم فایل TimePicker در همان پوشه است

// تست برای اطمینان از رندر صحیح کامپوننت
test("renders TimePicker component", () => {
  render(
    <TimePicker prevPage='/' nextPage='/about' sendDataToParent={() => {}} />
  );

  // بررسی وجود عنوان
  expect(screen.getByText("انتخاب زمان")).toBeInTheDocument();

  // بررسی وجود دکمه‌ها
  expect(screen.getByText("تایید")).toBeInTheDocument();
  expect(screen.getByText("لغو")).toBeInTheDocument();
});

// تست برای بررسی عملکرد کلیک بر روی ساعت
test("selects an hour on click", () => {
  render(
    <TimePicker prevPage='/' nextPage='/about' sendDataToParent={() => {}} />
  );

  // شبیه‌سازی کلیک بر روی ساعت
  const hourElement = screen.getAllByText("00")[0]; // انتخاب اولین ساعت "00"
  fireEvent.click(hourElement);

  // بررسی اینکه ساعت فعال تغییر کرده است
  expect(hourElement).toHaveClass("active");
});

// تست برای بررسی ارسال داده‌ها به والد
test("calls sendDataToParent with correct data on confirm", () => {
  const mockSendDataToParent = jest.fn();

  render(
    <TimePicker
      prevPage='/'
      nextPage='/about'
      sendDataToParent={mockSendDataToParent}
    />
  );

  // شبیه‌سازی انتخاب ساعت و دقیقه
  const hourElement = screen.getAllByText("01")[0];
  const minuteElement = screen.getAllByText("15")[0];
  fireEvent.click(hourElement);
  fireEvent.click(minuteElement);

  // شبیه‌سازی کلیک بر روی دکمه تایید
  const confirmButton = screen.getByText("تایید");
  fireEvent.click(confirmButton);

  // بررسی اینکه تابع ارسال داده‌ها با داده‌های صحیح فراخوانی شده است
  expect(mockSendDataToParent).toHaveBeenCalledWith({
    hour: "01",
    minute: "15",
  });
});
