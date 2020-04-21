import React, { useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';

const Mission = () => {
  const authContext = useContext(AuthContext);
  const {
    user: { mission },
  } = authContext;
  return (
    <div className='border rounded border-secondary w-50 mx-auto bg-light row px-3 py-2 mb-3'>
      <h4 className='mx-auto text-light'>
        <span className='font-italic text-muted d-block-sm '>Mission:</span>
        <span className='text-info'> {mission}</span>
      </h4>
    </div>
  );
};

export default Mission;
