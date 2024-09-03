import axios from "axios";
import * as cheerio from "cheerio";

// Function to scrape data from a website
const scrapeData = async () => {
    const url = "https://www.sthaniya.gov.np/gis/"; // Replace with actual URL
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let results = [];

    $(".details").each((i, element) => {
        results.push({
            title: $(element).find(".a").text(),
            imageUrl: $(element).find("img").attr("src"),
            number: $(element).find(".b").text(),
        });
    });

    console.log(results);

    return results;
};

export default scrapeData;
