import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: "100%",
  },
  lowerMenu: {
    width: "100%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
  },
  content: {
    margin: 0,
  },
}));

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .0)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    margin: 0,
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const SubTitles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const MainContainer = styled.div`
   
  display: flex;
  flex-direction: column;  
  marginLeft: 100,
  height: 65vh;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 10px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-color);
    border-radius: 10px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #a0a0a0;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
  color: #959595;
`;
export const DescriprionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    color: black;
  }

  button {
    margin-bottom: 10px;
    border: none;
  }

  .updateIcon {
    color: var(--blue-color);
    :hover {
      color: green;
    }
    :active {
      color: darkgreen;
    }
  }

  .deleteIcon {
    color: red;
    :hover {
      color: tomato;
    }
    :active {
      color: darkred;
    }
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;

    button {
      margin-bottom: 0px;
    }
  }
`;
