import tw, { styled } from 'twin.macro';
import {
  MdMenu,
  MdSearch,
  MdArrowDropDown,
  MdHelpOutline,
  MdSettings,
} from 'react-icons/md';

import { IoApps } from 'react-icons/io5';

export const HeaderWrapper = styled.div`
  ${tw`p-[8px] grid grid-cols-[270px auto 170px] border-b border-gray-200 items-center`}
`;

export const LogoWrapper = styled.div`
  ${tw`w-[208px] h-[48px] pr-[30px] grid grid-cols-[25% auto] items-center`}
`;

export const MenuIcon = styled(MdMenu)`
  ${tw`h-[24px] w-[24px] grid items-center`}
`;

export const Logo = styled.div`
  ${tw`w-[109px] h-[40px]  flex  items-center`}
`;

// export const SearchWrapper = styled.div`
//   ${tw``}
// `;

export const SearchBarWrapper = styled.div`
  ${tw`bg-[#f1f3f4] rounded-[6px] w-full max-w-[750px] h-[45px]grid grid-cols-[10% auto 7%] items-center `}
`;

export const SearchIcon = styled(MdSearch)`
  ${tw`h-[24px] w-[24px] `}
`;

export const SearchInput = styled.input`
  ${tw`bg-transparent outline-none w-full h-[30px] text-[18px]  `}
`;

export const MoreIcon = styled(MdArrowDropDown)`
  ${tw`h-[24px] w-[24px]flex items-center justify-center`}
`;

export const IconsWrapper = styled.div`
  ${tw`flex items-center `}
`;

export const HelpIcon = styled(MdHelpOutline)`
  ${tw`h-[24px] w-[24px]`}
`;

export const GearIcon = styled(MdSettings)`
  ${tw`h-[24px] w-[24px]`}
`;

export const AppsIcon = styled(IoApps)`
  ${tw`h-[24px] w-[24px]`}
`;

export const Avatar = styled.div`
  ${tw`bg-black rounded-full h-[32px] w-[32px]`}
`;
