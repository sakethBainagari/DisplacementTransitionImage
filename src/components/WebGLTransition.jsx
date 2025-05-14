import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

// Enhanced vertex shader with more dramatic effects
const vertexShader = `
varying vec2 vUv;
uniform float uProgress;
uniform float uTime;
uniform float uDirection;
uniform float uIntensity;
uniform vec2 uQuadSize;

// Simplex noise functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vUv = uv;
  
  // Base position
  vec3 pos = position;
  
  // Enhanced wave calculation with multiple frequencies
  float waveProgress = uProgress * (1.0 - uProgress) * 4.0; // parabola peaking at 0.5
  
  // Multiple layers of noise for complex distortion
  float noise1 = snoise(vUv * 5.0 + uTime * 0.2) * uIntensity * 25.0;
  float noise2 = snoise(vUv * 10.0 - uTime * 0.3) * uIntensity * 15.0;
  float noise3 = snoise(vUv * 20.0 + uTime * 0.1) * uIntensity * 8.0;
  
  // Combined noise effect
  float combinedNoise = (noise1 + noise2 + noise3) * waveProgress;
  
  // Create dramatic page curl effect during transition
  float curlAmount = 0.0;
  if (uDirection > 0.0) { 
    // Opening: curl based on horizontal position
    curlAmount = (uv.x - 0.5) * waveProgress * 50.0 * uDirection;
  } else {
    // Closing: curl based on vertical position
    curlAmount = (uv.y - 0.5) * waveProgress * 50.0 * -uDirection;
  }
  
  // X and Y distortion with noise and curl
  float xDistortion = sin(uv.y * 15.0 + uTime * 2.0) * waveProgress * uIntensity * 40.0 * uDirection;
  float yDistortion = cos(uv.x * 15.0 + uTime * 1.5) * waveProgress * uIntensity * 30.0 * uDirection;
  
  // Apply multi-axis distortions
  pos.x += xDistortion + combinedNoise * 0.3;
  pos.y += yDistortion + combinedNoise * 0.2;
  
  // Z-axis displacement for dramatic 3D effect
  pos.z += combinedNoise + curlAmount;
  
  // Scale effect that intensifies during the middle of the transition
  float scaleEffect = 1.0 + (waveProgress * 0.3);
  pos.xy *= mix(1.0, scaleEffect, uIntensity);
  
  // Dynamic rotational distortion based on progress
  float rotationAngle = waveProgress * uIntensity * 0.2 * uDirection;
  float cosRot = cos(rotationAngle);
  float sinRot = sin(rotationAngle);
  vec2 rotated = vec2(
    pos.x * cosRot - pos.y * sinRot,
    pos.x * sinRot + pos.y * cosRot
  );
  pos.xy = mix(pos.xy, rotated, waveProgress);
  
  // Perspective and depth effects 
  float perspective = 1.0 + waveProgress * uIntensity * 0.5 * (0.5 - vUv.y);
  pos.xy *= perspective;
  
  // Final position with enhanced depth
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// Enhanced fragment shader with more dramatic visual effects
const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uProgress;
uniform float uTime;
uniform float uDirection;
uniform float uIntensity;
uniform vec2 uResolution;

// Improved RGB shift function
vec4 rgbShift(sampler2D textureImage, vec2 uv, float amount) {
  vec4 r = texture2D(textureImage, uv + vec2(amount, -amount * 0.5));
  vec4 g = texture2D(textureImage, uv);
  vec4 b = texture2D(textureImage, uv - vec2(amount, -amount * 0.5));
  return vec4(r.r, g.g, b.b, max(max(r.a, g.a), b.a));
}

// Enhanced chromatic aberration function
vec4 chromaticAberration(sampler2D textureImage, vec2 uv, float amount, float distanceFromCenter) {
  vec2 dir = uv - vec2(0.5);
  float dist = length(dir);
  dir = normalize(dir);
  
  // Dynamic RGB offsets based on position and progress
  float r = dist * amount * 0.05;
  float g = dist * amount * 0.03;
  float b = dist * amount * 0.02;
  
  // Radial distortion
  vec2 distortR = dir * r * (1.0 + sin(uTime * 1.5) * 0.1);
  vec2 distortG = dir * g * (1.0 + sin(uTime * 1.2) * 0.1);
  vec2 distortB = dir * b * (1.0 + sin(uTime * 1.7) * 0.1);
  
  vec4 cr = texture2D(textureImage, uv + distortR);
  vec4 cg = texture2D(textureImage, uv + distortG);
  vec4 cb = texture2D(textureImage, uv + distortB);
  
  return vec4(cr.r, cg.g, cb.b, max(max(cr.a, cg.a), cb.a));
}

// Edge detection for outlines
float detectEdge(sampler2D tex, vec2 uv, float threshold) {
  float dx = 1.0 / uResolution.x;
  float dy = 1.0 / uResolution.y;
  
  vec4 c0 = texture2D(tex, uv);
  vec4 c1 = texture2D(tex, uv + vec2(dx, 0.0));
  vec4 c2 = texture2D(tex, uv + vec2(-dx, 0.0));
  vec4 c3 = texture2D(tex, uv + vec2(0.0, dy));
  vec4 c4 = texture2D(tex, uv + vec2(0.0, -dy));
  
  float diff = length(c1 - c0) + length(c2 - c0) + length(c3 - c0) + length(c4 - c0);
  return smoothstep(threshold * 0.5, threshold, diff);
}

// Light streak effect
vec3 lightStreak(vec2 uv, vec3 color, float intensity) {
  float streak = 0.0;
  
  // Create radial streaks
  for (int i = 0; i < 8; i++) {
    float angle = float(i) * 3.14159 / 4.0;
    vec2 dir = vec2(cos(angle), sin(angle)) * 0.05;
    
    for (int j = 1; j <= 10; j++) {
      float weight = float(11 - j) / 55.0; // Decreasing weight
      vec2 samplePos = uv + dir * float(j) * intensity;
      vec3 sampleColor = texture2D(uTexture, samplePos).rgb;
      float luminance = dot(sampleColor, vec3(0.299, 0.587, 0.114));
      streak += luminance * weight;
    }
  }
  
  return color + streak * color * 2.0;
}

void main() {
  // Calculate distorted UV coordinates
  vec2 uv = vUv;
  vec2 center = vec2(0.5);
  
  // Create distance from center
  float dist = distance(uv, center);
  
  // Wave progress for effects that peak in the middle
  float waveProgress = uProgress * (1.0 - uProgress) * 4.0;
  
  // Dynamic rotation based on direction
  float angle = uProgress * uDirection * 0.8; 
  float s = sin(angle);
  float c = cos(angle);
  
  // Dynamic zoom effect - more dramatic when opening
  float zoomDirection = uDirection > 0.0 ? 1.2 : 1.5;
  float zoomFactor = mix(1.0, zoomDirection, uProgress * uIntensity);
  uv = (uv - center) / zoomFactor + center;
  
  // Apply rotation with dynamic center
  vec2 offsetCenter = center + vec2(sin(uTime * 0.2), cos(uTime * 0.2)) * waveProgress * 0.02;
  vec2 rotatedUv = vec2(
    c * (uv.x - offsetCenter.x) + s * (uv.y - offsetCenter.y) + offsetCenter.x,
    c * (uv.y - offsetCenter.y) - s * (uv.x - offsetCenter.x) + offsetCenter.y
  );
  
  // Apply dynamic wave distortion
  float waveStrength = uIntensity * waveProgress * 0.08;
  vec2 waveUv = rotatedUv;
  
  // Create complex wave effect
  waveUv.x += sin(waveUv.y * 30.0 + uTime * 3.0) * waveStrength;
  waveUv.y += cos(waveUv.x * 30.0 + uTime * 2.5) * waveStrength;
  
  // Second wave layer for complexity
  waveUv.x += sin(waveUv.y * 15.0 - uTime * 2.0) * waveStrength * 1.5;
  waveUv.y += cos(waveUv.x * 15.0 - uTime * 1.5) * waveStrength * 1.3;
  
  // Apply enhanced chromatic aberration
  float aberrationAmount = waveProgress * uIntensity * 5.0;
  vec4 color = chromaticAberration(uTexture, waveUv, aberrationAmount, dist);
  
  // Apply vignette effect with dynamic center
  float vignetteStrength = uIntensity * 1.5;
  float vignette = 1.0 - smoothstep(0.3, 0.7, dist * vignetteStrength);
  color.rgb *= mix(1.0, vignette, waveProgress);
  
  // Edge detection for glowing outline
  float edge = detectEdge(uTexture, waveUv, 0.3) * waveProgress * uIntensity * 3.0;
  
  // Dynamic color transformation
  float hueShift = uProgress * 0.1 * uDirection;
  vec3 shiftedColor = color.rgb;
  // Simple hue rotation
  float angle2 = hueShift * 6.28318;
  float s2 = sin(angle2), c2 = cos(angle2);
  mat3 hueRotation = mat3(
    0.299 + 0.701 * c2 + 0.168 * s2, 0.587 - 0.587 * c2 + 0.330 * s2, 0.114 - 0.114 * c2 - 0.497 * s2,
    0.299 - 0.299 * c2 - 0.328 * s2, 0.587 + 0.413 * c2 + 0.035 * s2, 0.114 - 0.114 * c2 + 0.292 * s2,
    0.299 - 0.299 * c2 + 1.25 * s2, 0.587 - 0.587 * c2 - 1.05 * s2, 0.114 + 0.886 * c2 - 0.203 * s2
  );
  color.rgb = mix(color.rgb, color.rgb * hueRotation, waveProgress * 0.5);
  
  // Apply brightness boost with pulsating effect
  float pulseEffect = 1.0 + sin(uTime * 4.0) * waveProgress * 0.1;
  float brightness = 1.0 + uIntensity * waveProgress * pulseEffect;
  color.rgb *= brightness;
  
  // Add edge highlight with color
  vec3 edgeColor = vec3(1.0, 0.8, 0.3); // Golden highlight
  if (uDirection < 0.0) {
    edgeColor = vec3(0.3, 0.8, 1.0); // Blue highlight for closing
  }
  color.rgb += edge * edgeColor;
  
  // Apply light streaks during transition
  color.rgb = lightStreak(waveUv, color.rgb, waveProgress * 0.3);
  
  // Color grading with enhanced saturation
  float saturationBoost = 1.0 + waveProgress * uIntensity * 0.8;
  float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  color.rgb = mix(vec3(luminance), color.rgb, saturationBoost);
  
  // Apply glow effect based on direction
  float glowStrength = smoothstep(0.3, 0.6, dist) * waveProgress * uIntensity * 2.0;
  vec3 glowColor = uDirection > 0.0 ? 
    vec3(0.2, 0.5, 1.0) :  // Blue glow for opening
    vec3(1.0, 0.5, 0.2);   // Orange glow for closing
  color.rgb += glowColor * glowStrength;
  
  gl_FragColor = color;
}
`;

