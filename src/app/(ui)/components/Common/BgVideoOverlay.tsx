
export const BgVideoOverlay = ({ videoUrl, title, desc }: { videoUrl: string, title?: string, desc?: string }) => {
    
    return (
        <div className="relative mb-10 h-screen flex items-center justify-center text-white overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover">
                <source src={`/videos${videoUrl}`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-200">
                    {desc}
                </p>
            </div>
        </div>

    )
}