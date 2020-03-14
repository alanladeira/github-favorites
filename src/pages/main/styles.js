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

export const Form = styled.form`
  padding: 15px 10px;
  display: flex;
  margin: 10px auto;

  input {
    border-radius: 4px;
    flex: 1;
    border: 1px solid #e1e1e1;
    padding: 15px 10px;
    outline: none;
  }
`;

export const Button = styled.button.attrs({
  type: "submit"
})`
  padding: 15px;
  border: 1px solid #e1e1e1;
  margin-left: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    padding: 20px 10px 0 10px;

    & + li {
      border-top: 1px solid #eee;
    }

    img {
      height: 90px;
      border-radius: 50%;
    }

    p {
      margin-left: 15px;
    }
  }
`;
