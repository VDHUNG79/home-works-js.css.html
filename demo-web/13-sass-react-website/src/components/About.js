import React from 'react';

const About = () => {
  const [state] = React.useState({ heading: 'Who we are?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus neque excepturi, optio eum iste earum in cupiditate repellat quas, deserunt corrupti omnis porro pariatur, doloremque asperiores nulla possimus nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus neque excepturi, optio eum iste earum in cupiditate repellat quas, deserunt corrupti omnis porro pariatur, doloremque asperiores nulla possimus nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus neque excepturi, optio eum iste earum in cupiditate repellat quas, deserunt corrupti omnis porro pariatur, doloremque asperiores nulla possimus nam?' });

  const [sections] = React.useState([
    {
      id: 1,
      icon: <svg width="=2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-handbag" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1a2 2 0 0 0-2 2v2h4V3a2 2 0 0 0-2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z" />
      </svg>,
      heading: 'Digital Marketing',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>,
      heading: 'Web Development',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-layers" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z"/>
            <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"/>
          </svg>,
      heading: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>{ state.text }</p>

            </div>
          </div>
        </div>

        <div className="row mt-60">
          {sections.map(section => (
            <div className="col-4 pl-15" key={section.id}>
              <div className="about__section">
                <div className="about__section-icon">
                  {section.icon}
                </div>
                <div className="about__section-heading">
                  <h6>{section.heading}</h6>
                </div>
                <div className="about__section-text">
                  <p>{section.text}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default About
