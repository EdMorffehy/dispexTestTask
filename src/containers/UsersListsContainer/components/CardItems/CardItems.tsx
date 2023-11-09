import { FC } from "react";
import { CircularProgress, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Card from "../../../../layouts/Card";
import { useDeleteClientMutation } from "../../../../services/services";
import Container from "../../../../layouts/Container";

interface ICardItemsProps {
  name: string;
  email: string;
  phone: string;
  clientId: number;
}

const CardItems: FC<ICardItemsProps> = ({ phone, name, email, clientId }) => {
  const [deleteClient, { isLoading }] = useDeleteClientMutation();

  const handleOnDelete = () => {
    deleteClient(clientId);
  };

  return (
    <Card display='flex' flexDirection='column' width={250} height={100} position='relative'>
      {isLoading ? (
        <Container height='100%' display='flex' alignItems='center' justifyContent='center'>
          <CircularProgress />
        </Container>
      ) : (
        <>
          <Container position='absolute' top='5px' right='5px' cursor='pointer' onClick={handleOnDelete}>
            <DeleteOutlineIcon />
          </Container>
          <Typography>name: {name}</Typography>
          <Typography>email: {email}</Typography>
          <Typography>phone: {phone}</Typography>
        </>
      )}
    </Card>
  );
};

export default CardItems;
