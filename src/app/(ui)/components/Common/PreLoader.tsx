
export const PreLoader: React.FC<{ flag?: boolean }> = ({ flag }) => {
  return (
    <div className="z-999999 flex  items-center justify-center">
      <div className={`${flag ? "h-6 w-6 border-error" : "h-20 w-20 border-primary"} animate-spin rounded-full border-4 border-solid  border-t-transparent`}></div>
    </div>
  );
};
