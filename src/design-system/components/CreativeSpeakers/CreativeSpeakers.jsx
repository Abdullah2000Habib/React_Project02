import React from 'react'
import { SpeakersWrapper } from './Styles'

export default function CreativeSpeakers({ img, alt, name, job }) {
  return (
    <SpeakersWrapper style={{ textAlign: 'center' }}>
      <img src={img} style={{ width: '100%' }} alt={alt} />
      <h2>{name}</h2>
      <span>{job}</span>
    </SpeakersWrapper>
  )
}
