import React from 'react';
import { Button, Center, Stack, WrapItem, Image, Text } from '@chakra-ui/react';
import './App.css';

const App = () => {
	const data = {
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png',
		full_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
	};

	return (
		<>
			<Center h="100vh" className="container">
				<Stack align="center">
					<WrapItem>
						<Image
							id="logo"
							src={data.full_logo}
							width={100}
							onMouseOver={() => updateLogo(data.full_logo)}
							onMouseLeave={() => updateLogo(data.logo)}
						/>
					</WrapItem>
					<WrapItem>
						<Text className="message">Netflix Originals</Text>
					</WrapItem>
					<WrapItem>
						<Button
							id="open-link"
							onClick={() => window.open("https://www.netflix.com/")}
						>
							Get Started
						</Button>
					</WrapItem>
				</Stack>
			</Center>
		</>
	)
}

const updateLogo = (logo) => {
	document.getElementById('logo').src = logo;
}

export default App;