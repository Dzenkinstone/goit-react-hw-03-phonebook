import styled from '@emotion/styled';

export const List = styled.ul`
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.p``;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  background-color: white;
  border: 1px solid rgb(192, 192, 192);
  padding: 2px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
`;
