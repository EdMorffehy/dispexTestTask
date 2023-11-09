import { Box } from "@mui/material";
import { CSSProperties, MouseEvent } from "react";

interface IContainerProps extends CSSProperties {
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

const Container: FCC<IContainerProps> = ({ children, onClick, ...rest }) => (
  <Box sx={rest} onClick={onClick}>
    {children}
  </Box>
);

export default Container;
