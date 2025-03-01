class MyRepository {

    private verySecureVeryMindful = "AIzaSyAHDRJa00z_zpt6kHmtZ-IM6qW1oDpxlQY";

    private readonly FOLDER_ID = "1aJE-3Nm9IAXon6Bp-i4z8zubvXfQy4QK";
    private readonly API_URL = "https://www.googleapis.com/drive/v3/files";

    public async getGalleryImagesUrls(): Promise<string[]> {
        const url = `${this.API_URL}?q='${this.FOLDER_ID}'+in+parents+and+(mimeType contains 'image/')&key=${this.verySecureVeryMindful}`;
        console.log("Request URL:", url);

        try {
            const response = await fetch(url);
            console.log("Response:", response);

            if (!response.ok) {
                return [];
            }

            const data = await response.json();

            return data.files?.map((file: { id: string, webContentLink?: string }) =>
                `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${this.verySecureVeryMindful}`
            ) || [];
        } catch (error) {
            console.error("Error fetching images:", error);
            return [];
        }
    }

    public async getEvents(): Promise<EventData[]> {
        return [];
    }
}

export default new MyRepository();
