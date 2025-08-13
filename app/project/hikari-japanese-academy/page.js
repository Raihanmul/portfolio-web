export default function hikariPreview() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-[50px] md:p-[200px] h-fit bg-[#123458]">
      <div className="flex flex-col items-center justify-center gap-7 text-center">
        <h1 className="grotesk text-5xl font-bold mt-[100px] md:mt-0">Design Preview</h1>
        <h2 className="text-3xl mb-6 spline">Hikari Japanese Academy</h2>
      </div>
      <img
        src="/images/hikari-full-preview.png"
        alt="Hikari Japanese Academy Preview"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}
