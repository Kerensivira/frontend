import { faBolt, faClock, faComment, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  Answers,
  Answers2,
  Answers3,
  CentralDiv,
  DivCentral,
  FontAwesomeIconDiv,
  Horas,
  IconEstadistica,
  IconHome,
  IconPerfil,
  Menu,
  Pading,
  SevenDays,
  Title,
} from "./EstadisticasStyle";

const EstadisticaUser = () => {
  return (
    <DivCentral className="home">
      <Pading className="padding">
        <Title className="content_home">
          <h1>Estadísticas</h1>
        </Title>
      </Pading>

      <SevenDays>
        <p>En los últimos 7 días</p>
      </SevenDays>

      <CentralDiv>

      <Horas>
      <FontAwesomeIconDiv>
      <FontAwesomeIcon icon={faClock} />
      </FontAwesomeIconDiv>
        <label> Tiempo de estudio (horas) 1 </label>
      </Horas>

      <Answers>
      <FontAwesomeIconDiv>
      <FontAwesomeIcon icon={faComment} />
      </FontAwesomeIconDiv>
      
         <label> Respuestas Contestadas 40</label>
      </Answers>
     
     <Answers2>
     <FontAwesomeIconDiv>
      <FontAwesomeIcon icon={faComment} />
     </FontAwesomeIconDiv>
       <label> Respuestas Correctas 20</label>
     </Answers2>
      
      <Answers3>
      <FontAwesomeIconDiv>
      <FontAwesomeIcon icon={faComment} />
      </FontAwesomeIconDiv>
        <label> Respuestas Incorrectas 20</label>
      </Answers3>
      
      </CentralDiv>

      <Menu className="menu">
        <IconHome className="iconHome">
          <FontAwesomeIcon icon={faHouse} />
          <div className="iconName">
            <Link className="enlaces" to="/Home">
              Home
            </Link>
          </div>
        </IconHome>

        <IconEstadistica className="iconHome">
          <FontAwesomeIcon icon={faBolt} />
          <div className="iconName">
            <Link className="enlaces" to="/estadistica">
              Estadística
            </Link>
          </div>
        </IconEstadistica>

        <IconPerfil className="iconPerfil">
          <FontAwesomeIcon icon={faUser} />
          <Link className="enlaces" to="/perfil">
            <div className="iconName">Perfil</div>
          </Link>
        </IconPerfil>
      </Menu>
    </DivCentral>
  );
};

export default EstadisticaUser;
