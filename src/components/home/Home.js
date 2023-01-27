import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Header';
import Card from './Card';
import './Home.css';

const Home = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=65cddcd7ba7a4d4fb7724e4fad415aaa";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const { articles } = json;
        setArticle(articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='home'>
        {article?.map((news, idx) => (
          <Card key={idx} news={news} />
        ))}
      </div>
    </>


  )
}

export default Home;