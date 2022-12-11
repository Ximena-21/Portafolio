import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${(props:any) => props.color || "orange"};

    .fillHeight {
      margin-top: 80px;
      counter-reset: section;
    }
  }

  @media (min-width: 425px) {
    .layout {
      .fillHeight {
        margin-top: 0;
      }
    }

`