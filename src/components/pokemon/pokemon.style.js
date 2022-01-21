import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell'

 export const StyleDiv = styled('div')`
 color: #0e0e0f;
 font-size: 1rem;
 padding: 0.3rem;
 border: 1px solid #ccc;
 border-radius: 4px;
 background-color: #eeeeee;
`;

export const Root = styled('div')`
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }  
    td,
    th {
      border: 1px solid #2D3843;
      text-align: center;
      padding: 5px;
    }
  
    th {
      background-color: #CDD2D7;
    }`
;

export const StylePageTitle = styled('div')`
    box-shadow: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.43;
    background-color: #2D3843;
    display: flex;
    padding: 6px 16px;
    color: rgb(30, 70, 32);
    text-align: center;
    color:#ffff
`;

export const StyleProfileCell = styled(TableCell)`
text-align: center;
img{
  border-radius: 25px;  
height: 30%;
width: 30%;
}
`;
