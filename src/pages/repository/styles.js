import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 7px;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 10px 15px;

  h1 {
    padding: 10px 10px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  a {
    color: #1e1e1e;
    opacity: 0.5;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #1e1e1e;
    margin-left: 10px;
    margin-right: 10px;

    & + li {
      margin-top: 20px;
      border-top: 1px solid #f1f1f1;
      padding-top: 20px;
    }

    p {
      opacity: 0.8;
    }

    a {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  padding: 15px;
  border: 1px solid #e1e1e1;
  color: #1e1e1e;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #1e1e1e;
    transition: all 0.3s;
    color: #fff;
  }
`;
