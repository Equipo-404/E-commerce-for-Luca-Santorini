import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./styles-404.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const About404 = () => {
  const [person, setPerson] = useState({
    name: "TEAM 404",
    description: "El equipo 404 es multidisciplinario, cooperativo y dinámico. Cada miembro aporta su conocimiento y habilidades para crear una sinergia que da como resultado un equipo de desarrollo efectivo. La misión del equipo es brindar soluciones a las pequeñas y medianas empresas para impulsar su crecimiento y permitirles dar el salto a la era tecnológica. El primer proyecto del equipo 404 es el desarrollo de una plataforma e-commerce para la marca Luca Santorini. Este proyecto posicionará la marca en el mercado digital y permitirá un aumento en las ventas. La página web contará con un diseño innovador en comparación con otras marcas mexicanas de playeras con diseño independiente. El diseño atraerá la atención del consumidor y brindará una experiencia positiva para el usuario.",
    photo: require("./img/logo404.jpeg"),
    photoFull: require("./img/logo404.jpeg"),
    link: "https://github.com/Equipo-404",
    buttonName: "GitHub"
  });

  const people = [ //Members of TEAM 404
    { //Team 404
      name: "TEAM 404",
      description: "El equipo 404 es multidisciplinario, cooperativo y dinámico. Cada miembro aporta su conocimiento y habilidades para crear una sinergia que da como resultado un equipo de desarrollo efectivo. La misión del equipo es brindar soluciones a las pequeñas y medianas empresas para impulsar su crecimiento y permitirles dar el salto a la era tecnológica. El primer proyecto del equipo 404 es el desarrollo de una plataforma e-commerce para la marca Luca Santorini. Este proyecto posicionará la marca en el mercado digital y permitirá un aumento en las ventas. La página web contará con un diseño innovador en comparación con otras marcas mexicanas de playeras con diseño independiente. El diseño atraerá la atención del consumidor y brindará una experiencia positiva para el usuario.",
      photo: require("./img/logo404.jpeg"),
      photoFull: require("./img/logo404.jpeg"),
      link: "https://github.com/Equipo-404",
      buttonName: "GitHub"
    },
    { //Alberto Frausto
      name: "Alberto Frausto",
      title: "Scrum Master / Equipo de Desarrollo",
      description: "John Doe is a highly skilled software engineer with over 10 years of experience in the industry. He is well-versed in various programming languages and has a proven track record of delivering high-quality software projects on time and within budget.",
      photo: require("./img/alberto.jpg"),
      photoFull: require("./img/photo-full/alberto-full.jpg"),
      link: "https://www.linkedin.com/in/alberto-frausto/",
      buttonName: "LinkedIn"
    },
    { //Manuel Galvan
      name: "Manuel Galvan",
      title: "Equipo de Desarrollo",
      description: "Soy jalisciense de corazón y nacimiento, tengo 21 años. Soy un desarrollador Java Full Stack Junior. Mi primer acercamiento a la programación fue gracias a Generation México a finales de 2022, y desde entonces estoy enamorado de ella. Me encanta diseñar cosas nuevas y mi meta es desempeñarme como programador senior en 5 años.",
      photo: require("./img/manuel.png"),
      photoFull: require("./img/photo-full/manuel-full.jpg"),
      link: "https://www.linkedin.com/in/usernamemanuelgalvanjau/",
      buttonName: "LinkedIn"
    },
    { //Leonardo Miranda
      name: "Leonardo Miranda",
      title: "Equipo de Desarrollo",
      description: "Soy originario de Saltillo, Coahuila, México y tengo 24 años. Soy licenciado en Mercadotecnia y aún estoy estudiando en Generation México hasta marzo de 2023. Me gusta hacer ejercicio, estar con mis amigos y conocer gente nueva. Me encanta programar y mis objetivos a corto plazo son convertirme en un desarrollador Java Full Stack Junior y a largo plazo ser un Senior, con el fin de tener un estilo de vida cómodo que me permita desarrollar mi persona.",
      photo: require("./img/leonardo.jpg"),
      photoFull: require("./img/photo-full/leonardo-full.jpg"),
      link: "https://www.linkedin.com/in/leonardo-daniel-miranda-ibarra-0079b5259/",
      buttonName: "LinkedIn"
    },
    { //Pavel Olague
      name: "Pavel Olague",
      title: "Equipo de Desarrollo",
      description: "Mi nombre es Pavel Oswaldo Olage Gallegos y soy tapatío con orgullo. Actualmente tengo 23 años y estoy en mi último semestre de Ingeniería en Informática. Me apasiona la tecnología en general y disfruto programar y diseñar. Mi meta es desempeñarme pronto como desarrollador y/o diseñador de experiencia de usuario en la industria informática para ir cumpliendo poco a poco mis objetivos de vida.",
      photo: require("./img/pavel.jpg"),
      photoFull: require("./img/photo-full/pavel-full.jpg"),
      link: "https://www.linkedin.com/in/pavelosw/",
      buttonName: "LinkedIn"
    },
    { //Marcos Mar
      name: "Marcos Mar",
      title: "Equipo de Desarrollo",
      description: "Mi nombre es Marcos Abel Mar Baza y acabo de graduarme como ingeniero en Tecnologías de Software y estoy en proceso de titulación. Mi objetivo es desarrollarme en el área de las tecnologías de la información como programador Java Full Stack. Me considero una persona honesta, respetuosa y optimista con ganas de superación tanto personal como laboral.",
      photo: require("./img/marcos.png"),
      photoFull: require("./img/photo-full/marcos-full.png"),
      link: "https://www.linkedin.com/in/marcos-abel-mar-baza-a2872321a/",
      buttonName: "LinkedIn"
    },
    { //Stephano Gomez
      name: "Stephano Gomez",
      title: "Equipo de Desarrollo",
      description: "Mi nombre es José Stephano Gómez Ilizaliturri y soy estudiante de Ingeniería Mecánica. He tenido distintos retos en mi camino académico, pero la programación ha sido uno de los más satisfactorios, ya que es una noble área con una gran comunidad y ofrece un camino abierto a la imaginación. Actualmente, estoy cursando el Bootcamp de Generation México para obtener una certificación en Java Full Stack.",
      photo: require("./img/stephano.jpg"),
      photoFull: require("./img/photo-full/stephano-full.png"),
      link: "https://www.linkedin.com/in/jose-stephano-gomez-ilizaliturri-07b2a525b/",
      buttonName: "LinkedIn"
    },
    { //Miriam Salgado
      name: "Miriam Salgado",
      title: "Scrum Master / Equipo de Desarrollo",
      description: "Mi nombre es Miriam Salgado y soy egresada de la carrera de Ingeniería en Biotecnología. Después de concluir mis estudios, trabajé en la industria farmacéutica y tengo experiencia en la docencia, habiendo sido profesora de ciencias, ingeniería genética y biología molecular. He participado en proyectos de investigación y desarrollo, lo que ha sido un importante reto para mi crecimiento personal y profesional. Me considero una persona apasionada por la capacitación continua y la obtención de conocimientos técnicos. Por eso, actualmente estoy en camino de convertirme en desarrolladora web, específicamente como desarrolladora Java Full Stack. Como parte de mi proyecto para entrar a la industria de programación, actualmente formo parte del equipo de desarrollo encargado de crear la página web para la marca Luca Santorini",
      photo: require("./img/miriam.jpg"),
      photoFull: require("./img/photo-full/miriam-full.jpg"),
      link: "https://www.linkedin.com/in/miriamsalgado/",
      buttonName: "LinkedIn"
    },
  ];

  return (
    <Container fluid="fluid">
      <Row lg="2" sm="1">

        <Col className="red-circle-media">
          <div className="red-circle">
            <img src={person.photoFull} alt={person.name} />
          </div>
        </Col>

        <Col>
          <div className="text-section">
            <h1>{person.name}</h1>
            <h4>{person.title}</h4>
            <p>{person.description}</p>
            <Button color="primary" href={person.link}>
              {person.buttonName}
            </Button>
          </div>
        </Col>
      </Row>

      <div className="person-photos">
        <Row>
          {people.map((person, index) => (
            <Col>
              <div key={index} className="person-photo" onClick={() => setPerson(person)}>
                <img className="prueba" src={person.photo} alt={person.name} title={person.name} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

    </Container >
  );
};

export default About404;