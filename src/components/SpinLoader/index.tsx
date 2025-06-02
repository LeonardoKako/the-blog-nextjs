import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export default function SpinLoader({ className = "" }: SpinLoaderProps) {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="w-10 h-10 border-5 border-t-transparent border-cyan-600 rounded-full animate-spin "></div>
    </div>
  );
}
