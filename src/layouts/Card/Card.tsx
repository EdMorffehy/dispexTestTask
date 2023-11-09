import { CSSProperties } from "react";

import Container from "../Container";

const Card: FCC<CSSProperties> = ({ children, ...styles }) => (
  <Container border={1} borderRadius={5} backgroundColor='#FFF' padding={1} {...styles}>
    {children}
  </Container>
);

export default Card;
