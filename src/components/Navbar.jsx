

function Navbar () {

  return (
    <div className="navbar">
      <div className="navbar_box">
        <div className="navbar_page"> </div>
        <ul className="navbar_page_list">
          <li>
            Acceuil
          </li>
          <li>Panier</li>
          <li>Avis Client</li>
          <li>Contact</li>
          <li>F.A.Q</li>
        </ul>
      </div>
      <div className="navbar_switch">
        <div className="navbar_switch_lang">
          <button>french</button>
          <button>english</button>
        </div>
        <div className="navbar_switch_light">
          <button>night</button>
          <button>day</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar