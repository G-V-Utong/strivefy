/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/footer/Footer";
import "./aboutus.scss";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__container"></div>
      <div className="about__hero">
        <h1>About us</h1>
        <img
          src="/public/images/Aboutus.jpg"
          alt="Godswill Utong"
          width={500}
        />
        <div className="about__hero__text">
          <h2>Team Overview</h2>
          <h3>Founder and Developer – Godswill Utong</h3>
          <p>
            As the founder and sole developer behind Strivefy, Godswill Utong
            brings a wealth of experience and expertise to the forefront of task
            management app development. With a Bachelor's degree in Computer
            Engineering from Bayero University Kano and over seven years of
            professional experience, Godswill has a proven track record in both
            the financial sector, where they served as a Relationship Manager
            with Wema Bank and Access Bank Plc, and in the tech industry.
          </p>
          <h3>Key Skills</h3>
          <p>
            Full-stack development with a focus on web and mobile applications.
            Proficient in NextJs, ReactJs, and Redux for frontend development.
            Extensive experience in building and maintaining robust and
            user-friendly applications. Design and implementation of rigorous
            testing suites to ensure optimal performance. A keen eye for
            identifying and resolving design and implementation bugs.
          </p>
          <h3>Vision and Mission</h3>
          <p>
            Godswill Utong's vision for Strivefy is rooted in a commitment to
            providing users with a seamless and efficient task management
            experience. The mission is to create a tool that not only meets but
            anticipates the dynamic needs of users, enhancing productivity and
            simplifying daily workflows.
          </p>
          <h3>User-Centric Approach</h3>
          <p>
            As the sole member of the team, Godswill places a high emphasis on
            user feedback, actively incorporating suggestions and insights into
            continuous improvements. This user-centric philosophy drives the
            ongoing development and evolution of Strivefy.
          </p>
          <h3>Future Development</h3>
          <p>
            With an unwavering dedication to innovation, he envisions Strivefy
            as a continuously evolving platform. Future plans include the
            implementation of new features and technologies to keep pace with
            the ever-changing landscape of task management. Strivefy is not just
            an app; it's a reflection of Godswill's passion for creating
            solutions that empower users to strive for their best.
          </p>
        </div>
      </div>
        
      <Footer/>
    </div>
    
  );
};

export default AboutUs;
