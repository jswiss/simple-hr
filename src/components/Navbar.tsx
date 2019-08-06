import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Theme = {
	colors: {
		bg: `#fff`,
		dark: `#24292e`,
		light: `#EEEEEE`,
		red: `#ff5851`,
	},
	fonts: {
		body: `IBM Plex Sans, sans-serif`,
		heading: `IBM Plex Sans, sans-serif`,
	},
};

const Nav = styled.nav`
	background: ${Theme.colors.dark};
	font-family: ${Theme.fonts.heading};
	color: ${Theme.colors.light};
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	/* position: fixed; */
	a {
		color: white;
		text-decoration: none;
	}
`;

const Ul = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
`;

const Li = styled.li`
	display: flex;
	flex: 0 0 auto;
	-webkit-box-align: center;
	-webkit-box-pack: center;
	-webkit-tap-highlight-color: transparent;
	align-items: center;
	color: #999;
	height: 100%;
	justify-content: center;
	text-decoration: none;
	-webkit-box-align: center;
	-webkit-box-pack: center;
	-webkit-tap-highlight-color: transparent;
	color: #999;
	font-size: 14px;
	height: 50px;
	justify-content: center;
	line-height: 16px;
	margin: 0 10px;
	text-decoration: none;
	white-space: nowrap;
`;

function NavBar() {
	return (
		<Nav>
			<Ul>
				<Li>
					<NavLink to="/">Home</NavLink>
				</Li>
			</Ul>
		</Nav>
	);
}

export default NavBar;
