import React, { useState, useEffect } from 'react';
import { PageLanding ,Container , LogoContainer, ButtonsContainer, HeroImage, Button, TotalConnections } from './styles';
import { Link } from 'react-router-dom';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            setTotalConnections(response.data.total);
        })
    }, [])

  return (
    <PageLanding>
        <Container id="page-landing-content">
            <LogoContainer>
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online.</h2>
            </LogoContainer>

            <HeroImage src={landingImg} alt="Plataforma de estudos"/>

            <ButtonsContainer>
                <Button as={Link} to="/study" color="primary"  >
                    <img src={studyIcon} alt="Estudar"/>
                    <span>Estudar</span>
                </Button>

                <Button as={Link} to="/give-classes" color="secundary" >
                    <img src={giveClasses} alt="Dar aulas"/>
                    <span>Dar aulas</span>
                </Button>
            </ButtonsContainer>
            <TotalConnections>
                <span>Total de {totalConnections} conexções já realizadas</span>
                <img src={purpleHeart} alt="coração roxo" />
            </TotalConnections>
        </Container>
    </PageLanding>
  );
}

export default Landing;