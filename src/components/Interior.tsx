import ImageTextSection from "./ImageTextSection";
import { images } from '../lib/images';
import tables from '../data/tables.json';

const Interior = () => {
    return (
        <>
            {Object.entries(tables).map(([key, table]) => (
                <ImageTextSection
                    key={key}
                    description={table.description}
                    image={images[table.image]}
                    imageAlt={table.imageAlt}
                    imagePosition={table.imagePosition}
                />
            ))}
        </>
    )
}
 export default Interior;