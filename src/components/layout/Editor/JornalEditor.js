import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const JournalEditor = () => {
  const dayTemplate = `
  <h3>Day # , Date: ${new Date().getMonth()}/
  ${new Date().getDate()}/
  ${new Date().getFullYear()}:  
  </h3>
  &nbsp
  <br>
  <h4>Work Summary:</h4>
  <br>
  <h4>Meal Summary:</h4>
  <br>
  <h4>Workout Summary:</h4>
  <br>
  <h4>What have you learned today?:</h4>
  <br>
  `;
  const [day, setDay] = useState();

  const onChange = (event, editor) => {
    const data = editor.getData();
    setDay(data);
  };

  const onSubmit = () => {
    console.log(day);
    setDay(dayTemplate);
  };
  return (
    <div>
      <h4 className='text-primary text-center mb-4'>My Journal</h4>
      <hr />
      <br />
      <CKEditor editor={ClassicEditor} data={dayTemplate} onChange={onChange} />
      <div className='clearfix my-4'>
        <button className='float-right btn btn-primary w-25' onClick={onSubmit}>
          Save{' '}
        </button>
      </div>
    </div>
  );
};

export default JournalEditor;
