import React from 'react';
import { Link } from "react-router-dom";
import CACTUSVIDEO from './CACTUSVIDEO.mp4';

function SplashPage() {
	return (
		<div class="splash-page-content-overflow-wrapper">
			<div class="shift-content-wrapper">
				<header class="splash-page-header">
					<img src="" alt="" />
					<Link to="/login">
						<button>Login</button>
					</Link>
				</header>
				<div className="splash-page-content">
					<h1>Cactus Social</h1>
					<p>
					A sleek, secure, and transparent social media platform for software developers.
					</p>
					<div>
						<Link to="/sign-up">
							<button className="splash-page-sign-up-button">Sign Up</button>
						</Link>
						<button className="splash-page-download-button">Download</button>
					</div>
				</div>
			</div>
			<video
				className="splash-page-video"
				autoPlay
				loop
				muted
				// style={{
				// 	position: 'absolute',
				// 	width: '100%',
				// 	left: '50%',
				// 	top: '50%',
				// 	height: '100%',
				// 	objectFit: 'cover',
				// 	transform: 'translate(-50%, -50%)',
				// 	zIndex: '-1'
				// }}
			>
				<source src={CACTUSVIDEO} type="video/mp4" />
			</video>
		</div>
	);
}

export default SplashPage;