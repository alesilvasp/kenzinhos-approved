import { useEffect } from "react";
import { Accordion, Typography, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import {
  DescriprionContainer,
  SubTitleContainer,
  TitleContainer,
  useStyles,
  AccordionSummary, 
  MainContainer, 
  SubTitles
} from "./styles";
import SearchBar from "../SearchBar";
import CreateActivitiesModal from "../ActivitiesModal";
import CreateGoalsModal from "../GoalsModal";
import { useListActivitiesGoals } from "../../Providers/ActivitiesGoals";
import { useGroupsUser } from "../../Providers/GroupsUserProvider";
import { useAuth } from "../../Providers/Auth";
import UpdateActivities from "../UpdateActivitiesModal";
import UpdateGoal from "../UpdateGoalModal";

const Tags = () => {
  const classes = useStyles();
  const { token } = useAuth();
  const { getGroups, groups } = useGroupsUser();

  useEffect(() => {
    getGroups(token);
  }, [groups]);

  const { handleActivieDelete, handleGoalDelete, updateActivitie } =
    useListActivitiesGoals();

  return (
    <MainContainer>
      <SearchBar groups={groups} getGroups={getGroups} />
      {groups.map((group) => (
        <Accordion key={group.id} className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div key={group.id}>
                <TitleContainer>
                  <h4>{group.name}</h4>
                  <p>{group.category}</p>
                </TitleContainer>
                <SubTitleContainer>
                  <span>Atividades: {group.activities.length}</span>

                  <span>Metas: {group.goals.length}</span>
                </SubTitleContainer>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.lowerMenu}>
              <SubTitles>
                <h4>Atividades:</h4>
                <CreateActivitiesModal groupId={group.id} />
              </SubTitles>
              {group.activities.map((activity) => (
                <DescriprionContainer key={activity.id}>
                  <p>{activity.title}</p>
                  <p>Finalizar em: {activity.realization_time}</p>
                  <UpdateActivities activityId={activity.id} />
                  <button
                    className="delete"
                    onClick={() => handleActivieDelete(activity.id)}
                  >
                    <DeleteForeverSharpIcon />
                  </button>
                </DescriprionContainer>
              ))}
              <SubTitles>
                <h4>Metas:</h4>
                <CreateGoalsModal groupId={group.id} />
              </SubTitles>
              {group.goals.map((goal) => (
                <DescriprionContainer key={goal.id}>
                  <p>{goal.title}</p>
                  <p>Atividade completada : {goal.how_much_achieved}</p>
                  <UpdateGoal goalId={goal.id} />
                  <button onClick={() => handleGoalDelete(goal.id)}>
                    <DeleteForeverSharpIcon className="classes.button" />
                  </button>

                  {/* <span>{goal.achieved ? 'Sim' : 'Não'}</span>
                    <span>{goal.how_much_achieved}</span> */}
                </DescriprionContainer>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MainContainer>
  );
};

export default Tags;
