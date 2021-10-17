import styled from "@emotion/styled";
import { FiPhone, FiTrash2 } from 'react-icons/fi';


export const Item = styled.ul`
  width: 500px;
  border-radius: 5px;
  background-color: #f3f6f4;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  width: 500px;
`;

export const Span = styled.span`
  margin-left: 15px;
`;

export const Button = styled.button`
  margin-left: 30px;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: red;
  cursor: pointer;
`;

export const Paragraf = styled.p`
  font-weight: 700;
  width: 350px;
`;

export const Phone = styled(FiPhone)`
margin-right: 10px;
`;

export const Trash = styled(FiTrash2)`
margin-right: 10px;
`;