import { TreeView } from "@mui/x-tree-view/TreeView";
import { SingleSelectTreeViewProps } from "@mui/x-tree-view/TreeView/TreeView.types";

import MinusSquare from "../../icons/MinusSquare";
import PlusSquare from "../../icons/PlusSquare";
import CloseSquare from "../../icons/CloseSquare";

const TreeViewContainer: FCC<SingleSelectTreeViewProps> = ({ children, ...rest }) => (
  <TreeView
    defaultExpanded={["1"]}
    defaultCollapseIcon={<MinusSquare />}
    defaultExpandIcon={<PlusSquare />}
    defaultEndIcon={<CloseSquare />}
    sx={{ overflowX: "hidden" }}
    {...rest}
  >
    {children}
  </TreeView>
);

export default TreeViewContainer;
