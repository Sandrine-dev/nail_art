function Shop () {

    return ( 
        <div className="shop">
            <section className="shop__intro">
                <h2>Notre collection</h2>
                <p>Découvrez nos press-on nails faits main, pensés pour sublimer toutes les envies.</p>
            </section>

            <section className="shop__selection">
                <div className="shop__filter">
                    <label htmlFor="height-select" className="sr-only">Longueur</label>
                    <select name="height" id="height-select">
                        <option value="">Sélectionner la longueur</option>
                        <option value="XXS">Extra extra court</option>
                        <option value="XS">Extra court</option>
                        <option value="S">Court</option>
                        <option value="M">Moyen</option>
                        <option value="L">Long</option>
                        <option value="XL">Extra long</option>
                    </select>
                </div>

                <div className="shop__filter">
                    <label htmlFor="forme-select" className="sr-only">Forme</label>
                    <select name="forme" id="forme-select">
                        <option value="">Sélectionner la forme</option>
                        <option value="Amande">Amande</option>
                        <option value="Carre">Carré</option>
                        <option value="Coffin">Coffin</option>
                        <option value="Oval">Oval</option>
                        <option value="Stiletto">Stiletto</option>
                    </select>
                </div>

                <div className="shop__filter">
                    <label htmlFor="color-select" className="sr-only">Couleur</label>
                    <select name="color" id="color-select">
                    <option value="">Sélectionner la couleur</option>
                        <option value="Blanc">Blanc</option>
                        <option value="Bleu">Bleu</option>
                        <option value="Nude">Nude</option>
                        <option value="Pastel">Pastel</option>
                        <option value="Orange">Orange</option>
                        <option value="Rose">Rose</option>
                        <option value="Rouge">Rouge</option>
                        <option value="Vert">Vert</option>
                        <option value="Violet">Violet</option>
                    </select>
                </div>

                <div className="shop__filter">
                    <label htmlFor="price-select" className="sr-only">Prix</label>
                    <select name="price" id="price-select">
                        <option value="">Sélectionner le prix</option>
                        <option value="25-35">25 € / 35 €</option>
                        <option value="35-45">35 € / 45 €</option>
                        <option value="45-55">45 € / 55 €</option>
                        <option value="55+">+ 55 €</option>
                    </select>
                </div>
            </section>

            <section className="shop__products">
                <div className="shop__container">
                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>
                    
                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>

                    <div className="shop__card">
                        <div className="shop__img"></div>
                        <div className="shop__name"></div>
                        <div className="shop__price"></div>
                    </div>
                </div>

                <div className="shop__pagination">
                    <ul className="shop__pagination-list">
                        <li className="shop__pagination-item">1</li>
                        <li className="shop__pagination-item">2</li>
                        <li className="shop__pagination-item">3</li>
                    </ul>
                </div>
            </section>
      </div>
   )
}

export default Shop