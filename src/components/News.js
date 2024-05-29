import React, { Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  
  static defaultProps={
    country: 'in',
    pageSize: 5,
    category:'general'
    }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  //first constructer will get executed than the render part
  constructor(props){
    super(props);
    //console.log("hello i am a constructor from News Component");
    this.state={
      articles : [],
      loading : true,
      page:1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-Aaj Ki Khabar`;
  }
  //componentDidMount gets executed after the render
  //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  async updateNews(){
    this.props.setProgress(10);
    //console.log("cdm");
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=823395b18fc2447fa8e858e2b108a1c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
   // console.log(parsedData);
   this.setState({
    articles : parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.setState({page:this.state.page+1});
    this.updateNews();
  }
  //  handlePrevClick=async()=>{
  //    this.setState({page:this.state.page-1});
  //    this.updateNews();
  // }
  //  handleNextClick=async()=>{
  // this.setState({page:this.state.page+1});
  // this.updateNews();
  // }
  fetchMoreData = async() => {
    // this.setState({page:this.state.page+1})
    this.setState({page:this.state.page+1})
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=823395b18fc2447fa8e858e2b108a1c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    // this.setState({loading : true});
    let data = await fetch(url);
    let parsedData=await data.json();
   // console.log(parsedData);
   this.setState({
    articles : this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    })
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin:'60px 0px'}}>Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h1>
         
         {this.state.loading &&<Spinner/>}
         <InfiniteScroll
          dataLength={this.state./*items*/articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
         <div className="row">
         {/*!this.state.loading &&*/ this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
               </div>
         })}
         </div>
         </div>
         </InfiniteScroll>
         {/* <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div> */}
      </>
    )
  }
}
export default News




//for a function based component


//import React,{useEffect,useState}from 'react'
//use
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
// const News=(props)=>{
  // const[articles,setArticles]=useState({})
  // const[loading,setLoading]=useState(true)
  // const[page,setPage]=useState(1)
  // const[totalResults,setTotalResults]=useState(0)


//   const capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//   const updateNews=aync()=>{
//     props.setProgress(10);
//     const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=823395b18fc2447fa8e858e2b108a1c9&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true);

//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData=await data.json();
//     props.setProgress(70);
      //  setArticles(parsedData.articles)
      //  setTotalResults(parsedData.totalResults)
      //  setLoading(false)
//     props.setProgress(100);
//   }

//useEffect will do the work of componentDidMount
        // useEffect(()=>{
        //   setPage(page+1);
          //     document.title=`${capitalizeFirstLetter(this.props.category)}-Aaj Ki Khabar`;
        //   updateNews();
        
        // },[])
    
//  const  fetchMoreData = async() => {
//     setPage(page+1)
//     const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=823395b18fc2447fa8e858e2b108a1c9&page=${page}&pageSize=${props.pageSize}`;
//     // this.setState({loading : true});
//     let data = await fetch(url);
//     let parsedData=await data.json();
        // setArticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
//   };
//   
//     return (
//       <>
//         <h1 className="text-center" style={{margin:'30px 0px'}}>Top Headlines - {capitalizeFirstLetter(props.category)}</h1>
         
//          {loading &&<Spinner/>}
//          <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//          <div className="row">
//          {/*!loading &&*/ articles.map((element)=>{
//              return <div className="col-md-4" key={element.url}>
//                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                </div>
//          })}
//          </div>
//          </div>
//          </InfiniteScroll>
//       </>
//     )
//   }

//for a function based we write the defaultProps and propTypes at the end and instead of static we will write News.

//   News.defaultProps={
//     country: 'in',
//     pageSize: 5,
//     category:'general'
//     }
//   News.propTypes={
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }
// export default News
