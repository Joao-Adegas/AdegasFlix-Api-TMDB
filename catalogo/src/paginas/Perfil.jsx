import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpiner/LoadingSpiner";

const profiles = [
    { id: 1, name: "João", avatar: "src/assets/imagens/avatares/SpidermanAvatar.webp" },
    { id: 2, name: "Maria", avatar: "src/assets/imagens/avatares/visionPerson.jfif" },
    { id: 3, name: "Ana", avatar: "src/assets/imagens/avatares/wandaPerson.png" },
];

export function Perfil() {
    const [loading, setLoading] = useState(true); 
    const [selectedProfile, setSelectedProfile] = useState(null); 
    const [moveToCorner, setMoveToCorner] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSelect = (profile) => {
        localStorage.setItem("user", JSON.stringify(profile));
        setSelectedProfile(profile); 
        setTimeout(() => {
            setMoveToCorner(true); 
        }, 2000); 
        setTimeout(() => {
            navigate("/filmes"); 
        }, 4000); 
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black relative">
            {loading ? (
                
                <div className="flex flex-col items-center">
                    <LoadingSpinner/>
                </div>
            ) : (
               
                <div className="flex gap-x-16">
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className={`flex flex-col items-center text-center transition-all duration-500 ${
                                selectedProfile && selectedProfile.id !== profile.id
                                    ? "opacity-0 scale-0"
                                    : ""
                            } ${
                                selectedProfile?.id === profile.id && moveToCorner
                                    ? "absolute top-4 right-4 w-[50px] h-[50px] transition-all duration-[1000ms]"
                                    : selectedProfile?.id === profile.id
                                    ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    : ""
                            }`}
                            onClick={() => handleSelect(profile)}
                        >
                            <div className="flex flex-col gap-7 items-center justify-center text-center" style={{ padding: "2rem", paddingTop: "1rem" }}>
                                <div>
                                    <img
                                        src={profile.avatar}
                                        alt={profile.name}
                                        className={`rounded-full shadow-lg transition-shadow duration-500 cursor-pointer border-none ${
                                            moveToCorner
                                                ? "w-[50px] h-[50px]" 
                                                : "w-[200px] h-[200px] hover:shadow-2xl hover:shadow-blue-500" 
                                        }`
                                    }
                                    />
                                </div>

                                <div>
                                    {!selectedProfile && (
                                        <h3 className="text-white text-3xl font-bold mt-8">
                                            {profile.name}
                                        </h3>
                                    )}
                                    {selectedProfile?.id === profile.id && !moveToCorner && (
                                        <div className="flex flex-col items-center justify-center gap-4 mt-6">
                                            <LoadingSpinner/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
