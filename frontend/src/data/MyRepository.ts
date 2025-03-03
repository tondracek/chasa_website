import yaml from 'js-yaml';

class MyRepository {
    public async getGalleryImagesUrls(): Promise<string[]> {
        try {
            const response = await fetch("https://res.cloudinary.com/des4ugdwx/image/list/galerie.json");
            console.log("Response:", response);

            const data = await response.json();

            return data.resources.map((resource: any) => {
                return `https://res.cloudinary.com/des4ugdwx/image/upload/v${resource.version}/${resource.public_id}.${resource.format}`;
            });
        } catch (error) {
            console.error("Error fetching image URLs:", error);
            return [];
        }
    }

    public async getGalleryThumbnailImagesUrls(): Promise<string[]> {
        try {
            const response = await fetch("https://res.cloudinary.com/des4ugdwx/image/list/galerie.json");
            console.log("Response:", response);

            const data = await response.json();

            return data.resources.map((resource: any) => {
                return `https://res.cloudinary.com/des4ugdwx/image/upload/w_300/v${resource.version}/${resource.public_id}.${resource.format}`;
            });
        } catch (error) {
            console.error("Error fetching image URLs:", error);
            return [];
        }
    }

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
