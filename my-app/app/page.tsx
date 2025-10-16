export default function Home() {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-row items-center justify-center gap-8 mt-16">
                <div id="descriptionProfil" className="w-60 text-right">
                    <h1 className="font-bold">Développeur Fullstack</h1>
                </div>
                <img
                    src="/profil.jpg"
                    alt="ProfilPic"
                    className="h-80 w-60 md:h-110 md:w-70 object-cover rounded-full shadow-lg mx-4"
                />
                <div className="w-60 text-left">
                    <p className="text-sm font-semibold text-gray-700">Texte droite</p>
                </div>
            </div>
        </div>
    );
}
