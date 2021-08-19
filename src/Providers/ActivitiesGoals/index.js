import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useAuth } from "../Auth/index";
import { toast } from "react-toastify";

const ListActivitiesGoalsContext = createContext();

export const ActivitiesGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState("");
  const [activities, setNewActivities] = useState();
  const [activitiesGroup, setActivitiesGroup] = useState("");
  const [group, setGroup] = useState("");

  const { token } = useAuth();

  const handleGoalDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("@Kenzinho:token"));
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals(response.data));
    toast.error("Meta excluida");
  };

  const handleActivieDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("@Kenzinho:token"));
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNewActivities(response.data));
    toast.error("Atividade excluída");
  };

  const handleGoalCreation = (data) => {
    const { title, difficulty, how_much_achieved, group } = data;
    api
      .post(
        "goals/",
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: how_much_achieved,
          group: group,
          achieved: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Meta criada com sucesso"))
      .catch((e) => console.log(e));
  };

  const handleActivitieCreation = (data) => {
    const { title, realization_time, group } = data;
    console.log(data)

    api
      .post(
        "activities/",
        {
          title: title,
          realization_time: `${realization_time}T15:00:00Z`,
          group: group,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Atividade criada com sucesso"))
      .catch((e) => console.log(e));
  };

  const updateGoal = (goals) => {
    const { achieved } = goals;
    api
      .patch(
        `goals/${goals.id}/`,
        {
          achieved: achieved,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Meta atualizada!"));
  };

  const updateActivitie = (data) => {
    const { title, id } = data;
    console.log(data);

    api
      .patch(
        `activities/${id}/`,
        {
          title: title,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Atividade atualizada!"));
  };

  return (
    <ListActivitiesGoalsContext.Provider
      value={{
        goals,
        activitiesGroup,
        handleActivieDelete,
        handleGoalDelete,
        updateActivitie,
        updateGoal,
        handleActivitieCreation,
        handleGoalCreation,
      }}
    >
      {children}
    </ListActivitiesGoalsContext.Provider>
  );
};

export const useListActivitiesGoals = () =>
  useContext(ListActivitiesGoalsContext);
