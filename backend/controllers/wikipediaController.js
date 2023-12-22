const axios = require('axios');
const searchModel = require('../model/searchModel')
const loginModel = require('../model/loginModel')
const jwt =require('jsonwebtoken')


const userLogin = async (req, res) => {
 
  const { userName, password } = req.body
  try {
    const user = await loginModel.findOne({ userName })
    if (user&&user.isAdmin) {
      const token = jwt.sign({ userName, isAdmin: true }, 'sateesh');
      res.json({ token });
    } else {
      loginModel.create({userName,password})
      res.json({message:'login success'});
    }

    
  } catch (error) {
    console.log('Error', error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
}

const searchWikipedia = async (req, res) => {
    const { searchTerm } = req.params;
  
    try {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          srsearch: searchTerm,
        }, family: 4 
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
      } ,family: 4 ,
    });

    const page = Object.values(response.data.query.pages)[0];
    const result = {
      title: page.title,
      htmlContent: page.extract,
      };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const dashboard = async (req, res) => {
    try {
      const result = await searchModel.aggregate([
        {
          $group: {
            _id: '$searchkeyword',
            count: { $sum: 1 },
            timestamps: { $push: '$timestamp' }, 
          },
        },
        {
          $sort: { count: -1 } // Sort by count in descending order
        },
      ]);
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  searchWikipedia,
  readWikipedia,
  dashboard,
  userLogin
};
