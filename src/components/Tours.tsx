import TourCard from "./TourCard";
import tour1 from '../assets/tour-1.jpeg'
import tour2 from '../assets/tour-2.jpeg'
import tour3 from '../assets/tour-3.jpeg'
import tour4 from '../assets/tour-4.jpeg'


const Tours = () => {

  const tours = [
    {
      img: tour1,
      tourDate: 'August 26th, 2020',
      title: 'Tibet Adventures',
      description: 'lorem',
      country: 'china',
      tourDuration: '6 days',
      price: 'from $2100'
    },
    {
      img: tour2,
      tourDate: 'October, 11th, 2020',
      title: 'Best of Java',
      description: 'lorem',
      country: 'indonesia',
      tourDuration: '1 days',
      price: 'from $1400'
    },
    {
      img: tour3,
      tourDate: 'October, 15th, 2020',
      title: 'Explore Hongkong',
      description: 'lorem',
      country: 'Hong kong',
      tourDuration: '8 days',
      price: 'from $5000'
    }, {
      img: tour4,
      tourDate: 'December 15h, 20119',
      title: 'Kenya Highlights',
      description: 'lorem',
      country: 'indonesia',
      tourDuration: '20 days',
      price: 'from $3300'
    }
  ];
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        {
          tours.map((tour) => {
            return (<TourCard {...tour}/>)
          })
        }
      </div>
    </section>
  )
}

 export default Tours;