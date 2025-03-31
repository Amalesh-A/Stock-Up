import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#1e1b4b] text-white font-sans">
      {/* Left side */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-b from-[#312e81] to-[#1e1b4b] px-10">
        <h1 className="text-4xl font-bold mb-6">Capturing Moments, <br /> Creating Memories</h1>
        <p className="text-sm opacity-70">Make informed stock decisions with StockUp.</p>
      </div>

      {/* Right side - form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 bg-[#0f172a]">
        <RegisterForm />
      </div>
    </div>
  );
}
