import YouTubeEmbed from "../media/YouTubeEmbed";

interface TestimonioVideoProps {
  youtubeUrl: string;
  autoPlay?: boolean;
}

const TestimonioVideo = ({ youtubeUrl, autoPlay = true }: TestimonioVideoProps) => {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative">
          <YouTubeEmbed url={youtubeUrl} autoPlay={autoPlay} />
        </div>
      </div>
    </div>
  );
};

export default TestimonioVideo;
