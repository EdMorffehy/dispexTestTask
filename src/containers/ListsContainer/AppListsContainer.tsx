import { FC, useState } from "react";

import Container from "../../layouts/Container";
import TreeViewContainer from "../../components/TreeViewContainer";
import Streets from "./containers/Streets";
import { useGetStreetsQuery } from "../../services/services";

interface IAppListsContainerProps {
  selected: string;
  setSelected: SetStateType<string>;
}

const AppListsContainer: FC<IAppListsContainerProps> = ({ selected, setSelected }) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const { data } = useGetStreetsQuery();

  const handleOnToggle = (_, nodeIds: string[]): void => {
    setExpanded(nodeIds);
  };

  const handleOnSelect = (nodeIds: string): void => {
    setSelected(nodeIds);
  };

  return (
    <Container flex='1 1 320px'>
      <TreeViewContainer expanded={expanded} selected={selected} onNodeToggle={handleOnToggle} disableSelection>
        {data
          ? data.map(({ id, nameWithPrefix, cityId }) => (
              <Streets
                key={id}
                expanded={expanded}
                nodeId={id}
                companyId={cityId}
                label={nameWithPrefix}
                onSelect={handleOnSelect}
              />
            ))
          : null}
      </TreeViewContainer>
    </Container>
  );
};

export default AppListsContainer;
