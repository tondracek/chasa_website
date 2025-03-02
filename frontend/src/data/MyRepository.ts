class MyRepository {
    public async getGalleryImagesUrls(): Promise<string[]> {
        try {
            const response = await fetch("https://res.cloudinary.com/des4ugdwx/image/list/galerie.json");
            console.log("Response:", response);

            const data = await response.json();

            const imageUrls: string[] = data.resources.map((resource: any) => {
                return `https://res.cloudinary.com/des4ugdwx/image/upload/v${resource.version}/${resource.public_id}.${resource.format}`;
            });

            console.log("Fetched image URLs:", imageUrls);
            return imageUrls;
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

            const imageUrls: string[] = data.resources.map((resource: any) => {
                return `https://res.cloudinary.com/des4ugdwx/image/upload/w_300/v${resource.version}/${resource.public_id}.${resource.format}`;
            });

            console.log("Fetched image URLs:", imageUrls);
            return imageUrls;
        } catch (error) {
            console.error("Error fetching image URLs:", error);
            return [];
        }
    }

    public async getEvents(): Promise<EventData[]> {
        return new Promise((resolve) => {
            resolve([
                { name: "Dětský den", date: "31. 5. 2025" },
                { name: "Pouť", date: "9. 8. 2025" },
                { name: "Hody", date: "18.-19. 10. 2025" },
            ]);
        });
    }
}

export default new MyRepository();
