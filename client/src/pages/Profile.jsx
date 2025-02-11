import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import TopBar from '../components/TopBar';
import ProfileCard from '../components/ProfileCard';
import FriendsCard from '../components/FriendsCard';
import Loading from '../components/Loading';
import PostCard from '../components/PostCard';
import {posts} from '../assets/data'

const Profile = () => {
  const {id}=useParams();
  const dispatch=useDispatch();
  const{user}=useSelector((state)=>state.user);
  const [userInfo,setUserInfo]= useState(user);
  const [loading,setLoading]=useState(false);

  const handleDelete =()=>{}
  const handleLikePost =()=>{}

  return (
        <>
          <div className='home w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:'>
            <TopBar/>
            <div className='w-full flex gap-2 lg:gap-4 md:pl-4 pt-5 pb-10 h-full'>

              {/* left */}
              <div className='hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-hidden'>
               <ProfileCard user={userInfo}/>
               <div className='block lg:hidden'>
                <FriendsCard  friends={userInfo?.friends}/>
               </div>
               </div>


              {/* center */}
                    <div className='flex-1 h-full bg-primary px-4 flex flex-col gap-8'>
                {loading ? (
                  <Loading/>
                ):posts?.length>0 ?(
                  posts?.map((post)=>(
                    <PostCard
                    post={post}
                    key={post?._id}
                    user={user}
                    deletePost={handleDelete}
                    likePost={handleLikePost}
                    />
                  ))
                ):(
                  <div className='flex w-full h-full items-center justify-center'>
                    <p className='text-lg text-ascent-2'>No Post Avilable</p>
                  </div>
                )
                }
              </div>

             

 
               
               {/* right */}
               <div className='hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-hidden'>
               <FriendsCard friends={userInfo?.friends}/>
               </div>
            </div>

            
          </div>
        </>
  )
}

export default Profile
