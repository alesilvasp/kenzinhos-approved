import CreateGroupsModal from "../../Components/CreateGroupsModal";
import CardGroup from "../../Components/CardGroup";
import ViewNavbar from "../../Components/ViewNavbar";
import { Search, ArrowForwardIos } from "@material-ui/icons";
import api from "../../Services/api";
import { useEffect, useState } from "react";
import { useGroupsUser } from "../../Providers/GroupsUser";
import {
  Container,
  Content,
  HeaderGroup,
  ListGroups,
  InfosGroup,
  DetailsGroup,
  ActivitiesGroup,
  GoalsGroup,
  BtnSubscribe,
} from "./styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BtnShowAllGroups from "../../Components/BtnShowAllGroups";
import { toast } from "react-toastify";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [groupForCard, setGroupForCard] = useState();
  const [viewCardGroup, setViewCardGroup] = useState(false);
  const [viewBtnShowAllGroups, setViewBtnShowAllGroups] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const getGroups = (token) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups([...response.data]);
      })
      .catch((err) => toast.error("Grupos não podem ser carregados"));
  };

  useEffect(() => {
    api
      .get("groups/")
      .then((response) => setGroups(response.data.results))
      .catch((err) => toast.error("Grupos não podem ser carregados"));
  }, []);

  const handleViewDetailsGroup = (group) => {
    setGroupForCard(group);
    setViewCardGroup(true);
  };

  const handleSearchGroup = (groupName) => {
    const group = groups.find((group) => group.name === groupName);
    if (!group) {
      return toast.error("Grupo não encontrado");
    }

    api
      .get(`groups/${group.id}/`)
      .then((res) => {
        setViewBtnShowAllGroups(true);
        setGroups([res.data]);
      })
      .catch((err) =>
        toast.error("Grupos não pode ser encontrado, verifique nome informado!")
      );
  };

  const ShowAllGroupsBtn = () => {
    getGroups(token);
    setViewBtnShowAllGroups(false);
  };

  const { subscribeToAGroup } = useGroupsUser();

  return (
    <Container>
      <ViewNavbar />

      <Content>
        <div className="Header">
          <h2>Grupos</h2>
          <CreateGroupsModal />
        </div>
        <div className="Groups">
          <div className="GroupsList">
            <div className="SearchField">
              <input
                type="text"
                placeholder="Pesquisar grupo"
                onChange={(e) => setTextInput(e.target.value)}
              />
              <div>
                <button onClick={() => handleSearchGroup(textInput)}>
                  <Search />
                </button>
              </div>
            </div>

            {window.innerWidth >= 1024 && (
              <div className="List">
                {groups.map((group) => (
                  <div className="Group" key={group.id}>
                    <div className="Resume">
                      <div className="HeaderGroup">
                        <h4>{group.name}</h4>
                        <span>{group.category}</span>
                      </div>

                      <div className="InfosGroup">
                        <span>Atividades: {group.activities.length}</span>

                        <span>Metas: {group.goals.length}</span>
                      </div>
                    </div>

                    <div className="BtnToDetails">
                      <button onClick={() => handleViewDetailsGroup(group)}>
                        <ArrowForwardIos />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {window.innerWidth <= 768 && (
              <ListGroups>
                {groups.map((group) => (
                  <Accordion key={group.id} style={{ marginTop: "5px" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <HeaderGroup>
                        <h4>{group.name}</h4>
                        <span>{group.category}</span>
                      </HeaderGroup>

                      <InfosGroup>
                        <span>Atividades: {group.activities.length}</span>
                        <span>Metas: {group.goals.length}</span>
                      </InfosGroup>
                    </AccordionSummary>

                    <AccordionDetails>
                      <DetailsGroup>
                        <h5>Atividades</h5>
                        {group.activities.map((activity) => (
                          <ActivitiesGroup key={activity.id}>
                            <p>{activity.title}</p>
                            <span>
                              <strong>Finalizar em:</strong>
                              {activity.realization_time}
                            </span>
                          </ActivitiesGroup>
                        ))}

                        <h5>Metas</h5>
                        {group.goals.map((goal, index) => (
                          <GoalsGroup key={goal.id}>
                            <p>{goal.title}</p>
                            <span>
                              <strong>Nível:</strong>
                              {goal.difficulty}
                            </span>
                          </GoalsGroup>
                        ))}

                        <BtnSubscribe>
                          <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={() => subscribeToAGroup(group.id)}
                          >
                            Inscrever-se
                          </Button>
                        </BtnSubscribe>
                      </DetailsGroup>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </ListGroups>
            )}
          </div>

          {viewBtnShowAllGroups && (
            <BtnShowAllGroups ShowAllGroupsBtn={ShowAllGroupsBtn} />
          )}

          <div className="GroupDetails">
            {viewCardGroup && <CardGroup group={groupForCard} />}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Groups;
