import {
    add,
    Canvas,
    Circle,
    LinearGradient,
    vec,
    sub,
    Fill,
    useLoop,
    mix,
    BackdropFilter,
    Blur,
    useComputedValue,
  } from '@shopify/react-native-skia';
  import * as React from 'react';
  import {Dimensions} from 'react-native';
  
  const {width, height} = Dimensions.get('window');
  const c = vec(width, (height / 2));
  const r = c.x - 32;
  
  export default function BlurAccount() {
    const progress = useLoop({duration: 8000});
    const start = useComputedValue(
      () => sub(c, vec(0, mix(progress.current, r, r))),
      [progress],
    );
    const end = useComputedValue(
      () => add(c, vec(0, mix(progress.current, r, r / 1.2))),
      [progress],
    );
    const radius = useComputedValue(
      () => mix(progress.current, r, r / 1.2),
      [progress],
    );
    return (
      <Canvas style={{width: '100%', height: '100%', position: 'absolute'}}>
        <Fill color={'#e5e8ef'} />
        <Circle c={c} r={radius}>
          <LinearGradient start={start} end={end} colors={['cyan', 'forestgreen']} />
        </Circle>
        <BackdropFilter filter={<Blur blur={40} />}>
          <Fill color={'#DFE3E610'} />
        </BackdropFilter>
      </Canvas>
    );
  }