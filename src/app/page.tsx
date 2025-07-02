'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SocialIcon } from '@/components/social-icon';
import { PlayIcon, TwitchIcon } from 'lucide-react';

export default function LinkPage() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4 py-10 m-0'>
      <div className='w-full max-w-md rounded-3xl overflow-hidden shadow-xl'>
        {/* Top card area */}
        <div className='bg-zinc-950/50 px-6 pt-10 pb-6 text-center'>
          <Avatar className='w-20 h-20 mx-auto mb-4 border-3 '>
            <AvatarImage
              src='/images/ghostlife.png'
              alt='promotional photo of the band ghostlife'
            />
            <AvatarFallback>GL</AvatarFallback>
          </Avatar>

          <h1 className='text-3xl mb-4 font-bold text-white'>ghostlife.</h1>
          <p className='text-md text-muted-foreground mt-1'>
            we.make.noise | anaheim.ca.
          </p>

          <div className='mt-6 space-y-3 mb-2'>
            <Button
              variant='ghost'
              size='lg'
              className='w-full justify-center'
              asChild
            >
              <a
                href='https://listen.ghostlife.co/defeat'
                target='_blank'
                rel='noopener noreferrer'
              >
                <PlayIcon />
                listen
              </a>
            </Button>
            <Button
              variant='ghost'
              size='lg'
              className='w-full justify-center'
              asChild
            >
              <a
                href='https://www.twitch.tv/ghostlifeband'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitchIcon />
                live
              </a>
            </Button>
          </div>
        </div>

        {/* Social icons bar */}
        <div className='bg-black px-6 py-6 flex justify-center gap-5 text-zinc-700 text-2xl'>
          <SocialIcon
            icon='youtube'
            href='https://www.youtube.com/@ghostlifeband'
            ariaLabel='YouTube'
          />
          <SocialIcon
            icon='tiktok'
            href='https://www.tiktok.com/@ghostlifeband'
            ariaLabel='TikTok'
          />
          <SocialIcon
            icon='instagram'
            href='https://www.instagram.com/ghostlifeband'
            ariaLabel='Instagram'
          />
          <SocialIcon
            icon='twitch'
            href='https://twitch.tv/ghostlifeband'
            ariaLabel='Twitch'
          />
          <SocialIcon
            icon='email'
            href='mailto:hello@ghostlife.co'
            ariaLabel='Email'
          />
        </div>
      </div>
    </div>
  );
}
