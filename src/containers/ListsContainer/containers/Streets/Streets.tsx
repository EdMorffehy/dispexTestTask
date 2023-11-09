import { FC } from "react";

import TreeViewItems from "../../../../components/TreeViewItems";
import { useGetHousesQuery } from "../../../../services/services";
import Houses from "../Houses";

interface IStreetsProps {
  expanded: string[];
  nodeId: number;
  label: string;
  companyId: number;
  onSelect: (nodeId: string) => void;
}

const Streets: FC<IStreetsProps> = ({ expanded, nodeId, label, companyId, onSelect }) => {
  const { data, isSuccess } = useGetHousesQuery(+nodeId, { skip: !expanded.includes(String(nodeId)) });

  return (
    <TreeViewItems nodeId={String(nodeId)} label={label}>
      {!data && !isSuccess && <TreeViewItems nodeId='example' />}
      {data &&
        data.map(({ id, name }) => (
          <Houses
            key={id}
            expanded={expanded}
            nodeId={id}
            streetId={nodeId}
            houseId={id}
            companyId={companyId}
            label={name}
            onSelect={onSelect}
          />
        ))}
    </TreeViewItems>
  );
};

export default Streets;
