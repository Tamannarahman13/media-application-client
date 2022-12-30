import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate} from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddPost = () => {
  const {user }= useContext(AuthContext)
  
  const {register, handleSubmit} = useForm();

 
  const handleSignUp= (data) => {

   


  

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const postDetails = data.post
     // image upload success
     const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGKEY}`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then(data=>{
       
       const url = data.data.url


      if (data.success) {
        const userPost = {
        post:postDetails,
          images : url,
          likes: 0
        }
        // post data to server

        fetch('https://media-app-server.vercel.app/post', {
          method: 'POST',
          
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userPost),
        })
        .then(res=>res.json())
        .then(data=>toast.success('post successfully'))
        .catch(err=>toast.error(err.message))
        
      }



      }
        )
    .catch(err=>toast.error(err.message))
    

  }


  return (
    <div className="min-h-[50vh] container mx-auto">

        <div className="text-center text-2xl mt-3">Post something</div>

        {user?.uid ?   <form    onSubmit={handleSubmit(handleSignUp)} className="mt-6 text-center">



<textarea name="post"
  className="textarea textarea-warning w-2/3  h-24 m-auto inline-block"
  placeholder="type something which your mind"
  {...register("post", {
    required: "Name is Required",
  })}
></textarea>

<div class="flex items-center justify-center w-full mt-6">
  <label
    for="dropzone-file"
    class="flex flex-col items-center justify-center w-2/3 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
  >
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        aria-hidden="true"
        class="w-10 h-10 mb-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
      </svg>
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Click to upload</span> or drag and
        drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    <input name="file" id="dropzone-file" type="file" 
        {...register("image", {
          required: "Photo is Required",
        })}
    
    class="hidden" />
  </label>
</div>

<button type="submit"  class="relative my-5 inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white hover:text-black bg-gray-800 rounded-lg group">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#D9F99F] text-black rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative hover:text-black">Post</span>
</button>
</form>
:

<div className="py-48 mx-auto flex flex-col" >

<h2 className="text-5xl font-bold text-center">You Must Login First</h2>
<Link className=" bg-lime-600 text-white py-2 px-4 text-center w-20 mx-auto mt-12" to='/login'>Login</Link>

</div>

}
    
    </div>
  );
};

export default AddPost;
