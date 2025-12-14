import Carousel from './Carousel'

const Gallery = () => {
    const items = new Array(9).fill(0).map((_,i) => (
        <div className="rounded-lg h-40 md:h-48 bg-red-200 flex items-end p-4">
            <div className="text-gray-500">Lorem ipsum</div>
        </div>
    ))


    return (
        <section id="gallery" className="container mx-auto px-4 py-12">
            <div className="reveal"> {/*reveal */}
                <h2 className="text-2xl font-bold mb-4">Galerie</h2>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet.</p>
                <Carousel items={items}/>
            </div>
        </section>
    )
};

export default Gallery;