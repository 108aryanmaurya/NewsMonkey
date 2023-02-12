
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import { useEffect ,useState} from "react";

import Spinner from "./Spinner";
import PropTypes  from 'prop-types'
// LoadingBar
const News=(props)=> {
 
const[article,setarticle]=useState([])
const[loading,setloading]=useState(true)
const[totalResults,settotalResults]=useState(true)
const[page,setpage]=useState(1)
 
 const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
    
    document.title = `${capitalize(props.category)}-NewsMonkey`;
 
  useEffect(()=>{
    upadateNews();
    // eslint-disable-next-line
  },[])


 const upadateNews= async()=> {
    props.setprogress(10)
    let API_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc6ca6e26e034a0fa494d6b7769404d7&page=${page}&pagesize=${props.pageSize}`;
    setloading(true)
    props.setprogress(30)
   
    let resp = await fetch(API_URL);
    props.setprogress(50)
    let respData = await resp.json();
    props.setprogress(80)
    setarticle(respData.articles)
    settotalResults(respData.totalResults)
    setloading(false)

    
    props.setprogress(100)
  }

  const fetchMoreData = async () => {
    let API_URL = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=cc6ca6e26e034a0fa494d6b7769404d7&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    
    setpage(page+1)
    let resp = await fetch(API_URL);
    let respData = await resp.json();
    setarticle(article.concat(respData.articles))
    settotalResults(respData.totalResults)

    
  };
 
    return (
      <>
        <div className="mx-3" id="main">
          <h1 className="" style={{ textAlign: "center" ,marginTop:"100px"}}>
            NewsMonkey -Top {capitalize(props.category)} headlines
          </h1>
          {/* { loading&&<Spinner></Spinner>} */}
          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !==totalResults}
            loader={<Spinner />}
          >
            <div
              className="container my-5"
              style={{
                display: "flex",
                flexWrap: "wrap",
                rowGap: "80px",
                justifyContent: "space-evenly",
              }}
            >
              {article.map((elm) => {
                return (
                  <div key={elm.url}>
                    <NewsItem
                      title={elm.title == null ? " " : elm.title.slice(0, 45)}
                      desc={
                        elm.description == null
                          ? " "
                          : elm.description.slice(0, 88)
                      }
                      source={elm.source.name}
                      imgURL={elm.urlToImage}
                      newsURL={elm.url}
                      author={elm.author}
                      date={elm.publishedAt}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
          {/* <div className='container d-flex justify-content-between'>
     <div><button disabled={state.page+1<=1} type="button" onClick={premove} className="btn btn-dark ">&larr; Previous</button></div>
     <div><button disabled={state.page+1>Math.ceil(state.totalResults/props.pageSize)} type="button" onClick={nxtmove} className="btn btn-dark d-flex justify-content-between">Next &rarr;</button></div>
     </div> */}
        </div>
      </>
    );
  }

News.defaultProps={
      country:'us',
      pageSize:8,
      category:'general',
  }
  News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  }
export default News;
