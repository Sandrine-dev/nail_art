

function Home () {

  return (
    <>
      <section className="firstBlock">
        <div className="firstBlock__box">
          <div className="firstBlock__title">
            <h1>Trendy Nails</h1>
          </div>

          <div className="firstBlock__container">
            <article className="firstBlock__card firstBlock__card--chic">
              <img className="firstBlock__img" alt="Chic nail artwork" />
              <div className="firstBlock__content">
                <h2 className="firstBlock__content-title">Chic Artwork</h2>
                <p className="firstBlock__content-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, sit illum dolore quis eius delectus voluptates sequi aut! </p>

              </div>
              <a href="#" className="firstBlock__link">Learn More</a>
            </article>

            <article className="firstBlock__card firstBlock__card--seasonal">
              <img className="firstBlock__img" alt="Festive Manis Seasonal" />
              <div className="firstBlock__content">
                <h2 className="firstBlock__content-title">Festive Manis</h2>
                <p className="firstBlock__content-info">Quas ut facere iste. Tempora fuga eaque quibusdam, amet aliquam atque nisi?</p>

              </div>
              <a href="#" className="firstBlock__link">Learn More</a>
            </article>

            <article className="firstBlock__card firstBlock__card--diy">
              <img className="firstBlock__img" alt="DIY Nail" />
              <div className="firstBlock__content">
                <h2 className="firstBlock__content-title">DIY Nail</h2>
                <p className="firstBlock__content-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, sit illum dolore quis eius delectus voluptates sequi aut!</p>
              </div>
              <a href="#" className="firstBlock__link">Learn More</a>
            </article>

            <article className="firstBlock__card firstBlock__card--trends">
              <img className="firstBlock__img" alt="Nail Trends" />
              <div className="firstBlock__content">
                <h2 className="firstBlock__content-title">Nail Trends</h2>
                <p className="firstBlock__content-info">Quas ut facere iste. Tempora fuga eaque quibusdam, amet aliquam atque nisi?</p>
              </div>
              <a href="#" className="firstBlock__link">Learn More</a>
            </article>
          </div>
        </div>
      </section>
      
      <section className="secondBlock">
        <div className="secondBlock__box">
          <div className="secondblock__container">
            <article className="secondBlock__card secondBlock__card--info">
              <h3 className="secondBlock__title">
                Unique Looks
              </h3>
              <div className="secondBlock__list">
                <ul>
                  <li>Colors</li>
                  <li>Designs</li>
                  <li>Chic</li>
                  <li>Trendy</li>
                  <li>elegant</li>
                </ul>
              </div>
              <div className="secondBlock__Link">
                Get Inspired
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="thirdBlock">
        <div className="thirdBlock__box">
          <article className="thirdBlock__container">
            <h2 className="thirdBlock__title">Want a Nail Art</h2>
            <p className="thirdBlock__content"></p>
            <div className="thirdBlock__link">
              Get started
            </div>
          </article>
        </div>
      </section>

      <section className="fourthBlock">
        <div className="fourthBlock__box">
          <article className="fourthBlock__container">
            <div className="fourthBlock__img"></div>
            <div className="fourthBlock__link"></div>
          </article>
        </div>
      </section>

      <section className="fifthBlock">
        <div className="fifthBlock__box"></div>
      </section>
    </>
  )
}

export default Home