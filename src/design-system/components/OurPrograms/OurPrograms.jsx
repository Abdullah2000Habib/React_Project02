import * as icon from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  IconWrapper,
  Image,
  ImageWrapper,
  OurProgramsWrapper,
} from './Styles.jsx'

export default function OurPrograms({
  img,
  time,
  roomNumber,
  title,
  name,
  description,
  alt,
}) {
  return (
    <OurProgramsWrapper>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>

      <div>
        <IconWrapper>
          <div>
            <FontAwesomeIcon size="xs" icon={icon.faClock} /> {time}
          </div>

          <div>
            <FontAwesomeIcon size="xs" icon={icon.faMapMarker} />
            <span>Room</span> {roomNumber}
          </div>
        </IconWrapper>

        <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </OurProgramsWrapper>
  )
}
