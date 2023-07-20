# rn-bottom-drawer

A react-native bottom drawer component

## Installation

```sh
npm install rn-bottom-drawer
```

or install with yarn

```sh
yarn add rn-bottom-drawer
```

## Usage

```js
import { BottomDrawer } from "enhanced-rn-bottom-drawer";

<BottomDrawer isVisible={true} closeAction={() => {
    */insert your action to close the drawer */
    }}>

  {children}

</BottomDrawer>;
```

## Props

| Props           | Type       | Default           | Description                           |
| --------------- | ---------- | ----------------- | ------------------------------------- |
| isVisible       | boolean    | REQUIRED          | none                                  |
| closeAction     | void       | REQUIRED          | none                                  |
| openDuration    | number     | 500               | time of the animation to open drawer  |
| closeDuration   | number     | 500               | time of the animation to close drawer |
| minHeight       | number     | 300               | minimum height of the drawer          |
| maxHeight       | number     | ScreenHeight - 75 | maximum height of the drawer          |
| notchBar        | boolean    | true              | notch-bar on the header of the drawer |
| notchColor      | ColorValue | #0000             | color of the notch bar                |
| backGroundColor | ColorValue | #0000             | background color of the drawer        |
|                 |            |                   |                                       |

## License

MIT

---
