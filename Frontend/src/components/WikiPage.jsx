import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card ,CircularProgress} from '@mui/material';

const WikiPage = () => {
    const { slug } = useParams();
    const navigate=useNavigate()
    const [htmlContent, setHtmlContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const backToPreviousPage = () => {
        navigate('/wiki')
        
    }

  useEffect(() => {
    const fetchWikiPage = async () => {
      try {
          const response = await axios.get(`http://localhost:5000/api/wikipedia/read/${slug}`);
          setHtmlContent(response.data);
          setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchWikiPage();
  }, [slug]);
    
   

  return (
    <div className='page-container'>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card className="card">
          <h1 className='content-heading'>{htmlContent.title}</h1>
          <div className='content' dangerouslySetInnerHTML={{ __html: htmlContent.htmlContent }} />
          <Button variant='contained' onClick={backToPreviousPage}>⬅️ Back </Button>
        </Card>
      )}
    </div>
  );
  
};

export default WikiPage;
