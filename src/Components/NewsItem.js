

const NewsItem =(props)=>{
  



    
   
    let {title,desc,imgURL,newsURL,author,date,source}=props
   let  d=new Date(date).toGMTString();
    // let da=d.toLocaleTimeString()
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <p style={{position:"absolute",padding:3,right:-16,top:-10,backgroundColor:"blue",color:"wheat",borderRadius:10}} >{source}</p>
      <img src={imgURL} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text"><small className="text-muted">By {author==null?"anonymous":author}</small></p>
        <p className="card-text"><small className="text-muted">Date {d}</small></p>
        <a target="_blank" rel="noreferrer" href={newsURL} className="btn btn-primary">Read More...</a>
      </div>
    </div></div>
    )
  }


export default NewsItem