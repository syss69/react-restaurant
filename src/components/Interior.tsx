import ImageTextSection from "./ImageTextSection";
import { images } from '../lib/images';
import tables from '../data/tables.json';

const Interior = () => {
    return (
        <div className="reveal" id="tables">
            {Object.entries(tables).map(([key, table]) => (
                <ImageTextSection
                    key={key}
                    title={table.title}
                    description={table.description}
                    image={images[table.image]}
                    imageAlt={table.imageAlt}
                    imagePosition={table.imagePosition}
                />
            ))}
        </div>
    )
}
 export default Interior;