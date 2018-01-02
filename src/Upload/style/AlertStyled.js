/**
 * Created by Programmer1 on 12/17/2017.
 */
import styled from 'styled-components';
import defaultTheme from '../../defaultTheme';

const AlertStyled = styled.div`    
          color: ${(props) => (Object.keys(props.theme).length > 0 && props.theme) ? props.theme.danger.bgColor : defaultTheme.danger.bgColor};
              `;

export default AlertStyled;
