
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/uv", async (req, res) => {
    const targetUrl = req.query.url;
    if(!targetUrl) return res.status(400).send("Missing url parameter");
    try {
        const response = await fetch(targetUrl);
        const html = await response.text();
        res.send(html);
    } catch(err) {
        res.status(500).send("Error fetching the requested URL");
    }
});

app.listen(PORT, () => console.log(`UV backend running on port ${PORT}`));
