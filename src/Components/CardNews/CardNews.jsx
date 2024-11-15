import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import'./CardNews.css'
import News1 from '../../assets/images/blogThumb1_2.webp'
import News2 from '../../assets/images/blogThumb1_1.webp'
import News3 from '../../assets/images/blogThumb1_3.webp'
import feedNews1 from '../../assets/images/blogProfile1_2.webp'
import feedNews2 from '../../assets/images/blogProfile1_1.webp'
import feedNews3 from '../../assets/images/blogProfile1_3.webp'

export default function CardNews() {
    const cardData = [
      {
        imageSrc: News1,
        type: 'Uncategorized',
        date: 'November 15, 2024',
        title: 'Best And Fastest Data Server Ever',
        author: 'Admin',
        lastSpanText: 'Read More',
        personimg:feedNews1,
      },
      {
        imageSrc: News2,
        type: 'Health',
        date: 'November 14, 2024',
        title: 'Life Wont One Beast Air Over Above All',
        author: 'John Doe',
        lastSpanText: 'Discover More',
        personimg:feedNews2,
      },
      {
        imageSrc: News3,
        type: 'Finance',
        date: 'November 13, 2024',
        title: 'Attentive Was Born In 2015 Help Sales Teams',
        author: 'Jane Smith',
        lastSpanText: 'Learn More',
        personimg:feedNews3,
      },
    ];
  
    return (
      <div className="container contain-card pt-5">
        <div className="all-card">
          {cardData.map((card, index) => (
            <div key={index} className="card">
                <img src={card.imageSrc} alt="News" className="news-img" />
                <div className="feed-card">
                  <div className="d-flex justify-content-between">
                    <button className="but-card">{card.type}</button>
                    <p>{card.date}</p>
                  </div>
                  <h4 className="pt-2">{card.title}</h4>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex pt-2">
                      <img src={card.personimg} alt="Author" />
                      <div>
                        <h5>{card.author}</h5>
                        <span>{card.lastSpanText}</span>
                      </div>
                    </div>
                    <button className="last-but-card">
                      <HiOutlineArrowLongRight />
                    </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
