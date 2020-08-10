import React from 'react';
import { Header, HeaderTop, HeaderContent } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, children, description }) => {
  return (
    <Header>
      <HeaderTop>
        <Link to="/">
            <img src={backIcon} alt="back"/>
        </Link>
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