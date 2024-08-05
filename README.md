# TimePicker

A bilingual (English/Persian) and responsive digital time picker library with customizable color options. Perfect for modern web applications requiring dynamic and stylish time selection.

## Table of Contents

- [TimePicker](#timepicker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Interactive Demo](#interactive-demo)
  - [Example](#example)
  - [props](#props)
  - [License](#license)
  - [Links](#links)
  - [Hashtags](#hashtags)

## Installation

You can install the package using npm or yarn:

```bash
npm install react-time-picker-digital
```

## Interactive Demo

Here is a screenshot of the `TimePicker` component:

![TimePicker Demo](https://github.com/HosseinAzadpour/react-time-picker-digital/blob/users/TimePickerFa.png)

## Example

Here is an example of how to use the TimePicker component in your React application:

```jsx

import React, { useState } from "react";
import { TimePicker } from "react-time-picker-digital";

function App() {
const [hour, setHour] = useState();
const [minute, setMinute] = useState();

function handleDataFromChild(data) {
console.log(data);
setHour(data.hour);
setMinute(data.minute);
}

return (

<div className='App'>
<TimePicker
prevPage={"/"}
nextPage={"/about"}
sendDataToParent={handleDataFromChild}
/>
<p>Selected Time: {hour}:{minute}</p>
</div>
);
}

export default App;
```

## props

Prop Type Default Description
sendDataToParent function Required Function to send the selected time to the parent.
prevPage string Required Link to the previous page.
nextPage string Required Link to the next page.

| Prop               | Type       | Default  | Description                                                                       |
| ------------------ | ---------- | -------- | --------------------------------------------------------------------------------- |
| `sendDataToParent` | `function` | Required | A callback function to send the selected hour and minute to the parent component. |
| `prevPage`         | `string`   | Required | The URL to navigate to when the back button is clicked.                           |
| `nextPage`         | `string`   | Required | The URL to navigate to when the confirm button is clicked.                        |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

https://github.com/HosseinAzadpour/react-time-picker-digital

## Hashtags

#React #TimePicker #Bilingual #ResponsiveDesign #OpenSource #MITLicense
