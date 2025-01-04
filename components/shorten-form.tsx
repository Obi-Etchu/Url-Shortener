"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface ShortenFormProps{
  handleUrlShortened: ()=>void;
}
export default function ShortenForm({handleUrlShortened}: ShortenFormProps) {
    const [url, setUrl] = useState<string>('')

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault()
        console.log(url)

        try{
          const response = await fetch('/api/shorten', {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              url
            }),
          });
           await response.json()
           setUrl('')
           handleUrlShortened();
        }catch(error){
             console.error('Error Shortening URL:', error)
        }finally{

        }
    }
  return (
    <form className='mb-4' onSubmit={handleSubmit}>
        <div className='space-y-4'>
            <Input  
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='h-12' type='url' placeholder='Enter Url' required/>
            <Button className='w-full p-2 ' type='submit'>
             Shorten Url
            </Button>
        </div>
    </form>
  )
}
