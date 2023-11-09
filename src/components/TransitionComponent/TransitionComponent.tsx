import { animated, useSpring } from "@react-spring/web";
import Collapse from "@mui/material/Collapse";
import { FC } from "react";
import { TransitionProps } from "@mui/material/transitions";

const TransitionComponent: FC<TransitionProps> = props => {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
    }
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
};

export default TransitionComponent;
