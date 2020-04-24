import React, { useState } from 'react';

const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: '',
    username: '',
    email: '',
    mission: '',
  });

  const { name, username, email, mission } = profile;

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(profile);
  };

  const onSubmit = (e) => {
    if (
      name.length > 0 &&
      username.length > 0 &&
      email.length &&
      mission.length > 0
    ) {
      console.log(profile);
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div>
      <h4 className='text-primary text-center'>Profile</h4>
      <hr />
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          className='form-control w-50'
          onChange={onChange}
          name='name'
          value={name}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          className='form-control w-50'
          onChange={onChange}
          name='username'
          value={username}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='name'>Email</label>
        <input
          type='email'
          id='email'
          className='form-control w-50'
          onChange={onChange}
          name='email'
          value={email}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='name'>Mission</label>
        <input
          type='text'
          id='mission'
          className='form-control w-50'
          onChange={onChange}
          name='mission'
          value={mission}
        />
      </div>
      <button className='btn btn-primary w-25' onClick={onSubmit}>
        Save{' '}
      </button>
    </div>
  );
};

export default ProfileEditor;
