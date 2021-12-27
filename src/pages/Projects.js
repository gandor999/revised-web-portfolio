import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import responsiveWeb from '../images/responsiveWeb.png';
import eCommerceAPI from '../images/eCommerceAPI.png';
import eCommerceReact from '../images/eCommerceReact.png';
import TicTacToe from '../images/TicTacToe.png';
import { useSpring, animated } from 'react-spring';


export default function Projects(){

	const calc = (x, y) => [                        // I got this code from https://antonzaharia.com/
	  (y - window.innerHeight /2) / 100,
	  (x - window.innerWidth /2) / 100,
	  1.1,
	];
	const trans = (x, y, s) =>
	  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

	const popOut = useSpring({
	  from: { scale: 0 },
	  to: { scale:1 },
	  delay: 200
	})

	const [ props1, setProps1 ] = useSpring(() => ({
	  xys: [0, 0, 1],
	}));

	const [ props2, setProps2 ] = useSpring(() => ({
	  xys: [0, 0, 1],
	}));

	const [ props3, setProps3 ] = useSpring(() => ({
	  xys: [0, 0, 1],
	}));

	const [ props4, setProps4 ] = useSpring(() => ({
	  xys: [0, 0, 1],
	}));


	return (
		<Container fluid className="page-coconut-bg flex-column align-items-center">

			<animated.section style={popOut} className="">
				<div className="projects-header-wrapper mt-5 rounded border border-2 border-dark justify-content-center">
					<h1 className=" text-center p-1">
						Projects
					</h1>	
				</div>
				
			</animated.section>

			<animated.section style={popOut} className="justify-content-center container-fluid p-4">
					<Row>
						<Col md={6} className="p-3 d-flex justify-content-center">
							<animated.div
								onMouseMove={({ clientX: x, clientY: y }) => setProps1({ xys: calc(x, y) })}
								onMouseLeave={() => setProps1({ xys: [0, 0, 1] }) }
								style={{transform: props1.xys.to(trans)}}
							>
								<Card className="card-width h-100 p-1">
								  <a href="https://gandor999.github.io/static-responsive-webstie/" target="_blank"><Card.Img variant="top" src={responsiveWeb} />
								  </a>
								  <Card.Body className="d-flex flex-column">
								    <Card.Title className="text-center">Static Responsive Website</Card.Title>
								    <Card.Text>
								      This is the first website project I made with Bootstrap, CSS, and HTML.
								    </Card.Text>
								    <a href="https://gandor999.github.io/static-responsive-webstie/" target="_blank" className=" mt-auto">
								    	<Button variant="primary" className="w-100">Take a look!</Button>
								    </a> 
								  </Card.Body>
								</Card>
							</animated.div>
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<animated.div
								onMouseMove={({ clientX: x, clientY: y }) => setProps2({ xys: calc(x, y) })}
								onMouseLeave={() => setProps2({ xys: [0, 0, 1] }) }
								style={{transform: props2.xys.to(trans)}} 
							>
								<Card className="card-width h-100 p-1">
								  <a href="https://github.com/gandor999/eCommerce-API/tree/master" target="_blank">
								  	<Card.Img variant="top" src={eCommerceAPI} />
								  </a>
								  <Card.Body className="d-flex flex-column">
								    <Card.Title className="text-center">eCommerce API</Card.Title>
								    <Card.Text>
								      This API was made using Node, Express, and Mongoose. The database used was MongoDB Atlas so this is a NoSql DB. 
								    </Card.Text>
								    <a href="https://github.com/gandor999/eCommerce-API/tree/master" target="_blank" className="mt-auto">
								    	<Button variant="primary" className="w-100">Read the code</Button>
								    </a>
								  </Card.Body>
								</Card>
							</animated.div>
							
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<animated.div
								onMouseMove={({ clientX: x, clientY: y }) => setProps3({ xys: calc(x, y) })}
								onMouseLeave={() => setProps3({ xys: [0, 0, 1] }) }
								style={{transform: props3.xys.to(trans)}} 
							>
								<Card className="card-width h-100 p-1">
								  <a href="https://ecommerce-client-chi.vercel.app/" target="_blank">
								  	<Card.Img variant="top" src={eCommerceReact} />
								  </a>
								  <Card.Body className="d-flex flex-column">
								    <Card.Title className="text-center">eCommerce Simulation Website</Card.Title>
								    <Card.Text>
								      This is the first project that I made with React. It has CRUD operations with the admin account and CR operations for a normal user.

								      It simulates a simple eCommerce website.
								    </Card.Text>
								    <a href="https://ecommerce-client-chi.vercel.app/" className="mt-auto" target="_blank">
								    	<Button variant="primary" className="w-100">Add to Cart!</Button>
								    </a>
								  </Card.Body>
								</Card>
							</animated.div>
							
						</Col>

						<Col md={6} className="p-3 d-flex justify-content-center">
							<animated.div
								onMouseMove={({ clientX: x, clientY: y }) => setProps4({ xys: calc(x, y) })}
								onMouseLeave={() => setProps4({ xys: [0, 0, 1] }) }
								style={{transform: props4.xys.to(trans)}} 
							>
								<Card className="card-width h-100 p-1">
								  <a href="https://tic-tac-toe-ten-beryl.vercel.app/" target="_blank">	
								  	<Card.Img variant="top" src={TicTacToe} />
								  </a>
								  <Card.Body className="d-flex flex-column">
								    <Card.Title className="text-center">Tic Tac Toe</Card.Title>
								    <Card.Text>
								      This is a tic tac toe game made with React.
								    </Card.Text>
								    <a href="https://tic-tac-toe-ten-beryl.vercel.app/" className="mt-auto" target="_blank">
								    	<Button variant="primary" className="w-100">Play!</Button>
								    </a>
								  </Card.Body>
								</Card>
							</animated.div>
							
						</Col>
					</Row>
			</animated.section>
			
		</Container>
		
	)
}
