import { FC } from "react";

import { useGetApartmentsQuery } from "../../../../services/services";
import TreeViewItems from "../../../../components/TreeViewItems";

interface IHousesProps {
  expanded: string[];
  nodeId: number;
  label: string;
  houseId: number;
  streetId: number;
  companyId: number;
  onSelect: (nodeId: string) => void;
}

const Houses: FC<IHousesProps> = ({ expanded, nodeId, label, houseId, streetId, companyId, onSelect }) => {
  const { data, isSuccess } = useGetApartmentsQuery(
    { houseId, streetId, companyId },
    { skip: !expanded.includes(String(nodeId)) }
  );

  const handleOnClick = (addressId: number) => () => {
    onSelect(String(addressId));
  };

  return (
    <TreeViewItems
      nodeId={String(nodeId)}
      label={`Дом ${label}`}
      sx={{
        "& > div:not(.MuiTreeItem-content)": {
          maxHeight: 250,
          overflow: "auto"
        }
      }}
    >
      {!data && !isSuccess && <TreeViewItems nodeId='example' />}
      {data &&
        data.map(({ flat, addressId }) => (
          <TreeViewItems
            key={addressId}
            nodeId={String(addressId)}
            label={`Квартира ${flat}`}
            onClick={handleOnClick(addressId)}
          />
        ))}
    </TreeViewItems>
  );
};

export default Houses;
