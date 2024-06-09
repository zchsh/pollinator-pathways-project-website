"use client";

import { useRef, useState } from "react";
import IconVolumeHigh from "@/icons/icon-volume-high";
import IconVolumeMute from "@/icons/icon-volume-mute";
import IconPause from "@/icons/icon-pause";
import IconPlay from "@/icons/icon-play";
import s from "./style.module.css";
import VisuallyHidden from "@/components/visually-hidden";

export default function VideoHero({
	heading,
	videoSrc,
}: {
	heading: string;
	/* Background video. Must be an `.mp4` video file. */
	videoSrc: string;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState<boolean>(true);
	const [muted, setMuted] = useState<boolean>(true);

	const handlePlayPause = () => {
		const videoElem = videoRef.current;
		if (!videoElem) return;
		if (videoElem.paused) {
			videoElem.play();
		} else {
			videoElem.pause();
		}
	};

	return (
		<div className={s.root}>
			<div className={s.videoContainer}>
				<video
					ref={videoRef}
					onPlay={() => setPlaying(true)}
					onPause={() => setPlaying(false)}
					className={s.video}
					width="1920"
					height="1080"
					preload="none"
					autoPlay={true}
					loop
					muted={muted}
				>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className={s.pageContainer}>
				<div className={s.text}>{heading}</div>
				<div className={s.iconButtons}>
					<button className={s.iconButton} onClick={() => handlePlayPause()}>
						{playing ? (
							<>
								<IconPause />
								<VisuallyHidden>Pause</VisuallyHidden>
							</>
						) : (
							<>
								<IconPlay />
								<VisuallyHidden>Play</VisuallyHidden>
							</>
						)}
					</button>
					<button className={s.iconButton} onClick={() => setMuted(!muted)}>
						{muted ? (
							<>
								<IconVolumeMute />
								<VisuallyHidden>Unmute</VisuallyHidden>
							</>
						) : (
							<>
								<IconVolumeHigh />
								<VisuallyHidden>Mute</VisuallyHidden>
							</>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}
