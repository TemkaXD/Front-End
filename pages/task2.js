import { useState } from "react";

export default function task2() {
    const [grid, setGrid] = useState(true);

    const data = [
        {
            id: 1,
            title: "Test1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 2,
            title: "Test2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 3,
            title: "Test3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 4,
            title: "Test4",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
    ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Temka's TEST</h1>
            <button 
                onClick={() => setGrid(!grid)}
                className="px-4 py-2 bg-blue-500 text-white rounded
                hover:bg-blue-600 transition"
            >
                {grid ? "Жагсаалт харах руу шилжих" : "Grid view рүү шилжих"}
            </button>
        </div>
        <div
        className={grid ? "grid grid-cols-1 sm:grid-cols-2 gap-6" :
            "space-y-4"}
            >
                {data.map((items) => ( 
                    <div 
                    key={items.id}
                    className="border border-gray-200 rounded-lg shadow-sm
                    hover:shadow-md transition p-4"
                >
                    <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
                    <p className="text-gray-600">{items.description}</p>
                
            </div>
                ))}
            </div>
    </div>
  );
}