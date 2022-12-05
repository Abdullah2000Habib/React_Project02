import React from "react";
import { Jobs, Name, SpeakersWrapper } from "./Styles.jsx";

export default function CreativeSpeakers({img , alt , name ,  job}) {
  return (
    <SpeakersWrapper>
      <img src={img} alt={alt} width="100%" />
      <Name>{name}</Name>
      <Jobs>{job}</Jobs>
    </SpeakersWrapper>
  );

}
