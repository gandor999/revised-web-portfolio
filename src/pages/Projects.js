import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import responsiveWeb from '../images/responsiveWeb.png'
import eCommerceAPI from '../images/eCommerceAPI.png'
import eCommerceReact from '../images/eCommerceReact.png'
import TicTacToe from '../images/TicTacToe.png'
import { useSpring, animated } from 'react-spring'

const projects = [
  {
    title: 'Static Responsive Website',
    imgSource: responsiveWeb,
    linkToProject: 'https://gandor999.github.io/static-responsive-webstie/',
    buttonText: 'Take a look!',
    shortDescription: 'This is the first website project I made with Bootstrap, CSS, and HTML.',
  },
  {
    title: 'eCommerce API',
    imgSource: eCommerceAPI,
    linkToProject: 'https://github.com/gandor999/eCommerce-API/tree/master',
    buttonText: 'Read the code',
    shortDescription:
      'This API was made using Node, Express, and Mongoose. The database used was MongoDB Atlas so this is a NoSql DB.',
  },
  {
    title: 'eCommerce Simulation Website',
    imgSource: eCommerceReact,
    linkToProject: 'https://e-commerce-client-side.vercel.app/',
    buttonText: 'Add to Cart!',
    shortDescription:
      'This is the first project that I made with React. It has CRUD operations with the admin account and CR operations for a normal user. It simulates a simple eCommerce website.',
  },
  {
    title: 'Tic Tac Toe',
    imgSource: TicTacToe,
    linkToProject: 'https://tic-tac-toe-ten-beryl.vercel.app/',
    buttonText: 'Play!',
    shortDescription:
      'This is a tic tac toe game made with React. I made this game unaware that there was react had a similar tutorial on their website. So the code may be a entirely different.',
  },
  // {
  //   title: 'Bulawan',
  //   imgSource: TicTacToe,
  //   linkToProject: 'https://tic-tac-toe-ten-beryl.vercel.app/',
  //   buttonText: 'Play!',
  //   shortDescription:
  //     'Right now this project is in an early stage of experimentation with canvas js. Not sure on what to do with this after but I was thinking of making a game with this in the future.',
  // }
]

function ProjectCard({ title, linkToProject, buttonText, shortDescription, imgSource }) {
  const calc = (x, y) => [
    // I got this code from https://antonzaharia.com/
    (y - window.innerHeight / 2) / 100,
    (x - window.innerWidth / 2) / 100,
    1.1,
  ]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, setProps] = useSpring(() => ({
    xys: [0, 0, 1],
  }))

  return (
    <Col md={6} className="p-3 d-flex justify-content-center">
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => setProps({ xys: calc(x, y) })}
        onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <Card className="card-width h-100 p-1">
          <a href={linkToProject} target="_blank">
            <Card.Img variant="top" src={imgSource} />
          </a>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text>{shortDescription}</Card.Text>
            <a href={linkToProject} target="_blank" className=" mt-auto">
              <Button variant="primary" className="w-100">
                {buttonText}
              </Button>
            </a>
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  )
}

export default function Projects() {
  const popOut = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    delay: 200,
  })

  return (
    <Container fluid className="page-coconut-bg flex-column align-items-center">
      <animated.section style={popOut} className="">
        <div className="projects-header-wrapper mt-5 rounded border border-2 border-dark justify-content-center">
          <h1 className=" text-center p-1">Projects</h1>
        </div>
      </animated.section>

      <animated.section style={popOut} className="justify-content-center container-fluid p-4">
        <Row>
          {projects.map(project => (
            <ProjectCard
              title={project.title}
              shortDescription={project.shortDescription}
              imgSource={project.imgSource}
              buttonText={project.buttonText}
              linkToProject={project.linkToProject}
            />
          ))}
        </Row>
      </animated.section>
    </Container>
  )
}
