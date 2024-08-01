// components/ScrollVideo.tsx
import { useEffect, useRef } from "react";
import throttle from "lodash/throttle";

interface ScrollVideoProps {
	videoSrc: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ videoSrc }) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleScroll = throttle(() => {
		const video = videoRef.current;
		if (video) {
			const scrollPercentage =
				window.scrollY /
				(document.documentElement.scrollHeight - window.innerHeight);
			const videoDuration = video.duration;
			video.currentTime = scrollPercentage * videoDuration;
		}
	}, 50);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<video
			ref={videoRef}
			src={videoSrc}
			muted
			loop
			className="w-screen h-auto fixed top-0 left-0 pointer-events-none z-50" // Increase z-index to 50
		/>
	);
};

export default ScrollVideo;
