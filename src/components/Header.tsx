
const Header = () => {
return (
<header className="bg-white shadow-sm sticky top-0 z-30 w-full" >
    <div className="container mx-auto px-4 py-3 flex justify-between">
        <div className="text-xl font-semibold">Restaurant</div>
        <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-red-700">À propos</a>
            <a href="#menu" className="hover:text-red-700">Menu</a>
            <a href="#gallery" className="hover:text-red-700">Galerie</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded bg-brandPink">Menu</button>
    </div>
</header>
)
}
export default Header;