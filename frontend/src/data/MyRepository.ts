import yaml from 'js-yaml';

class MyRepository {

    /** GALLERY **/

    public async getGalleryImagesUrls(): Promise<string[]> {
        try {
            const sortedData = await this.getGalleryImages();

            return sortedData.map((resource: any) =>
                `https://res.cloudinary.com/des4ugdwx/image/upload/v${resource.version}/${resource.public_id}.${resource.format}`
            );
        } catch (error) {
            console.error("[Gallery full-quality images loading] Error:", error);
            return [];
        }
    }

    public async getGalleryThumbnailImagesUrls(): Promise<string[]> {
        try {
            const sortedData = await this.getGalleryImages();

            return sortedData.map((resource: any) =>
                `https://res.cloudinary.com/des4ugdwx/image/upload/w_300/v${resource.version}/${resource.public_id}.${resource.format}`
            );
        } catch (error) {
            console.error("[Gallery Thumbnail images loading] Error:", error);
            return [];
        }
    }

    private async getGalleryImages() {
        try {
            const response = await fetch("https://res.cloudinary.com/des4ugdwx/image/list/galerie.json");
            console.log("[Gallery common images loading] response:", response);

            const data = await response.json();
            console.log("[Gallery common images loading] data:", data);

            return data.resources.sort((a: any, b: any) => compare(a, b));
        } catch (error) {
            console.error("[Gallery common images loading] Error:", error);
            return [];
        }
    }

    /** EVENTS **/

    public async getEvents(): Promise<EventData[]> {
        try {
            const response = await fetch('/events.yaml');
            const yamlText = await response.text();
            console.log("Fetched YAML text:", yamlText);

            let load = yaml.load(yamlText) as EventData[];
            console.log("Parsed YAML:", load);
            return load;
        } catch (error) {
            console.error("Error loading events from YAML:", error);
            return [];
        }
    }

    public async getPosterSrc(): Promise<string | null> {
        return "poster.jpg";
    }
}

export default new MyRepository();

function compare(a: any, b: any): number {
    try {
        return getFirstNumberInString(a.public_id) - getFirstNumberInString(b.public_id);
    } catch (error) {
        return a.created_at - b.created_at;
    }
}

function getFirstNumberInString(str: string): number {
    const match = str.match(/\d+/);
    if (match) {
        const numberPart = match[0];
        return parseInt(numberPart);
    }
}