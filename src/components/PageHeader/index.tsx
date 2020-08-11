import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Header, HeaderTop, HeaderContent } from './styles';
import { AppThemeContext } from '../../styles/themes/AppThemeProvider';
import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, children, description }) => {
  const { theme, toggleTheme } = useContext(AppThemeContext);
  const { colors, title: themeTitle } = useContext(ThemeContext);

  console.log(theme, toggleTheme);
  return (
    <Header>
      <HeaderTop>
        <Link to="/">
            <img src={backIcon} alt="back"/>
        </Link>
        <Switch 
          onChange={toggleTheme}
          checked={themeTitle === 'dark'}
          checkedIcon={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 2
            }}>
              <FaMoon color="#FFF" />
            </div>
          }
          uncheckedIcon={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 2
            }}>
              <FaSun color="#FFF" />
            </div>
          }
          height={20}
          width={70}
          handleDiameter={30}
          offColor={colors.secondary}
          onColor={'#2B2F77'}
          
        />
        <img src={logo} alt="proffy"/>
      </HeaderTop>

      <HeaderContent>
        <strong>{title}</strong>
        {Boolean(description) && <span>{description}</span>}
        {children}
      </HeaderContent>

    </Header>
  )
}

export default PageHeader;