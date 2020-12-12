import React from 'react';

const Portfolio = () => {
  const [users] = React.useState([
    {
      id: 1,
      image: '/images/01.jpg',
      name: 'Charlie Kuku',
      expert: 'Flutter'
    },
    {
      id: 2,
      image: '/images/02.jpg',
      name: 'Hello Kitty',
      expert: 'AngularJS'
    },
    {
      id: 1,
      image: '/images/03.jpg',
      name: 'Hana Tota',
      expert: 'Ruby'
    }
  ])

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
          <div className="col-4">
            <div className="row">
              <div className="portfolio__content">
                  <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                  <h3 className="portfolio__content-h3">OUR TEAM</h3>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="row">
              {users.map(user => (
                <div className="col-4 pl-15" key={user.id}>
                  <div className="portfolio__card">
                    <div className={"portfolio__card-img"}>
                      <img src={user.image} alt="card"/>
                    </div>
                    <h5 className="portfolio__card-name">{user.name}</h5>
                    <p className="portfolio__card-expert">{user.expert}</p>
                  </div>
                </div>
              ))}

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

