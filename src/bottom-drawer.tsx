import { BottomDrawerProps } from "enhanced-rn-bottom-drawer";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
const { height } = Dimensions.get("window");

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  children,
  isVisible,
  closeAction,
  openDuration = 500,
  closeDuration = 500,
  minHeight = 300,
  maxHeight = height - 75,
  notchBar = true,
  notchColor,
  backGroundColor,
}) => {
  const animatedValue = useRef(new Animated.Value(height)).current;

  const openDrawer = useCallback(
    () =>
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: openDuration,
        useNativeDriver: true,
      }).start(),
    [animatedValue]
  );

  //function to close the drawer with animation
  const closeDrawer = useCallback(
    () =>
      Animated.timing(animatedValue, {
        toValue: height,
        duration: closeDuration,
        useNativeDriver: true,
      }).start(() => closeAction()),
    [animatedValue, height, closeAction]
  );

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 1) {
          Animated.event([null, { dy: animatedValue }])(event, gestureState);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const { moveY } = gestureState;
        if (height - moveY < 200) {
          closeDrawer();
        } else {
          openDrawer();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (isVisible) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [animatedValue, closeDrawer, isVisible, openDrawer]);

  const animatedStyle = {
    transform: [{ translateY: animatedValue }],
  } as Animated.AnimatedProps<ViewProps>;

  return (
    <Animated.View
      style={[
        animatedStyle,
        styles.drawerContent,
        { minHeight, maxHeight, backgroundColor: backGroundColor ?? "#ffff" },
      ]}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={styles.notchContainer}
      >
        {notchBar && (
          <View
            style={[
              styles.notchBar,
              { backgroundColor: notchColor ?? "#0000" },
            ]}
          />
        )}
      </Animated.View>
      {children}
    </Animated.View>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContent: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
  },
  notchContainer: {
    height: 40,
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  notchBar: {
    alignSelf: "center",
    width: "20%",
    height: 6,
    borderRadius: 100,
    top: 17,
  },
});
