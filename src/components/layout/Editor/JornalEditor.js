import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const JournalEditor = () => {
  return (
    <div>
      <h4 className='text-primary text-center mb-4'>My Journal</h4>
      <hr />
      <br />
      <CKEditor
        editor={ClassicEditor}
        data={`
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
        `}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <div className='clearfix my-4'>
        <button className='float-right btn btn-primary w-25'>Save </button>
      </div>
    </div>
  );
};

export default JournalEditor;
