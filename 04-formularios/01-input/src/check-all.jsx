import React from 'react';

function CheckAll(props) {
	const title = props.title || "check all";

	return (
		<svg height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g>
		<path d="M11.631,36.841,1,26l3-3,8,5L35,4l3,2L14.65,36.653a2,2,0,0,1-2.8.379A2.062,2.062,0,0,1,11.631,36.841Z" fill="#78d478"/>
		<path d="M46,13H41a1,1,0,0,1,0-2h5a1,1,0,0,1,0,2Z" fill="#aeaeae"/>
		<path d="M46,22H34a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2Z" fill="#aeaeae"/>
		<path d="M46,31H27a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2Z" fill="#aeaeae"/>
		<path d="M46,40H20a1,1,0,0,1,0-2H46a1,1,0,0,1,0,2Z" fill="#aeaeae"/>
	</g>
</svg>
	);
};

export default CheckAll;