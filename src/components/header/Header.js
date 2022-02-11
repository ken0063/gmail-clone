import * as S from './style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <S.MenuIcon />
        <S.Logo>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
            alt=""
          />
        </S.Logo>
      </S.LogoWrapper>

      {/* <S.SearchWrapper> */}
      <S.SearchBarWrapper>
        <S.SearchIcon />
        <S.SearchInput type="input" placeholder="Search mail" />
        <S.MoreIcon />
      </S.SearchBarWrapper>
      {/* </S.SearchWrapper> */}

      <S.IconsWrapper>
        <S.HelpIcon />
        <S.GearIcon />
        <S.AppsIcon />
        <S.Avatar />
      </S.IconsWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
