export default function NovoCard({ name, img, onClick }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center gap-56 w-[auto]">
            <div
                className="relative group rounded-full transition-all duration-300"
                onClick={onClick}
                style={{ height: "210px", width: "210px" }} // Espaço fixo para o contêiner
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={img}
                        alt={name}
                        className="w-50 h-50 rounded-full shadow-lg group-hover:-translate-y-2 group-hover:border-4 group-hover:border-sky-600 transition-transform duration-300"
                    />
                </div>
            </div>
            <div>
                <h3 className="font-bold text-2xl text-white">{name}</h3>
            </div>
        </div>
    );
}
