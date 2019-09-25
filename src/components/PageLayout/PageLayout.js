import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
	<div className='wrapper'>
		{children}
	</div>
);

const Section = ({ children, name }) => (
	<section className={name}>{ children }</section>
);
const Container = ({ children }) => (
	<div className='container'>{children}</div>
);

const Header = ({ children }) => (
	<header className='header'>{children}</header>
);

const Aside = ({ children }) => (
	<aside className='aside'>{children}</aside>
);

const Main = ({ children }) => (
	<main className='main'>{children}</main>
);

const Footer = ({ children }) => (
	<footer className='footer'>{children}</footer>
);

const PageLayout = ({
	header,
	aside,
	main,
	footer
}) => (
	<Page>
		{ header && <Header>{header}</Header> }
		{ aside && <Aside>{aside}</Aside> }
		{ main && <Main>{main}</Main> }
		{ footer && <Footer>{footer}</Footer> }
	</Page>
);
PageLayout.Page = Page;
PageLayout.Section = Section;
PageLayout.Container = Container;
PageLayout.Header = Header;
PageLayout.Aside = Aside;
PageLayout.Main = Main;
PageLayout.Footer = Footer;

export default PageLayout;

PageLayout.propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	]),
	aside: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	]),
	main: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	]),
	footer: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Header.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Aside.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Main.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Footer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Section.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	]),
	name: PropTypes.string
};
Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
Page.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array,
		PropTypes.element,
		PropTypes.elementType
	])
};
