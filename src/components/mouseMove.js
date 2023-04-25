import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const MouseMoveAnimation = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(quality: 20)
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges.map(file => {
    return file.node.childImageSharp.gatsbyImageData
  })

  const index = useRef(0)
  const initialMousePosition = useRef({ x: 0, y: 0 })
  const mouseMovedThreshold = 250

  useEffect(() => {
    const container = document.querySelector(".hero")
    const imageWrappers = document.querySelectorAll(".image-wrapper")

    function unhideImagesOnMouseMove(e) {
      const currentMousePosition = { x: e.clientX, y: e.clientY }
      const distanceMoved = Math.sqrt(Math.pow(currentMousePosition.x - initialMousePosition.current.x, 2) + Math.pow(currentMousePosition.y - initialMousePosition.current.y, 2))
      if (distanceMoved > mouseMovedThreshold) {
        const prevIndex = index.current
        index.current === images.length - 1 ? (index.current = 0) : index.current++
        initialMousePosition.current = currentMousePosition
        imageWrappers[prevIndex].classList.add("hidden")
        imageWrappers[index.current].classList.remove("hidden")
      }
    }

    container.addEventListener("mousemove", e => unhideImagesOnMouseMove(e))
  }, [images])

  return (
    <div className='image-container overflow w-100 h-100 pos-rel'>
      {images &&
        images.map((source, index) => (
          <div key={index} index={index} className='image-wrapper hidden flex justify-center align-center'>
            <GatsbyImage image={source} className='image' placeholder="blurred" quality={20} />
          </div>
        ))}
    </div>
  )
}

export default MouseMoveAnimation
