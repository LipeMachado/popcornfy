import './App.css';
import React, { useEffect, useState } from 'react';
import Tmbd from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
// import Main from './components/Main';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect( () => {
    const loadAll = async () => {
        // Pegando a lista Total
        let list = await Tmbd.getHomeList();
        setMovieList(list);

        // Pegando o featured
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmbd.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect( () => {
    const scrollListener = () => {
        if(window.scrollY > 100) {
          setBlackHeader(true);
        }else {
          setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div>
      <div className="page">
          <Header black={blackHeader} />
          
          { featuredData &&
            <FeatureMovie item={featuredData} />
          }

          <section className="lists">
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items}/>
            ))}
          </section>

          <footer>
              Desafio Provi <span role="img" aria-label="coração">❤️</span> feito por Felipe Machado<br/>
              Referência: B7Web<br/>
              Dados da API pegos do site Themoviedb.org
          </footer>

          
          {movieList.length <= 0 &&
            <div className="loading">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
            </div>
          }

      </div>
    </div>
  );
}

export default App;