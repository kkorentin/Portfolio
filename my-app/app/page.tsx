export default function Home() {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-row items-center justify-center gap-8 mt-16">
                <div id="descriptionProfil" className="w-60 text-right">
                    <h1 className="font-bold">Développeur Fullstack ou Ingénieur QA</h1>
                </div>
                <img
                    src="/profil.jpg"
                    alt="ProfilPic"
                    className="h-80 w-60 md:h-110 md:w-70 object-cover rounded-full shadow-lg mx-4"
                />
                <div className="w-60 text-left">
                    <div className="text-sm text-gray-700">
                        <p className="font-semibold">Bienvenue sur mon portfolio !</p>
                        Ingénieur diplômé de l'école ISEN (2025) passionné par le numérique, je crée et améliore des applications
                        web, mobiles et des solutions d’intelligence artificielle.
                        Curieux et proactif, je développe constamment mes compétences</div>
                </div>
            </div>
        </div>
    );
}
