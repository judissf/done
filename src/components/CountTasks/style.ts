import { styled } from "styled-components";
import { IStyleProps } from "../../interfaces";

export const CountTasksStyle = styled.div<IStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
    transition: 0.2s;
  }

  .total-done {
    strong {
      color: green;
    }
  }

  .total-rejected {
    strong {
      color: red;
    }
  }
`