import React from 'react';
import CKEditor from 'ckeditor4-react';

const JournalEditor = () => {
  return (
    <div>
      <h4 className='text-primary text-center mb-4'>My Journal</h4>

      <CKEditor
        className='border rounded mt-3'
        data='
        <h2>Day  , Date:  </h2>
        <br>
        <h3><strong>Work Summary:</strong></h3>
        <br>
        <h3><strong>Meal Summary:</strong></h3>
        <br>
        <h3><strong>Workout Summary:</strong></h3>
        <br>
        <h3><strong>What have you learned today?:</strong></h3>
        
        '
      />

      <div className='clearfix mt-4'>
        <button className='float-right btn btn-primary w-25'>Save </button>
      </div>
    </div>
  );
};

export default JournalEditor;
