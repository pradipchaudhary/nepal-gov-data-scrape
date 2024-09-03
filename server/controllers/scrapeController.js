import scrapeData from "../utils/scraper.js";

export const localDetails = async (req, res) => {
    try {
        const data = await scrapeData();
        res.render("index", { data });
    } catch (error) {
        res.status(500).send("Error scraping data");
    }
};
