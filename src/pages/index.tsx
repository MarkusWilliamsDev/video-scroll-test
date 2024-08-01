// pages/index.tsx
import ScrollVideo from "../components/ScrollVideo";

const Home: React.FC = () => {
	return (
		<main className="relative">
			<div className="h-screen bg-blue-500">First Page</div>
			<div className="h-screen bg-green-500">Second Page</div>
			<div className="h-screen bg-red-500">Third Page</div>
			<ScrollVideo videoSrc="http://www.milowerx.com/wp-content/uploads/2016/04/Zack-logo-v7.120.mp4?_=1" />
		</main>
	);
};

export default Home;

