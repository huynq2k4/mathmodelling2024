import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import banner from "../assets/event-banner.jpg"
import ConnectUs from "../components/ConnectUs";

function Event() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return (
      <div className="event">
          <NavBar onClick={openSidebar}/>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <div className="white-background">
            {/* <div className='event-banner'></div> */}
            <img src={banner} alt='TMH' className='event-banner'></img>
            <div className='event-content' style={{margin: '0 8vw'}}>
              <div className="title" style={{paddingTop: '1vw'}}>THE 2024 MATHEMATICAL MODELING COMPETITION: LUMINANCE</div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus lorem, eleifend in dolor ac, elementum efficitur diam. Vivamus ac felis vel ante interdum vestibulum. Ut sit amet tortor lorem. Cras sodales, tellus a ultrices laoreet, tellus turpis aliquam velit, quis semper dui purus ut justo. Proin vitae efficitur odio, quis rutrum nisi. Nulla facilisis neque non libero tempus congue. Nunc nec dui purus.
              </p>
              <p>
              Nulla eget nisi faucibus, blandit tortor vitae, pulvinar justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec faucibus ultrices lorem vel posuere. In scelerisque orci lectus, sed efficitur ligula dictum quis. Nunc ut ipsum sit amet dolor venenatis feugiat et et nibh. Aenean quis enim aliquet, aliquam mi vel, suscipit elit. Integer et interdum nulla. Nunc sit amet eros mauris. Sed in vulputate elit. Donec eu nunc quam. Donec fringilla semper ante, eu rhoncus ipsum vulputate sed. Mauris eget auctor augue. Nunc malesuada ipsum eget elementum scelerisque. Vivamus venenatis leo id sagittis bibendum. Morbi blandit scelerisque leo eget iaculis.
              </p>
              <p>
              Phasellus tincidunt, magna volutpat porttitor convallis, turpis mauris accumsan risus, sit amet laoreet dui felis ut nisl. Curabitur mollis elit a lectus commodo, nec ultricies nibh ultricies. In viverra mi vitae massa suscipit, id semper diam bibendum. Aliquam id rhoncus massa. Cras faucibus mi odio, vitae ornare lacus venenatis malesuada. Nullam et justo laoreet, tempus nulla mattis, varius lectus. Quisque rutrum nulla libero, non eleifend massa pretium eget. Etiam ac auctor leo, vel commodo nibh. Duis vulputate arcu id justo convallis finibus. Etiam condimentum ullamcorper erat vel pulvinar. Curabitur quis finibus ligula.
              </p>
              <p>
              Vestibulum sodales mollis lectus a pulvinar. Sed in lacinia tellus. Proin ultrices erat urna, imperdiet porttitor est vulputate dapibus. Duis nec luctus neque. Aliquam erat volutpat. Praesent ullamcorper lorem ac sapien eleifend iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae laoreet purus. Quisque aliquet semper eros in consectetur. Etiam bibendum metus in leo eleifend, a dapibus lectus pulvinar. Donec ullamcorper, ante nec porta varius, sapien massa sodales leo, id eleifend augue metus eu enim. Curabitur mollis mauris vel nulla gravida, a lacinia eros interdum. Suspendisse faucibus vestibulum ex, ut vestibulum nisi. Curabitur ut leo vitae purus dapibus pulvinar. Fusce eget elit dapibus nisi finibus tempus sit amet a velit. Maecenas quis turpis et quam ornare rhoncus ut sed odio.
              </p>
            </div>
            <ConnectUs />
          </div>
      </div>
    )
}

export default Event