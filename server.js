const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Replace with your own News API key
const NEWS_API_KEY = '3d3b6532902f467c8ddfa837e00bd5a5';

app.use(express.static('public'));

app.get('/news', async (req, res) => {
    const query = req.query.q || 'latest';

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&pageSize=5&apiKey=${NEWS_API_KEY}`);
        res.json(response.data.articles);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching news');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
