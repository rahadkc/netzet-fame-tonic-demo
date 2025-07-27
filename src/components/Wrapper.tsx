type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={`mx-auto max-w-[1080px] w-full px-5 sm:px-6 lg:px-8 ${className ?? ''}`}>{children}</div>
  );
}

export default Wrapper;
