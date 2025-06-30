import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { sendEmail, sendEmailWithFile } from '../service/email.service';
import { Editor } from '@tinymce/tinymce-react';

function EmailSender() {

  //editor reference for rich editor content
  const editorRef = useRef(null);


  //use state to set Email data
  const [emailData, setEmailData] = useState(
    {
      to:"",
      subject:"",
      message:"",
      file:null
    }
  )

  //handling changes in field
  function handleFieldChange(event, fieldName) {
    setEmailData({...emailData, [fieldName]:event.target.value});
  }
//seting the file
  function setFile(event) {
    setEmailData({...emailData,"file":event.target.files[0]})
    console.log(event.target.files[0]);
    
  }                                         
{/* Loader useState*/}
const [sendLoader, setSendLoader] = useState(false);



//email handle (submiting)
async function handleSubmit(event) {
  event.preventDefault();

  //email validation
  if(emailData.to == '' || emailData.subject == '' || emailData.message == '') {
    toast.error("Invalid fields !!");
    
    return;
  }
  if(!emailData.to.includes('@') || !emailData.to.includes('.')) {
        toast.error("Please enter email in proper format !!");
      return;
  }

  //sending email
  try {
    //setting loader to true ->so that it will be displayed on screen
   setSendLoader(true);
    let result;
    if(emailData.file != null) {
      result =  await sendEmailWithFile(emailData);
    }  else {
    result = await sendEmail(emailData);

    }
   console.log(`backend response: ${result.message}`);
   
    toast.success("Email Send Successfully!");

    //after sending email reset the feilds of input
    setEmailData({
      to:"",
      subject:"",
      message:"",
      file:null
    })    
  } catch (error) {
    console.log(error);
    toast.error("Error to send email");
    
  } finally {
    setSendLoader(false);
  }

  console.log(emailData);
  
}

{/*Clear the fields */}
function clear(){
  setEmailData({
      to:"",
      subject:"",
      message:"",
      file:null
    }) 
}

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='email_card md:w-1/2 w-full p-3 mx-4 md:mx-0 rounded bg-white border-0 shadow-2xl'>
            <h1 className='text-gray-800 text-2xl'>Email Sender</h1>
            <p className='text-gray-800'>Send email to your favourite person..</p>
            <form action="" onSubmit={handleSubmit}>

              {/* TO */}
                <div className="input_field m-4">
                   <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">To</label>
                    <input 
                    value={emailData.to}
                    onChange={(event) => handleFieldChange(event, "to")}
                    type="text" 
                    id="large-input" 
                    className="block w-full p-4 text-gray-800 border border-gray-500 rounded-lg bg-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter here">
                       </input>
                  </div>


              {/* SUBJECT */}

                <div className="input_field m-4">
                   <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input 
                    value={emailData.subject}
                    onChange={(event) => handleFieldChange(event, "subject")}
                    type="text"  
                    id="large-input" 
                    className="block w-full p-4 text-gray-800 border border-gray-500 rounded-lg bg-gray-100 text-base focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2"
                       placeholder="Enter here">
                       </input>
                </div>



              {/* Message */}
              <div className="form_field mt-4 border-gray-500 rounded-2xl">

                <label htmlFor="message" className="block mb-2 ml-4  text-sm font-medium text-gray-900">Your message</label>
                {/* <textarea
                value={emailData.message}
                onChange={(event) => handleFieldChange(event, "message")} 
                id="message" 
                rows="4" 
                className="block w-full p-4 text-gray-800 border border-gray-500 rounded-lg bg-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here...">

                </textarea> */}

                
                <Editor  
                    apiKey='19nsjud4n12l90ad30pyvwbocoyqnhhyvwst6wn4dfpytxay'
                     onInit={(evt, editor) => editorRef.current = editor}
                     initialValue="<p>Write your message...</p>"
                    value={emailData.message}
                  /* when values of message field is change */
                  onEditorChange={(event) => {
                    // console.log(event);
                    // console.log(editorRef.current.getContent());
                    setEmailData({...emailData, 'message':editorRef.current.getContent()});
                    
                  }}

                    init={{
                            plugins: [
                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link',
                            'lists', 'media', 'table', 'wordcount', 'mergetags', 'typography', 'exportpdf'
                          ],
                          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | mergetags exportpdf',
                          mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' }
                          ]
                        }}
                      />
              </div>


              {/* Loader */}
             {sendLoader && 
              <div className="loader flex-col gap-1 items-center flex justify-center mt-3">
                <div role="status">
                  <svg aria-hidden="true" className ="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                <h1>Sending email...</h1>
              </div>
             }
            

              {/* Buttons */}
            <div className="button_container mt-4 flex justify-center gap-3">
              {/* Submit Button */}
                <button  
                  disabled={sendLoader}
                  type="submit"
                  className='bg-blue-700 text-white hover:bg-blue-900 px-3 py-2 rounded-lg'>
                  Send Email
                </button>

              {/* Clear Button */}
                <button
                onClick={clear} 
                className='bg-red-700 text-white hover:bg-red-900 px-3 py-2 rounded-lg'>Clear</button>
            </div>


              {/* file attach Button */}
             <div className="file-attachment">
                        <input
                          type="file"
                          id="fileInput"
                          className="hidden"
                          onChange={(event) => setFile(event)}
                        />

                        <label
                          htmlFor="fileInput"
                          className="cursor-pointer m-3 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 inline-block"
                        >
                          📎 Upload File
                        </label>
             </div>
             
            </form>
        </div>
    </div>
  )
}

export default EmailSender;