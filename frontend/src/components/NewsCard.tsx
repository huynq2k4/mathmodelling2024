import default_img from '../assets/default.jpg'

function NewsCard({img=default_img, title="Title", content="Content"}) {
    return (
        <div className="news-card">
            <div className='news-card-image'>
                <img src={img} alt="News" />
            </div>
            <div className='news-card-article'>
                <h4 className='news-card-title'>{title}</h4>
                <p className='news-card-content'>{content}...</p>
                <button className='news-card-more'>Xem thêm</button>
            </div>
            
        </div>
    )
}

export default NewsCard