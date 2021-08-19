import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    #1d64cb 0%,
    rgba(116, 29, 203, 0.57) 100%
  );

  @media (min-width: 1024px) {
    display: flex;
    background: #f9f9f9;
  }
`;

export const Content = styled.div`
  height: 100vh;
  width: 85%;
  margin: 0 auto;

  .Header {
    width: 100%;
    padding-top: 10px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    h2 {
      margin-top: 40px;
      font-size: 25px;
      font-weight: 700;
      color: white;
    }

    button {
      height: 25px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      font-family: "Source Code Pro";
      padding: 0 0.5em;
      border: none;
      border-radius: 5px;
      color: var(--blue-color);
      background-color: var(--white-color);
    }
  }

  .Groups {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .GroupsList {
      width: 100%;
      max-width: 415px;
      margin: 0 auto;

      .SearchField {
        border: 1px solid rgba(0, 0, 0, 0.1);
        height: 36px;
        display: flex;
        align-items: center;

        input {
          width: 92%;
          padding: 0 10px;
        }

        input,
        button {
          height: 34px;
          border: none;
          background-color: #fff;
        }

        button {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0 5px;

          svg {
            transform: translateY(2px);
          }
        }
      }

      .List {
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

        .Group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          margin-top: 10px;
          border: 2px solid rgba(29, 100, 203, 0.05);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
          background-color: var(--white-color);

          .HeaderGroup {
            display: flex;
            align-items: center;

            h4 {
              font-family: "Source Sans Pro";
              font-size: 15px;
            }
            span {
              color: var(--gray-details);
              font-size: 12px;
              margin-left: 10px;
              transform: translateY(1px);
            }
          }

          .InfosGroup {
            color: var(--gray-details);
            font-size: 12px;
            margin-top: 5px;

            span + span {
              margin-left: 15px;
            }
          }

          .BtnToDetails {
            button {
              border: none;

              svg {
                font-size: 12px;
              }
            }
          }

          &:hover {
            transform: translateZ(50px);
            transform: translateX(2px);
          }
        }
      }
    }
  }

  .MuiAccordionSummary-content {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    .Header {
      padding: 1em 0 0.2em 0;
      border-bottom: 1px solid rgba(29, 100, 203, 0.2);

      h2 {
        margin-top: 0px;
        font-size: 28px;
        color: #000;
      }

      button {
        padding: 0 1em;
        border-radius: 10px;
        color: #fff;
        background-color: var(--blue-color);
      }
    }

    .Groups {
      flex-direction: row;

      .GroupsList .List .Group {
        box-shadow: 0px 4px 4px rgba(29, 100, 203, 0.4);
      }
    }
  }
`;

export const ListGroups = styled.div`
  height: 65vh;
  margin-top: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-color);
    border-radius: 10px;
  }
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-family: "Source Sans Pro";
    font-size: 16px;
  }

  span {
    color: var(--gray-details);
    font-size: 12px;
    margin-left: 10px;
    transform: translateY(2px);
  }
`;

export const InfosGroup = styled.div`
  color: var(--gray-details);
  font-size: 12px;
  margin-top: 5px;
  display: flex;

  span {
    display: block;
  }

  span + span {
    margin-left: 15px;
  }
`;

export const DetailsGroup = styled.div`
  width: 100%;
  h5 {
    font-family: "Source Sans Pro";
    font-size: 14px;
  }
`;

export const ActivitiesGroup = styled.div`
  margin: 7px 0;
  padding: 2px 0;
  border-bottom: 1px solid rgba(116, 29, 203, 0.2);

  p,
  span {
    font-size: 13px;
  }
`;

export const GoalsGroup = styled.div`
  margin: 7px 0;
  padding: 2px 0;
  border-bottom: 1px solid rgba(116, 29, 203, 0.2);

  label,
  span {
    font-size: 13px;
  }

  span {
    display: block;
  }

  input {
    transform: translateY(2px);
  }
`;

export const BtnSubscribe = styled.div`
  text-align: right;

  button {
    border: none;
    color: white;
    background-color: var(--blue-color);
    font-size: "Source Code Pro";
    padding: 4px 8px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;
