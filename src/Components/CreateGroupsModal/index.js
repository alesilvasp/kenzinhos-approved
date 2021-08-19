import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGroupsUser } from "../../Providers/GroupsUser";
import { FormContainer, InputContainer, TitleContainer } from "./styles";
import {
  makeStyles,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  MenuItem,
} from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "blue",
    backgroundImage: "linear-gradient(#1D64CB, #741DCB)",
    border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    margin: "20%",
  },
  inputs: {
    backgroundColor: "#e5e5e5",
    border: "1px solid #000",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(116, 29, 203, 0.57)",
  },
  button: {
    borderRadius: "15px",
    marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      marginTop: "0px",
    },
  },
  close: {
    width: "1px",
    borderRadius: "20px",
    marginLeft: "190px",
    marginBottom: "20px",
    fontSize: "10px",
  },
  select: {
    backgroundColor: "#ffff",
  },
}));

const CreateGroups = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { handleGroupCreation } = useGroupsUser();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreation = () => {
    toast.info("Grupo criado");
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        Criar +
      </Button>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormContainer>
              <TitleContainer>
                <Button
                  className={classes.close}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleClose}
                >
                  x
                </Button>
                <h1>Crie seu grupo</h1>
              </TitleContainer>
              <form onSubmit={handleSubmit(handleGroupCreation)}>
                <div className={classes.inputs}>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Nome"
                      variant="outlined"
                      color="primary"
                      {...register("name")}
                    />

                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Descrição"
                      variant="outlined"
                      color="primary"
                      {...register("description")}
                    />

                    <TextField
                      className={classes.select}
                      size="small"
                      id="outlined-basic"
                      label="Categoria"
                      variant="outlined"
                      color="primary"
                      {...register("category")}
                      select
                    >
                      <MenuItem value={"Educação"}>Educação</MenuItem>
                      <MenuItem value={"Saúde"}>Saúde</MenuItem>
                      <MenuItem value={"Finanças"}>Finanças</MenuItem>
                    </TextField>
                  </InputContainer>
                </div>
                <InputContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    className="submitButton"
                    onClick={handleCreation}
                  >
                    Adicionar
                  </Button>
                </InputContainer>
              </form>
            </FormContainer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateGroups;
