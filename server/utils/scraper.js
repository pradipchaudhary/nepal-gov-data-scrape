import axios from "axios";
import * as cheerio from "cheerio";

// Function to scrape data from a website
const scrapeData = async () => {
    const url = "https://www.sthaniya.gov.np/gis/"; // Replace with actual URL

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let results = [];

        $(".details").each((i, element) => {
            const title = $(element).find(".a").text().trim();
            const imageUrl = $(element).find("img").attr("src");
            const number = $(element).find(".b").text().trim();

            // Check if data is valid
            if (title && imageUrl && number) {
                results.push({ title, imageUrl, number });
            }
        });

        console.log(results);
        return results;
    } catch (error) {
        console.error("Error scraping data:", error.message);
        return [];
    }
};

export default scrapeData;