// Main WebGL Transition component
const WebGLTransition = ({ 
  sourceImage, 
  startRect, 
  endRect, 
  onComplete,
  duration = 1.8,
  isOpening = true
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);
  const requestRef = useRef(null);
  const timeRef = useRef(0);

  // Initialize and cleanup WebGL
  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera (orthographic for 2D-like view)
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

    // Calculate dimensions and position for the plane
    const width = startRect.width;
    const height = startRect.height;
    
    // Create texture from image
    const texture = new THREE.TextureLoader().load(sourceImage);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    // Create material with custom shaders
    const uniforms = {
      uTexture: { value: texture },
      uProgress: { value: 0.0 },
      uTime: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uQuadSize: { value: new THREE.Vector2(width, height) },
      uDirection: { value: isOpening ? 1.0 : -1.0 },
      uIntensity: { value: 0.0 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
      transparent: true
    });
    materialRef.current = material;

    // Create geometry and mesh
    const planeGeometry = new THREE.PlaneGeometry(width, height, 32, 32);
    const mesh = new THREE.Mesh(planeGeometry, material);
    scene.add(mesh);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Add to DOM
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Position the container
    if (containerRef.current) {
      const container = containerRef.current;
      if (isOpening) {
        // Starting at source position
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.zIndex = '9999';
        container.style.pointerEvents = 'none';
        
        // Position the mesh at the starting rect
        mesh.position.x = startRect.left - window.innerWidth / 2 + width / 2;
        mesh.position.y = -startRect.top + window.innerHeight / 2 - height / 2;
      } else {
        // Starting at panel position
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.zIndex = '9999';
        container.style.pointerEvents = 'none';
        
        // Position the mesh at the starting rect
        mesh.position.x = startRect.left - window.innerWidth / 2 + width / 2;
        mesh.position.y = -startRect.top + window.innerHeight / 2 - height / 2;
      }
    }

    // Animation for mesh transformation - enhanced with more dramatic effects
    const tl = gsap.timeline({
      onComplete: () => {
        // Stop animation loop
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        
        // Remove from DOM after completion
        if (containerRef.current && rendererRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        // Call completion callback
        if (onComplete) onComplete();
      }
    });

    // Animate shader uniforms with improved timing
    tl.to(material.uniforms.uProgress, {
      value: 1.0,
      duration: duration,
      ease: 'power3.inOut' // Smoother easing
    });
    
    // Enhanced intensity animation with better curve
    tl.to(material.uniforms.uIntensity, {
      value: isOpening ? 1.2 : 0.0, // Slightly higher peak for more drama
      duration: duration * 0.4,
      ease: 'power2.out'
    }, 0);
    
    tl.to(material.uniforms.uIntensity, {
      value: isOpening ? 0.0 : 1.2,
      duration: duration * 0.6,
      ease: 'power2.inOut'
    }, duration * 0.4);

    // Enhanced mesh animation
    if (isOpening) {
      // Opening: add scale overshoot for bounce effect
      tl.to(mesh.position, {
        x: endRect.left - window.innerWidth / 2 + endRect.width / 2,
        y: -endRect.top + window.innerHeight / 2 - endRect.height / 2,
        duration: duration,
        ease: 'power3.inOut'
      }, 0);
      
      // Add slight overshoot to the scale for bounce effect
      const scaleX = endRect.width / width;
      const scaleY = endRect.height / height;
      
      tl.to(mesh.scale, {
        x: scaleX * 1.05, // 5% overshoot
        y: scaleY * 1.05,
        duration: duration * 0.8,
        ease: 'power2.out'
      }, 0);
      
      // And then settle to the final scale
      tl.to(mesh.scale, {
        x: scaleX,
        y: scaleY,
        duration: duration * 0.2,
        ease: 'power1.inOut'
      }, duration * 0.8);
      
      // Add slight rotation for dynamic feel
      tl.to(mesh.rotation, {
        z: 0.05, 
        duration: duration * 0.5,
        ease: 'power1.inOut'
      }, 0);
      
      tl.to(mesh.rotation, {
        z: 0,
        duration: duration * 0.5,
        ease: 'power1.inOut'
      }, duration * 0.5);
      
    } else {
      // Closing: add more dynamic motion
      // First move slightly away before going to final position
      tl.to(mesh.position, {
        x: startRect.left - window.innerWidth / 2 + startRect.width / 2 * 1.02,
        y: -startRect.top + window.innerHeight / 2 - startRect.height / 2 * 1.02,
        duration: duration * 0.3,
        ease: 'power2.in'
      }, 0);
      
      // Then move to final position
      tl.to(mesh.position, {
        x: endRect.left - window.innerWidth / 2 + endRect.width / 2,
        y: -endRect.top + window.innerHeight / 2 - endRect.height / 2,
        duration: duration * 0.7,
        ease: 'power3.inOut'
      }, duration * 0.3);
      
      // Scale animation with slight undershoot
      const finalScaleX = endRect.width / width;
      const finalScaleY = endRect.height / height;
      
      tl.to(mesh.scale, {
        x: finalScaleX * 0.9, // Slight undershoot
        y: finalScaleY * 0.9,
        duration: duration * 0.8,
        ease: 'power2.inOut'
      }, 0);
      
      // And then settle to the final scale
      tl.to(mesh.scale, {
        x: finalScaleX,
        y: finalScaleY,
        duration: duration * 0.2,
        ease: 'back.out(2)'
      }, duration * 0.8);
      
      // Add slight rotation for dynamic feel (opposite direction from opening)
      tl.to(mesh.rotation, {
        z: -0.05, 
        duration: duration * 0.4,
        ease: 'power1.inOut'
      }, 0);
      
      tl.to(mesh.rotation, {
        z: 0,
        duration: duration * 0.6,
        ease: 'elastic.out(1, 0.8)'
      }, duration * 0.4);
    }

    // Animation loop for real-time shader effects
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
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (sceneRef.current) {
        // Dispose of all geometries and materials
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        });
      }
    };
  }, [sourceImage, startRect, endRect, onComplete, duration, isOpening]);

  return <div ref={containerRef} className="webgl-transition-container"></div>;
};

export default WebGLTransition; 