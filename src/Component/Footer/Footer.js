import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

export const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "1px",marginBottom:"-2px" }}>
		Footer
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Menu</Heading>
			<FooterLink href="#">Home</FooterLink>
			<FooterLink href="#">About us</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
		</Column>
		
		<Column>
			<Heading>City</Heading>
			<FooterLink href="#">Rajkot</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Jamnagar</FooterLink>
		
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
