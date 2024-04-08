'use client';
import Image from 'next/image';

import logo from '@/images/logo.png';
import { SidebarContainer, SidebarContentBox } from 'styles/sidebarStyles';

const SideBar = function () {
  return (
    <SidebarContainer>
      <SidebarContentBox>
        <Image src={logo} width={265} alt="logo image" object-fit="contain" />
      </SidebarContentBox>
    </SidebarContainer>
  );
};

export default SideBar;
