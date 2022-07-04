import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';

export const DesktopOnly = styled.div`
  display: none;
  ${DESKTOP_MQ} {
    display: block;
  }
`;

export const MobileOnly = styled.div`
  display: block;
  ${DESKTOP_MQ} {
    display: none;
  }
`;
