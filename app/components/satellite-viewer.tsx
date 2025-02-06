"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function SatelliteViewer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x6b7280) // Blueish-grey background

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Sun
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32)
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Satellite
    const satelliteGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
    const satelliteMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 })
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial)
    satellite.position.set(5, 0, 0)
    scene.add(satellite)

    // Orbit
    const orbitGeometry = new THREE.RingGeometry(5, 5.1, 64)
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      opacity: 0.2,
      transparent: true,
    })
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial)
    orbit.rotation.x = Math.PI / 2
    scene.add(orbit)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    scene.add(pointLight)

    camera.position.z = 10

    // Animation
    let angle = 0
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate satellite around sun
      angle += 0.01
      satellite.position.x = Math.cos(angle) * 5
      satellite.position.z = Math.sin(angle) * 5

      // Rotate sun
      sun.rotation.y += 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

