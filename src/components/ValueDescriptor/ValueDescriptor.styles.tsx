import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    span.Currency {
    color: ${p => p.color};
  }

    span.Value {
        font-size: 18px;
        font-weight: 800;
        color: ${p => p.color}
    }
`