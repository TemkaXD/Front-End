import { useState } from "react";

const usersdata = [
    {id: 1, name: "Amartuvshin", email: "GOLD"},
    {id: 2, name: "Anar", email: "GOLD"},
    {id: 3, name: "Anar-Erdene", email: "GOLD"},
    {id: 4, name: "Batmend", email: "UNRANKED"},
    {id: 5, name: "Tugs-Asralt", email: "UNRANKED"},
    {id: 6, name: "B.Temuujin", email: "UNRANKED"},
    {id: 7, name: "SH.Temuujin", email: "UNRANKED"},
    {id: 8, name: "E.Temuujin", email: "RADIANT"},
    {id: 9, name: "Temuulen", email: "SILVER"},
    {id: 10, name: "Tergel", email: "IMMORTAL"},
    {id: 11, name: "Khanbileg", email: "DIAMOND"},
    {id: 12, name: "Tselmeg", email: "IRON"},
    {id: 13, name: "Choi-odser", email: "GOLD"},
    {id: 14, name: "Shine-Erdene", email: "GOLD"},
    {id: 15, name: "Enkhjav", email: "UNRANKED"},
    {id: 16, name: "Enkhtugs", email: "UNRANKED"},
    {id: 17, name: "Enkhtugs", email: "UNRANKED"},
    {id: 18, name: "Emily", email: "DIAMOND"},
    {id: 19, name: "Dalaisuren", email: "UNRANKED"},
    {id: 20, name: "Ochir-Erdene", email: "UNRANKED"},
]


export default function Users() {
    const [users, setsUsers] = useState(usersdata);
    const [search, setSearch] = useState(" ");
    const [grid, setGrid] = useState(true);
    
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log("search", search);
  console.log("filtered", filteredUsers);
  
  return(
    <div className="min-h-screen bg-black p-8">
      <button className="text-black bg-white px-4 py-2 absolute right-4 top-2" onClick={() => setGrid(!grid)}>TO GRID</button>
        <h1 className="text-2xl font-bold mb-4 text-center  text-white">
            Хэрэглэгчийн жагсаалт
        </h1>
        <div className="mb-6">
            <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Хэрэглэгчийн нэрээр хайна уу ..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
          <div className={grid ? "grid grid-cols-3 pt-8" : "space-y-4"}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-700">{user.name}</p> 
                    <p className="text-sm text-black">{user.email}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">Хэрэглэгч олдсонгүй.</p>
            )}
          </div>  
        </div>
   )
}