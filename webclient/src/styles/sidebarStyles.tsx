import styled from 'styled-components';

//sidebar 최하단 컨테이너
const SidebarContainer = styled.div`
  width: 28.125%;
  height: 100%;
  position: absolute;
  z-index: var(--zindex-sidebar);

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--sidebar-background);
`;

const SidebarContentBox = styled.div`
  width: 265px;
  height: 73.2%;

  display: flex;
  flex-direction: column;
`;

export { SidebarContainer, SidebarContentBox };
