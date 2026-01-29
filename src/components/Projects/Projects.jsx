import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './projects.css'
import icons from "../../styles/icons";
import { projects } from "../../data/projects";

const breakPoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20
  },
  520: {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 25
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1440: {
    slidesPerView: 4.5,
    spaceBetween: 30
  },
}

export default function ProjectsSlider() {

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <Swiper 
        className="Swiper" 
        spaceBetween={20}
        grabCursor={true}
        breakpoints={breakPoints}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={p.id}>

            <div className="project-card">
              <img src={p.previewImg} alt={p.title} className="prevImg" />
              <div className="heading">
                <h3>{p.title}</h3>    
                <p><icons.MdOutlineAccessTimeFilled/> {p.year}</p>
              </div>
              
              <p className="desc">{p.description}</p>

              <div className="links">
                <a 
                  href={p.links.demo}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <icons.FaCirclePlay/>
                </a>
                <a 
                  href={p.links.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <icons.FaGithubSquare/>
                </a>
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}