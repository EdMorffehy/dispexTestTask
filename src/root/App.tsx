import { FC, useState } from "react";

import AppListsContainer from "../containers/ListsContainer";
import UsersListsContainer from "../containers/UsersListsContainer";
import Container from "../layouts/Container";

const App: FC = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <Container display='flex' alignItems='flex-start' gap={20}>
      <AppListsContainer selected={selected} setSelected={setSelected} />
      <UsersListsContainer selected={selected} />
    </Container>
  );
};

export default App;
