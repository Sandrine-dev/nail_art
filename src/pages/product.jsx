function Products () {

  return (
      <section className="products-sheet">
          <div className="products-sheet__box">
              <div className="products-sheet__view">
                  <div className="products-sheet__img"></div>
                  <div className="products-sheet__carousel"></div>
              </div>

              <div className="products-sheet__presentation">
                  <h2 className="products-sheet__title"></h2>
                  <p className="products-sheet__price"></p>
                  <div className="products-sheet__information"></div>
                  <div className="products-sheet__actions">
                      <div className="products-sheet__size">
                          <select name="size" id="size-select">
                              <option value="">Selectionner la taille</option>
                              <option value="XS">XS</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="XXS">XXS</option>

                          </select>
                      </div>

                      <button className="button button--pink">Ajouter au Panier</button>
                  </div>
              </div>
          </div>
          <div className="products-sheet__included">
              <div className="products-sheet__included-text">
                  <h4>Ce qui est inclus</h4>
                  <ul>
                      <li>La boite de PressOnNails</li>
                      <li>Un pousse cuticule</li>
                      <li>Une lime à ongle</li>
                      <li>24 gels pads</li>
                  </ul>
              </div>
              <div className="products-sheet__included-images"></div>
          </div>
      </section>
  )
}

export default Products