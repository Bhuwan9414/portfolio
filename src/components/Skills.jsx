export default function () {
  return (
    <div className="mt-15 mb-10">
      <div className="text-white text-5xl flex justify-center  mb-7 font-semibold">
        Skills & Proficiencies
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white p-20 m-5">
        <div className="bg-[#111827] rounded-lg w-full w-[300px] min-h-[350px] p-6 shadow-lg border-white-500 border-1 rounded-xl">
          <h1 className="flex justify-center text-4xl font-semibold mb-5">
            Languages
          </h1>
          <ul className="list-disc list-inside space-y-1">
            <li>Javascript</li>
            <li>C++</li>
            <li>C</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-lg w-full w-[300px] min-h-[350px] p-6 shadow-lg border-white-500 border-1 rounded-xl">
          <h1 className="flex justify-center text-4xl font-semibold mb-5">
            Frameworks
          </h1>
          <ul className="list-disc list-inside space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

         <div className="bg-[#111827] rounded-lg w-full w-[300px] min-h-[350px] p-6 shadow-lg border-white-500 border-1 rounded-xl">
          <h1 className="flex justify-center text-4xl font-semibold mb-5">
            Devops & Tools
          </h1>
          <ul className="list-disc list-inside space-y-1">
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>
            <li>Ubuntu</li>
            <li>Ansible</li>
            <li>Terrafrom</li>
            <li>AWS</li>
          </ul>
        </div>

         <div className="bg-[#111827] rounded-lg w-full w-[300px] min-h-[350px] p-6 shadow-lg border-white-500 border-1 rounded-xl">
          <h1 className="flex justify-center text-4xl font-semibold mb-5">
            Databases
          </h1>
          <ul className="list-disc list-inside space-y-1">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="bg-[#111827] rounded-lg w-full w-[300px] min-h-[350px] p-6 shadow-lg border-white-500 border-1 rounded-xl">
          <h1 className="flex justify-center text-4xl font-semibold mb-5">
            Utilities & Tools
          </h1>
          <ul className="list-disc list-inside space-y-1">
            <li>Postman</li>
            <li>Canva</li>
            <li>REST API</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}