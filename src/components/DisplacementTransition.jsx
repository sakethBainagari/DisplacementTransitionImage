import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Inline base64 displacement map
const displacementBase64 = `data:image/png;base64,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
`;

// Displacement shader for morphing effect
const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture1; // Starting image
uniform sampler2D uTexture2; // Target image 
uniform sampler2D uDisplacement; // Displacement map
uniform float uProgress; // Animation progress (0-1)
uniform vec2 uResolution; // Viewport resolution
uniform float uIntensity; // Displacement intensity
uniform float uDirection; // Direction of transition (1 = open, -1 = close)
uniform float uTime; // For animated effects

varying vec2 vUv;

// Random function for noise
float random(vec2 n) { 
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

void main() {
  // Calculate aspect-corrected UVs
  vec2 ratio = vec2(
    min((uResolution.x / uResolution.y) / (16.0 / 9.0), 1.0),
    min((uResolution.y / uResolution.x) / (9.0 / 16.0), 1.0)
  );
  
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  
  // Add some subtle movement to displacement
  vec2 displacementUv = uv + vec2(sin(uTime * 0.1), cos(uTime * 0.1)) * 0.01;
  
  // Sample the displacement map
  vec4 displacementMap = texture2D(uDisplacement, displacementUv);
  
  // Calculate displacement effect that intensifies in the middle of the transition
  float waveIntensity = uProgress * (1.0 - uProgress) * 4.0; // Peaks at progress = 0.5
  float effectIntensity = uIntensity * 0.2 * waveIntensity;
  
  // Apply directional displacement based on the displacement map
  vec2 displacement = vec2(
    (displacementMap.r - 0.5) * effectIntensity * uDirection,
    (displacementMap.g - 0.5) * effectIntensity * uDirection
  );
  
  // Add wave distortion effect
  displacement.x += sin(uv.y * 10.0 + uTime) * 0.01 * waveIntensity;
  displacement.y += cos(uv.x * 10.0 + uTime) * 0.01 * waveIntensity;
  
  // Create glitch effect during transition
  float glitchStrength = 0.02 * waveIntensity;
  if (random(vec2(uTime, uProgress)) > 0.96) {
    displacement.x += (random(vec2(uTime)) - 0.5) * glitchStrength;
    displacement.y += (random(vec2(uProgress)) - 0.5) * glitchStrength;
  }
  
  // Apply displacement to UVs
  vec2 uvDisplaced1 = uv + displacement;
  vec2 uvDisplaced2 = uv - displacement * 0.5; // Less displacement for second texture
  
  // Ensure UVs stay in bounds
  uvDisplaced1 = clamp(uvDisplaced1, 0.0, 1.0);
  uvDisplaced2 = clamp(uvDisplaced2, 0.0, 1.0);
  
  // Sample both textures with displaced UVs
  vec4 color1 = texture2D(uTexture1, uvDisplaced1);
  vec4 color2 = texture2D(uTexture2, uvDisplaced2);
  
  // Mix based on progress
  vec4 finalColor = mix(color1, color2, uProgress);
  
  // Add color shift during transition
  float rgbSplitIntensity = 0.015 * waveIntensity;
  vec4 colorR = texture2D(uTexture1, uvDisplaced1 + vec2(rgbSplitIntensity, 0.0));
  vec4 colorB = texture2D(uTexture2, uvDisplaced2 - vec2(rgbSplitIntensity, 0.0));
  
  if (uProgress > 0.0 && uProgress < 1.0) {
    finalColor.r = mix(colorR.r, finalColor.r, 0.5);
    finalColor.b = mix(colorB.b, finalColor.b, 0.5);
  }
  
  // Output the final color
  gl_FragColor = finalColor;
}
`;

const DisplacementTransition = ({
  sourceImage,
  targetImage,
  startRect,
  endRect,
  onComplete,
  duration = 2.2,
  isOpening = true
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);
  const requestRef = useRef(null);
  const timeRef = useRef(0);
  
  // Initialize and handle WebGL setup/animation
  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Setup camera (orthographic for 2D view)
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;
    
    // Calculate dimensions for the plane
    const width = startRect.width;
    const height = startRect.height;
    
    // Load textures
    const textureLoader = new THREE.TextureLoader();
    
    // Source texture (starting image)
    const texture1 = textureLoader.load(sourceImage);
    texture1.minFilter = THREE.LinearFilter;
    texture1.magFilter = THREE.LinearFilter;
    
    // Target texture (ending image)
    const texture2 = textureLoader.load(targetImage || sourceImage);
    texture2.minFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    
    // Use our inline base64 displacement map
    const displacement = textureLoader.load(displacementBase64);
    displacement.minFilter = THREE.LinearFilter;
    displacement.magFilter = THREE.LinearFilter;
    displacement.wrapS = THREE.RepeatWrapping;
    displacement.wrapT = THREE.RepeatWrapping;
    
    // Create shader material with uniforms
    const uniforms = {
      uTexture1: { value: texture1 },
      uTexture2: { value: texture2 },
      uDisplacement: { value: displacement },
      uProgress: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uIntensity: { value: isOpening ? 0.0 : 1.0 },
      uDirection: { value: isOpening ? 1.0 : -1.0 },
      uTime: { value: 0.0 }
    };
    
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });
    materialRef.current = material;
    
    // Create geometry and mesh
    const geometry = new THREE.PlaneGeometry(width, height, 1, 1);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    
    // Add renderer to DOM
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
    
    // Position the container
    if (containerRef.current) {
      containerRef.current.style.position = 'fixed';
      containerRef.current.style.top = '0';
      containerRef.current.style.left = '0';
      containerRef.current.style.width = '100vw';
      containerRef.current.style.height = '100vh';
      containerRef.current.style.zIndex = '9999';
      containerRef.current.style.pointerEvents = 'none';
      
      // Position the mesh at the starting position
      mesh.position.x = startRect.left - window.innerWidth / 2 + width / 2;
      mesh.position.y = -startRect.top + window.innerHeight / 2 - height / 2;
    }
    
    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Stop animation loop
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        
        // Remove from DOM
        if (containerRef.current && rendererRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        // Call completion callback
        if (onComplete) onComplete();
      }
    });
    
    // Animate shader uniforms
    tl.to(material.uniforms.uProgress, {
      value: 1.0,
      duration: duration,
      ease: 'power3.inOut'
    });
    
    // Animate displacement intensity
    tl.to(material.uniforms.uIntensity, {
      value: isOpening ? 1.0 : 0.0,
      duration: duration * 0.5,
      ease: 'power2.out'
    }, 0);
    
    tl.to(material.uniforms.uIntensity, {
      value: isOpening ? 0.0 : 1.0,
      duration: duration * 0.5,
      ease: 'power2.in'
    }, duration * 0.5);
    
    // Animate mesh position and scale
    tl.to(mesh.position, {
      x: endRect.left - window.innerWidth / 2 + endRect.width / 2,
      y: -endRect.top + window.innerHeight / 2 - endRect.height / 2,
      duration: duration,
      ease: 'power2.inOut'
    }, 0);
    
    tl.to(mesh.scale, {
      x: endRect.width / width,
      y: endRect.height / height,
      duration: duration,
      ease: 'power2.inOut'
    }, 0);
    
    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = timeRef.current;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    requestRef.current = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && materialRef.current) {
        // Update camera
        const camera = cameraRef.current;
        camera.left = window.innerWidth / -2;
        camera.right = window.innerWidth / 2;
        camera.top = window.innerHeight / 2;
        camera.bottom = window.innerHeight / -2;
        camera.updateProjectionMatrix();
        
        // Update renderer
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        
        // Update resolution uniform
        materialRef.current.uniforms.uResolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (sceneRef.current) {
        // Dispose of geometries and materials
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            
            if (object.material.map) object.material.map.dispose();
            if (object.material.uniforms) {
              for (const key in object.material.uniforms) {
                if (object.material.uniforms[key].value instanceof THREE.Texture) {
                  object.material.uniforms[key].value.dispose();
                }
              }
            }
            object.material.dispose();
          }
        });
      }
    };
  }, [sourceImage, targetImage, startRect, endRect, onComplete, duration, isOpening]);
  
  return <div ref={containerRef} className="displacement-transition-container"></div>;
};

export default DisplacementTransition; 