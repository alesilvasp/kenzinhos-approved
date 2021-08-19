import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  InputContainer,
  TitleContainer,
} from "../CreateHabitsModal/styles";
import {
  makeStyles,
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { useListActivitiesGoals } from "../../Providers/ActivitiesGoals";
import { ButtonAdd, InputId } from "./styles";

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
  },
  inputs: {
    backgroundColor: "#ffff",
    border: "1px solid #000",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(116, 29, 203, 0.57)",
  },
  button: {
    borderRadius: "15px",
  },
  close: {
    width: "1px",
    borderRadius: "20px",
    marginLeft: "190px",
    marginBottom: "20px",
    fontSize: "10px",
  },
}));

const CreateActivitiesModal = ({ groupId }) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const { handleActivitieCreation } = useListActivitiesGoals();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonAdd className="addButton" onClick={handleOpen}>
        + atividade
      </ButtonAdd>

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
                <h1>Crie uma nova atividade</h1>
              </TitleContainer>
              <form onSubmit={handleSubmit(handleActivitieCreation)}>
                <div className={classes.inputs}>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Título"
                      variant="outlined"
                      color="primary"
                      {...register("title")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      type="date"
                      {...register("realization_time")}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputId
                      className="hidden-id"
                      value={groupId}
                      {...register("group")}
                    />
                  </InputContainer>
                </div>
                <InputContainer>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    className="submitButton"
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

export default CreateActivitiesModal;
