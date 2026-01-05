import Logo from './Logo'

function PopUp () {

  return (
      <div className="popUp">
          <div className="popUp_box">
              <Logo></Logo>
              <div className="popUp_info">
                  <div className='popUp_info_description'></div>
                  <div className="popUp_info_form"></div>
                  <div className="popUp_info_button"></div>
              </div>
          </div>
       </div>
  )
}

export default PopUp