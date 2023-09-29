import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef } from "react";
import { COLORS } from "../../../configs/Colors";
import { spacing, colors } from "../../../utils/constants";

export interface DividerProps {
  style?: any;
  enabledSpacing?: boolean;
}

const Divider = forwardRef(
  ({ style, enabledSpacing = true }: DividerProps, ref) => {
    return (
      <View
        ref={ref}
        style={[
          {
            height: 1,
            backgroundColor: colors.lightGray,
            marginHorizontal: enabledSpacing ? spacing.l : 0,
          },
          style,
        ]}
      />
    );
  }
);

export default Divider;
