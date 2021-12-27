import { useSpring, animated } from 'react-spring';

export default function About(){

	const slideInRight = useSpring({
	  from: { opacity: 0, scale: 0, x: 1000 },
	  to: { opacity: 1, scale:1, x: 0 },
	  delay: 280
	})

	const slideInLeft = useSpring({
	  from: { opacity: 0, scale: 0, x: -1000 },
	  to: { opacity: 1, scale:1, x: 0 },
	  delay: 280
	})

	return(
		<div className="font-link">
			<header className="page-water-bg about-header justify-content-center flex-column">
				<animated.h1 style={slideInRight} className="text-white text-center">Geodor Ruales</animated.h1>
				<animated.section style={slideInLeft} className="text-center text-white align-items-center p-4 border-top about-section-level">
					<p>Looking back I never really thought that I would like making stuff like this... I was usually just sulking around studying for the next exams or waiting for my friends to come over and just go someplace.</p>
					<p>I'm glad I picked up my old C++ compiler and just went and decided to learn programming again. I would have never made websites like <a href="https://gandor999.github.io/webportfolio/" target="_blank">this</a> and to say that I'm glad that I did hehe.</p>
					<p>Hello World!</p>
					<p>My name is Geodor. Born from the city of Dumaguete, I'm a guy that likes not just web development but also video games. My all time favourite right now is a game called Sekiro and Monster Hunter. Both games are pretty hard to play... but that's what makes it fun hehe.</p>
				</animated.section>
			</header>
		</div>
	)
}