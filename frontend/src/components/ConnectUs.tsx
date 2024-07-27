import fb from "../assets/connect-fb.svg"
// import ins from "../assets/connect-insta.svg"
import mail from "../assets/connect-mail.svg"
// import linkedin from "../assets/connect-linkedin.svg"
import call from "../assets/connect-phone.svg"

function ConnectUs() {
    return (
    <div className="white-background">
        <p className="connect">CONNECT US VIA</p>
        <div style={{textAlign: "center"}}>
          <a href="https://www.facebook.com/toanmohinh.hanoi">
            <img src={fb} alt="fb" style={{display: "inline-block", width: "3vw", padding: "0 1vw"}}></img>
          </a>
          <a href="tel:+84855928355">
            <img src={call} alt="phone" style={{display: "inline-block", width: "3vw", padding: "0 1vw", textAlign: 'center'}}></img>
          </a>
          <a href="mailto:contact.toanmohinh@gmail.com">
            <img src={mail} alt="mail" style={{display: "inline-block", width: "3vw", padding: "0 1vw"}}></img>
          </a>
        </div>
          <div className="copyright">
            <p>COPYRIGHT (C) 2021 TOANMOHINHVN.COM ALL RIGHT RESERVED</p>
          </div>
    </div>
    
    )
}

export default ConnectUs;