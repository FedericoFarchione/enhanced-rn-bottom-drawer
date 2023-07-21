# enhanced-rn-bottom-drawer

A react-native bottom drawer component

"To all the people who sucks in front-end" cit.

## Installation

```sh
npm install enhanced-rn-bottom-drawer
```

or install with yarn

```sh
yarn add enhanced-rn-bottom-drawer
```

## Usage

```js
import { BottomDrawer } from "enhanced-rn-bottom-drawer";

type Props extends ViewProps;

export const DrawerContainer: React.FC<Props> = ({children})=> {
  return (
    <BottomDrawer
      isVisible={/* visibleProp from redux for example */}
      closeAction={()=> {/* close action from redux for example */}}
    >
      {children}
      {children}
      {children}
    </BottomDrawer>
  )
}
```

## Import

```js
import { BottomDrawer } from "enhanced-rn-bottom-drawer";

type Props extends ViewProps;

export const App = ()=> {
return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <NavigationContainer theme={containerTheme}>
        <RootStack />
      </NavigationContainer>
      <DrawerContainer />
    </SafeAreaView>
  );
}
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

## License

MIT

---
