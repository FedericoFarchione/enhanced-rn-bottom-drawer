declare module "enhanced-rn-bottom-drawer" {
  import { ColorValue, ViewProps } from "react-native";

  export interface BottomDrawerProps extends ViewProps {
    isVisible: boolean;
    closeAction: () => void;
    openDuration?: number;
    closeDuration?: number;
    minHeight?: number;
    maxHeight?: number;
    notchBar?: boolean;
    notchColor?: ColorValue;
    backGroundColor?: ColorValue;
  }
}
