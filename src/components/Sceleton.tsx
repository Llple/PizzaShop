import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Sceleton() {
  return (
    <div>
        <ContentLoader 
    speed={16}
    width={280}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#a5b0b5"
    foregroundColor="#000000"
    
  >
    <circle cx="139" cy="138" r="120" /> 
    <rect x="20" y="270" rx="0" ry="0" width="230" height="27" /> 
    <rect x="-4" y="310" rx="22" ry="22" width="280" height="88" /> 
    <rect x="2" y="416" rx="0" ry="0" width="89" height="45" /> 
    <rect x="126" y="415" rx="27" ry="27" width="150" height="45" />
  </ContentLoader>

    </div>
  )
}
