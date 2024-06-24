import default_img from '../assets/default.jpg'

function Profile({img=default_img, name='HỌ VÀ TÊN', uni='ĐẠI HỌC', year_grad='NĂM TỐT NGHIỆP', position='VỊ TRÍ', gen='NHIỆM KỲ', linkedin='LINKEDIN'}) {
    return (
        <div className="profile">
            <img src={img} alt='TMH' className='profile-img'></img>
            <p className="profile-name">{name}</p>
            <p className="profile-info">{uni} ({year_grad})</p>
            <p className="profile-info">{position} - {gen}</p>
            <p className="profile-info">{linkedin}</p>
        </div>
    )
}

export default Profile