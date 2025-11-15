import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './projects.css'
import icons from "../../styles/icons";
import { projects } from "../../data/projects";

export default function ProjectsSlider() {

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <Swiper 
        className="Swiper" 
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
          520: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }}
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
                <a href={p.links.demo}><icons.FaCirclePlay/></a>
                <a href={p.links.github}><icons.FaGithubSquare/></a>
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}