import { faCss3Alt, faFigma, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HomeIndex.css';

import React from 'react'
import { Link } from 'react-router-dom'
import { Borde, DivCentral, IconCss, IconEstadistica, IconFigma, IconHome, IconHtml, IconJs, IconPerfil, IconUx, ItemName1, ItemName2, LenguajeCSSandJS, LenguajeFigmaAndUx, LenguajeHTML, Menu, P, Pading, Title } from './HomeStyles'

const Home = () => {
  return (
    <>
      <DivCentral className='home'>
        <Pading className='padding'>
          <Title className='content_home'>
            Practica tus conocimientos en la categoría que prefieras.
          </Title>

                  {/* HTML */}

          <LenguajeHTML className='lenguage'>
                  <Link className='enlaces' to='/Questions_HTML'>
            <div className='items'>
              <Borde className='borde'>
                <IconHtml className='html'>
                  <FontAwesomeIcon icon={faHtml5} />
                 
                </IconHtml>
              </Borde>
              <ItemName1 className='itemName'>
                HTML
                </ItemName1>
             </div>
             </Link>
          </LenguajeHTML>

                    {/* CSS */}
          <LenguajeCSSandJS className='lenguageX2'>
          <Link className='enlaces' to='/Questions_CSS'>
              <div className='item1'>
                <Borde className='borde'>
                  <IconCss className='css'>
                    <FontAwesomeIcon icon={faCss3Alt} />
                  </IconCss>
                </Borde>

                <ItemName2 className='itemName'>
                  CSS
                </ItemName2>
              </div>
               </Link>

              {/* JavaScript */}
              <div className='item2'>
              <Link className='enlaces' to='/Questions_JS'>
                <Borde className='borde'>
                  <IconJs className='js'>
                    <FontAwesomeIcon icon={faJsSquare} />
                  </IconJs>
                </Borde>
                <ItemName2 className='itemName'>
                  JavaScript
                </ItemName2>
                </Link>
              </div>
          </LenguajeCSSandJS>

            {/* FIGMA */}
          <LenguajeFigmaAndUx className='lenguageX3'>
          <Link className='enlaces' to='/Questions_Figma'>
          <div className='item1'>
                <Borde className='borde'>
                  <IconFigma className='css'>
                    <FontAwesomeIcon icon={faFigma} />
                  </IconFigma>
                </Borde>

                <ItemName2 className='itemName'>
                  Figma
                </ItemName2>
              </div>
               </Link>

                {/* UX */}
              <div className='item2'>
              <Link className='enlaces' to='/Questions_UX'>
                <Borde className='borde'>
                  <IconUx className='js'>
                    UX
                  </IconUx>
                </Borde>
                <ItemName2 className='itemName'>
                UX
                </ItemName2>
                </Link>
              </div>
          </LenguajeFigmaAndUx>
        </Pading>


        <Menu className='menu'>
            <IconHome className='iconHome'>
              <FontAwesomeIcon icon={faHouse} />
              <div className='iconName'>Home</div>
            </IconHome>

            <IconEstadistica className='iconHome'>
              
              <FontAwesomeIcon icon={faBolt} />
              <div className='iconName'>
                <Link className='enlaces' to='/estadistica'>
                   Estadística
                </Link>
             </div>
            </IconEstadistica>

            <IconPerfil className='iconPerfil'>
              <FontAwesomeIcon icon={faUser} />
              <div className='iconName'>Perfil</div>
            </IconPerfil>
          </Menu>
      </DivCentral>
    </>
  )
}

export default Home