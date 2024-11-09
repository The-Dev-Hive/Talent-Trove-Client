export default function NeonGlow() {
  return (
    <>
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse" />
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse delay-75" />
    </>
  );
}
