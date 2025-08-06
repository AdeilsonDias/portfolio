import React from 'react'
import profilePic from '../../assets/profilePic.png'
const ProfileImage = () => {
  return (
    <div className="bouncing-wrapper">
     <img src={profilePic} alt="Adeilson Dias" style={{height:"400px",width:"400px"}} className='bouncing-image'  />
    </div>
  )
}

export default ProfileImage