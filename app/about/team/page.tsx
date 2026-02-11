import React from 'react'
import Team from '@/components/About/team/Team'
import TeamHero from '@/components/About/team/TeamHero'
import LeafScrollText from '@/components/Home/LeafScrollText'
import { lines } from '../data'
const page = () => {
  return (
    <>
      <TeamHero/>
      <Team/>
      <LeafScrollText lines={lines}/>
    </>
  )
}

export default page