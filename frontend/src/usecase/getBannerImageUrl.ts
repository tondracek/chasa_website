export async function getBannerImageUrl() {
    const apiKey = "AIzaSyD5TQo9De2j76_RVJUUzPfeUCpZCccqzgA"; // TODO: NON SECURE
    const url = `https://www.googleapis.com/drive/v3/files/14fUKqnLMg80HB6ip4WlmP06dBODKR834?alt=media&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Failed to fetch image - response:', response);
            return null
        }
        return URL.createObjectURL(await response.blob());
    } catch (error) {
        console.error('Failed to fetch image - error:', error);
        return null;
    }
}