/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';
import {getColor} from './statics';

const RadioStyled = styled.input` 
          margin: 3px 3px 5px 3px;
          width: 17px;
          height: 17px;
          position: relative;
          top: 4px;
          margin-left:7px;
          cursor: pointer;
          padding: 5px;
          color:  ${(props) => getColor(props)};                     
          font-family: ${(props) => props.theme.fontFamily};       
          direction: ${(props) => (props.rtl || props.theme.rtl) ? 'rtl' : 'ltr' };

              `;


export default RadioStyled;
