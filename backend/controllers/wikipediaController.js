const axios = require('axios');
const searchModel=require('../model/searchModel')

const searchWikipedia = async (req, res) => {
    const { searchTerm } = req.params;
  
    try {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          srsearch: searchTerm,
        },
      });
  
        const searchResults = response.data.query.search;
         await searchModel.create({ searchkeyword: searchTerm });
      res.json(searchResults);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const readWikipedia = async (req, res) => {
  const { slug } = req.params;

  try {
    const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        exintro: true,
        titles: slug,
      },
    });

    const page = Object.values(response.data.query.pages)[0];
    const result = {
      title: page.title,
      htmlContent: page.extract,
      };
      console.log("result",result);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const dashboard = async (req, res) => {
  
    try {
        const result= await searchModel.find()
        res.json(result)
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  searchWikipedia,
    readWikipedia,
    dashboard
};
