import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useEffect } from "react"

const MouseMoveAnimation = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges.map(file => {
    return file.node.childImageSharp
  })

  const [imageSource, setImageSource] = useState(null)
  const index = useRef(0)
  const initialMousePosition = useRef({ x: 0, y: 0 })
  const mouseMovedThreshold = 200

  useEffect(() => {
    const container = document.querySelector(".hero")
    function changeImageSourceOnMouseMove(e) {
      const currentMousePosition = { x: e.clientX, y: e.clientY }
      const distanceMoved = Math.sqrt(Math.pow(currentMousePosition.x - initialMousePosition.current.x, 2) + Math.pow(currentMousePosition.y - initialMousePosition.current.y, 2))

      if (distanceMoved > mouseMovedThreshold) {
        setImageSource(images[index.current].gatsbyImageData)
        index.current === images.length - 1 ? (index.current = 0) : index.current++
        initialMousePosition.current = currentMousePosition
      }
    }
    container.addEventListener("mousemove", e => changeImageSourceOnMouseMove(e))
  }, [images])

  return (
    <div className='image-container'>
      <div className='image-wrapper overflow'>{imageSource && <GatsbyImage image={imageSource} placeholder='dominantColour' />}</div>
    </div>
  )
}

export default MouseMoveAnimation
