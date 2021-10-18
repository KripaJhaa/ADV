import { Button, Box, Modal } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { bgcolor } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';

export default function ModalTemplate({ModalFixture={title:"",subtitle:""}}) {
  const [OpenModal, setOpenModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  
  

  const ModalFill = (
    <>
      <Typography variant="h6" component="h6">
        {ModalFixture.title}
      </Typography>
      <Typography sx={{ mt: 2 }}>{ModalFixture.subtitle}</Typography>
    </>
  );

  return (
    <>
      <p>Here is my button {OpenModal}</p>
      <Button onClick={() => setOpenModal(!OpenModal)}>
        {OpenModal ? "Close Modal" : "Open Modal"}
      </Button>

      <div>
        <Modal
          keepMounted
          open={OpenModal}
          // onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          sx={{  color: 'primary.dark',}}
        >
          <Box sx={style}>{ModalFill}
          <MenuIcon/>
          </Box>
          
        </Modal>
      </div>
    </>
  );
}
