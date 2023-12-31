import { ChangeEvent, FC, useState } from "react";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

import Container from "../../../../layouts/Container";
import { ICreateClientDTO } from "../../../../types/clients.types";
import { useAssignedClientMutation, useCreateClientMutation } from "../../../../services/services";

interface IAddClientProps {
  addressId: string;
}

const AddClient: FC<IAddClientProps> = ({ addressId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState<ICreateClientDTO>({
    Email: "",
    Name: "",
    Phone: ""
  });
  const [error, setError] = useState<boolean>(false);

  const [createClient, { isLoading: isCreateLoading }] = useCreateClientMutation();
  const [assignedClient, { isLoading: isAssignedLoading }] = useAssignedClientMutation();

  const handleOnOpen = (): void => {
    setIsOpen(true);
  };

  const handleOnClose = (): void => {
    setIsOpen(false);
    setError(false);
    setFormValues({
      Email: "",
      Name: "",
      Phone: ""
    });
  };

  const handleOnChange =
    (type: keyof ICreateClientDTO) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setFormValues(prevState => ({ ...prevState, [type]: value }));
    };

  const handleOnSubmit = async (): Promise<void> => {
    if (Object.values(formValues).some(v => !v)) {
      setError(true);
      return;
    }
    const createResult = await createClient(formValues);
    if ("data" in createResult) {
      const { id } = createResult.data;
      const assignedResult = await assignedClient({ ClientId: id, AddressId: +addressId });
      if ("data" in assignedResult) {
        handleOnClose();
      }
    }
  };

  return (
    <>
      <Container
        display='flex'
        alignItems='center'
        justifyContent='center'
        alignSelf='flex-end'
        marginRight={10}
        cursor='pointer'
        borderRadius={5}
        padding={1}
        backgroundColor='blue'
        onClick={handleOnOpen}
      >
        <GroupAddOutlinedIcon sx={{ color: "#FFF" }} />
      </Container>

      <Dialog fullWidth keepMounted={false} onClose={handleOnClose} open={isOpen} maxWidth='sm'>
        <DialogTitle>Create Client</DialogTitle>
        <DialogContent sx={{ paddingTop: "10px !important" }}>
          {isCreateLoading || isAssignedLoading ? (
            <Container height='100%' display='flex' alignItems='center' justifyContent='center'>
              <CircularProgress />
            </Container>
          ) : (
            <Container display='flex' flexDirection='column' gap={1.5}>
              <TextField
                variant='outlined'
                label='Name'
                error={error && !formValues.Name}
                helperText={error && !formValues.Name ? "This Fields is required" : ""}
                value={formValues.Name}
                onChange={handleOnChange("Name")}
              />
              <TextField
                variant='outlined'
                label='Phone'
                error={error && !formValues.Phone}
                helperText={error && !formValues.Phone ? "This Fields is required" : ""}
                value={formValues.Phone}
                onChange={handleOnChange("Phone")}
              />
              <TextField
                variant='outlined'
                label='Email'
                error={error && !formValues.Email}
                helperText={error && !formValues.Email ? "This Fields is required" : ""}
                value={formValues.Email}
                onChange={handleOnChange("Email")}
              />
            </Container>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleOnSubmit}>
            Add
          </Button>
          <Button variant='outlined' onClick={handleOnClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddClient;
