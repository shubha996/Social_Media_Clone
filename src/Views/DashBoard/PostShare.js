import React from 'react'
import { TextField, Button } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { grey } from '@mui/material/colors';

const PostShare = () => {
  return (
    <>
        <div className='w-[40vw] p-4 rounded-2xl bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)]'>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Share your Post"
                    multiline
                    rows={2}
                    placeholder="Enter Your Text"
                    fullWidth
                    size="small"
                />
                <div className='flex justify-evenly mt-2'>
                    <div>
                        <Button variant='contained' sx={{backgroundColor: grey[500]}}>Live Video <VideocamIcon className='pl-1'/></Button>
                    </div>
                    <div>
                        <Button variant='contained' sx={{backgroundColor: grey[500]}}>Photo and Video <AddAPhotoIcon className='pl-1'/></Button>
                    </div>
                    <div>
                        <Button variant='contained' sx={{backgroundColor: grey[500]}}>Feeling / Activity <AddReactionIcon className='pl-1'/></Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PostShare