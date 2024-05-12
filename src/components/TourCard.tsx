interface Props {
  img?: string,
  tourDate: string,
  title: string,
  description?: string,
  country: string,
  tourDuration: string,
  price: string
}


const TourCard = ({img, tourDate, title, country, tourDuration, price}: Props) => {
  return (

    <article className="tour-card">
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{tourDate}</p>
          </div>
          <div className="tour-info">
            <h4>{title}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {country}
              </p>
              <p>{tourDuration}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
  )
}

export default TourCard;