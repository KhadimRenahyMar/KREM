import "./Header.scss";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import NavModal from "./NavModal/navModal";

export default function Header() {
  const isMobile = () => {
    const mobileCheck = () => {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor);
      return check;
    };
    const mobile = mobileCheck();
    return mobile;
  };

  const toggle = (e) => {
    const modal = e.currentTarget.parentElement.parentElement.childNodes[1];
    const icon = e.currentTarget.childNodes[0];
    if (modal.classList.contains("utils--hidden")) {
      modal.classList.remove("utils--hidden");
      document.body.style.overflowY = "hidden";
      icon.classList.add("active");
    } else {
      document.body.style.overflowY = "unset";
      modal.classList.add("utils--hidden");
      icon.classList.remove("active");
    }
  };

  return isMobile() ? (
    <header className="header">
      <div className="header__navBx">
        <Link to="/" className="header__logo">
          <svg
            className="header__logo-icon"
            xmlns="http://www.w3.org/2000/svg"
            data-xlink="http://www.w3.org/1999/xlink"
            width="85.54"
            height="96.676"
            viewBox="0 0 85.54 96.676"
            data-alt="Logo du site portfolio KREM"
          >
            <defs>
              <filter id="Tracé_417" x="0" y="0" width="85.54" height="96.676" filterUnits="userSpaceOnUse">
                <feOffset data-input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feFlood />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_417)">
              <text className="header__logo-icon--text" x="18" y="58" fontSize="1.5rem">
                KREM
              </text>
              <path
                className="header__logo-icon--path"
                id="Tracé_417-2"
                data-name="Tracé 417"
                d="M69.48,20.837l.056,39.453L35.325,80.065,1.058,60.388,1,20.936,35.211,1.16Z"
                transform="translate(7.5 7.73)"
                fill="none"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="5"
              />
            </g>
          </svg>
        </Link>
        <div className="header__navIcon" onClick={toggle}>
          <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </div>
      </div>
      <NavModal />
    </header>
  ) : (
    <header className="header">
      <div className="header__navBx">
        <div className="header__nav">
          <Link to="/" className="header__logo">
            <svg
              className="header__logo-icon"
              xmlns="http://www.w3.org/2000/svg"
              data-xlink="http://www.w3.org/1999/xlink"
              width="85.54"
              height="96.676"
              viewBox="0 0 85.54 96.676"
              data-alt="Logo du site portfolio KREM"
            >
              <defs>
                <filter id="Tracé_417" x="0" y="0" width="85.54" height="96.676" filterUnits="userSpaceOnUse">
                  <feOffset data-input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feFlood />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_417)">
                <text x="18" y="58" fontSize="1.5rem" fill="#f5f5f5">
                  KREM
                </text>
                <path
                  className="header__logo-icon--path"
                  id="Tracé_417-2"
                  data-name="Tracé 417"
                  d="M69.48,20.837l.056,39.453L35.325,80.065,1.058,60.388,1,20.936,35.211,1.16Z"
                  transform="translate(7.5 7.73)"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
              </g>
            </svg>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
