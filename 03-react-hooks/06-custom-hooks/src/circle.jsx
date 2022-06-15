import React from 'react';

function Circle(props) {
	const title = props.title || "circle";
	const css = `@keyframes nc-loop-circle-anim-4 { to { transform: rotate(360deg); } } @keyframes nc-loop-circle-anim-4-fill { 0%, 20% { stroke-dashoffset: 0; transform: rotate(0); } 50%, 70% { stroke-dashoffset: 60; transform: rotate(270deg); } 100% { stroke-dashoffset: 0; transform: rotate(360deg); } }`;

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000" stroke="#000000">
		<g className="nc-loop-circle-anim-4-icon-o" style={{"--animation-duration":"1.4s","transformOrigin":"50% 50%","animation":"nc-loop-circle-anim-4 var(--animation-duration) infinite linear"}}>
			<circle style={{"--animation-duration":"1.4s","transformOrigin":"50% 50%"}} cx="16" cy="16" fill="none" opacity="0.2" r="14" stroke="#000000" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
			<circle style={{"--animation-duration":"1.4s","transformOrigin":"50% 50%","animation":"nc-loop-circle-anim-4-fill var(--animation-duration) infinite"}} cx="16" cy="16" fill="none" r="14" strokeDasharray="66 88" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
		</g>
		<style>{css}</style>
	</g>
</svg>
	);
};

export default Circle;