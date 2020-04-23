import React from 'react';
import JournalEditor from '../layout/Editor/JornalEditor';
import Sidebar from '../layout/Sidebar/Sidebar';

const Journal = () => {
  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-3 text-center mt-5 mb-4'>
          {' '}
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <JournalEditor />
        </div>
      </div>
    </div>
  );
};

export default Journal;
