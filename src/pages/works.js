import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Carouselprojects from '../components/Carouselprojects';

import {
  LinkWrap,
  Overlay
} from "../styles/Work.styles";

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";

const Works = ({ history }) => {
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  const projects = [
    { src: "./img/projects/future.png", name: "Future Minds Expo 2024", uri: "/detailcase1" },
    { src: "./img/projects/surya.png", name: "Surya Mangalya 2024", uri: "/detailcase2" },
    { src: "./img/projects/iftar.png", name: "Iftar Celebration 2024", uri: "/detailcase3" },
    { src: "./img/projects/meet.png", name: "Staff GetTogether March 2024", uri: "/detailcase4" },
    // Add more projects if needed
  ];

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const renderProjects = currentItems.map((project, index) => (
    <div className='col-md-4 slick slickproject p-3' key={index}>
      <div className='slick-slide d-block'>
        <div>
          <div className='itm'>
            <LinkWrap active={toCase === project.uri}>
              <Overlay
                active={!!toCase}
                onMouseDown={e => setCoords(e.nativeEvent.x)}
                onMouseUp={e => handleCaseSwap(e.nativeEvent, project.uri)}
              >
                <div className='bg'>
                  <img src={project.src} className="img-fluid" alt={project.name} />
                </div>
                <div className='desc'>
                  <div className='name'>{project.name}</div>
                </div>
                <div className='icon'>
                  <span>View Project</span>
                </div>
              </Overlay>
            </LinkWrap>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <Reveal effect="fadeInUp">
        <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>
            <div className='col-md-12'>
              <h1 className="heading mt-5">Discover our rich history and commitment to fostering a dynamic and engaging work environment.</h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
           
            {renderProjects}
            <div className='col-12'>
              <ul className="pagination justify-content-end" style={{ position: 'absolute', top: '-90px', right: '20px' }}>
                {[...Array(Math.ceil(projects.length / itemsPerPage)).keys()].map(number => (
                  <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                    <div className="page-link" onClick={() => handlePageChange(number + 1)}>
                      {number + 1}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default withRouter(Works);
