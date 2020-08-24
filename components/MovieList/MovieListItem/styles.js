import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  display: flex;
  width: 220px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-image: radial-gradient( circle farthest-corner at -32.7% 36.3%,rgba(85,88,218,1) 0%,rgba(95,209,249,1) 100.2% );
  border-radius: 10px;
  h1 {
    margin-top: 5px;
    color: white;
    font-size: 17px;
  }
  h2{
    margin: 0;
    color: white;
    text-align: right;
    font-size: 13px;
  }
  img{
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div`
  
`;