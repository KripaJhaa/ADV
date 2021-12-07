import styled from 'styled-components';

export const Box = styled.div`

background: black;
position: fixed;
bottom: 0;
height:12em;
width: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 100px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 3px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: green;
	transition: 100ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;
`;