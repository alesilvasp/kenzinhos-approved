import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";

const GroupsUserContext = createContext();

export const GroupsUserProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );
  useEffect(() => {
      api
        .get("groups/subscriptions/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setGroups([...response.data]);
        })
        .catch((err) => toast.error("Grupos não podem ser carregados"));
    };
  }, []);

  const subscribeToAGroup = (id) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups(token);
        toast.success("Inscrição realizada com sucesso");
      })
      .catch((err) => toast.error("Você já faz parte desse grupo"));
  };

  const handleGroupCreation = (data) => {
    const { name, description, category } = data;
    api
      .post(
        "groups/",
        {
          name: name,
          description: description,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => toast.error("Grupo não pode ser criado"));
  };

  return (
    <GroupsUserContext.Provider
      value={{
        groups,
        setGroups,
        getGroups,
        handleGroupCreation,
        subscribeToAGroup,
      }}
    >
      {children}
    </GroupsUserContext.Provider>
  );
};

export const useGroupsUser = () => useContext(GroupsUserContext);
