import styled from 'styled-components';

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const EventItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
`;

export const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
  border: 1px solid #ccc;
`;
