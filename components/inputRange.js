import React from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, runOnJS, useAnimatedProps } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const WIDTH = Dimensions.get('window').width - 40;
const KNOBSIZE = 20;
const MAXWIDTH = WIDTH - KNOBSIZE / 2 + 6;

const InputRange = ({ min, max, steps, title, onvalueChange }) => {
  const xknob1 = useSharedValue(0);
  const scaleKnob1 = useSharedValue(1);
  const xknob2 = useSharedValue(MAXWIDTH);
  const scaleKnob2 = useSharedValue(1);

  const gestureHandler1 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = xknob1.value;
    },
    onActive: (event, ctx) => {
      scaleKnob1.value = 1.3;
      const newX = ctx.startX + event.translationX;
      xknob1.value = Math.max(0, Math.min(newX, xknob2.value - KNOBSIZE)); // Ensure knob1 stays within bounds
      
    },
    onEnd: () => {
      scaleKnob1.value = 1;
      runOnJS(onvalueChange)({
        min: `${Math.round((min + (xknob1.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
        max: `${Math.round((min + (xknob2.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
      });
    },
  });

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = xknob2.value;
    },
    onActive: (event, ctx) => {
      scaleKnob2.value = 1.3;
      const newX = ctx.startX + event.translationX;
      xknob2.value = Math.max(xknob1.value + KNOBSIZE, Math.min(newX, MAXWIDTH)); // Ensure knob2 stays within bounds
      
    },
    onEnd: () => {
      scaleKnob2.value = 1;
      runOnJS(onvalueChange)({
        min: `${Math.round((min + (xknob1.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
        max: `${Math.round((min + (xknob2.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
      });
    },
  });

  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor: 'orange',
      height: 3,
      marginTop: -3,
      borderRadius: 3,
      width: xknob2.value - xknob1.value,
      transform: [
        {
          translateX: xknob1.value + KNOBSIZE / 2, // Adjust for knob size
        },
      ],
    };
  });

  const propsLabel1 = useAnimatedProps(() => {
    const value = Math.round((min + (xknob1.value / MAXWIDTH) * (max - min)) / steps) * steps;
    return {
      text: `${isNaN(value) ? 'Invalid' : value}`,
    };
  });

  const propsLabel2 = useAnimatedProps(() => {
    const value = Math.round((min + (xknob2.value / MAXWIDTH) * (max - min)) / steps) * steps;
    return {
      text: `${isNaN(value) ? 'Invalid' : value}`,
    };
  });

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.labelContainer}>
        <AnimatedTextInput
  defaultValue={`${min}`}
  editable={false}
  style={styles.label}
  animatedProps={propsLabel1}
/>
<AnimatedTextInput
  defaultValue={`${max}`}
  editable={false}
  style={styles.label}
  animatedProps={propsLabel2}
/>
        </View>
        <View style={styles.track}>
          <Animated.View style={styleLine} />
        </View>
        <View>
          <PanGestureHandler onGestureEvent={gestureHandler1}>
            <Animated.View style={[styles.knob, useAnimatedStyle(() => ({
              transform: [
                { translateX: xknob1.value },
                { scale: scaleKnob1.value },
              ],
            }))]} />
          </PanGestureHandler>
          <PanGestureHandler onGestureEvent={gestureHandler2}>
            <Animated.View style={[styles.knob, useAnimatedStyle(() => ({
              transform: [
                { translateX: xknob2.value },
                { scale: scaleKnob2.value },
              ],
            }))]} />
          </PanGestureHandler>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cccdb2',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: '#777',
    fontSize: 12,
  },
  rangeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderColor: '#cccdb2',
    borderBottomWidth: 1,
  },
  labelContainer: {
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  label: {
    color: '#333',
    fontSize: 12,
  },
  track: {
    height: 3,
    backgroundColor: '#cccdf2',
    borderRadius: 3,
  },
  knob: {
    position: 'absolute',
    height: KNOBSIZE,
    width: KNOBSIZE,
    borderRadius: KNOBSIZE / 2,
    borderColor: '#9c44dc',
    borderWidth: 2,
    backgroundColor: '#fff',
    marginTop: -KNOBSIZE + 8,
    marginLeft: -8,
  },
});

export default InputRange;
