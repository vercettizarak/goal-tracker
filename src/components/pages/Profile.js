import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import ProfileEditor from '../layout/Editor/ProfileEditor';

const Profile = () => {
  return (
    <div>
      <div className='container '>
        <div className='row'>
          <div className='col-md-3 text-center mt-5 mb-4'>
            {' '}
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <ProfileEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
