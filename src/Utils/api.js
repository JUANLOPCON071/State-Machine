export const fetchCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/americas');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Error al obtener países:", error);
        throw error;
    }
};