import React, { Component } from 'react'
//for a function based component just remove the Component written in import
import noimage from './noimage.jpg'
export class NewsItem extends Component {
  render() {
    //destructring
    //for a function based component just remove the class part and render part and make a function const NewsItem=(props)=>{ copy the return part in this and let part but replace this.props with props}
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="rounded-pill bg-danger" >{source}</span>
        </div>
           <img src={!imageUrl?noimage:imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
           <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div>
      </div>
    )
  }
}
export default NewsItem
