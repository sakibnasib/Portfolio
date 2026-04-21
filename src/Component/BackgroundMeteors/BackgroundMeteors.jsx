// import React from "react";

// export default function BlackDotBackground({ 
//   children, 
//   className = "",
//   style = "grid", // grid | scattered | matrix | geometric | luxury
//   density = "medium", // light | medium | dense
//   animated = true
// }) { 
  
//   // Configuration for different styles
//   const getConfig = () => {
//     const baseDensity = {
//       light: 80,
//       medium: 150,
//       dense: 250
//     };
    
//     const styles = {
//       grid: {
//         dots: baseDensity[density],
//         pattern: "grid",
//         animation: "pulse"
//       },
//       scattered: {
//         dots: baseDensity[density] * 2,
//         pattern: "random",
//         animation: "float"
//       },
//       matrix: {
//         dots: 400,
//         pattern: "matrix",
//         animation: "trail"
//       },
//       geometric: {
//         dots: baseDensity[density],
//         pattern: "geometric",
//         animation: "spin"
//       },
//       luxury: {
//         dots: baseDensity[density] * 1.5,
//         pattern: "luxury",
//         animation: "glow"
//       }
//     };
    
//     return styles[style] || styles.grid;
//   };
  
//   const config = getConfig();

//   // Generate grid dots
//   const GridDots = () => (
//     <>
//       {[...Array(Math.floor(Math.sqrt(config.dots)))].map((_, col) => (
//         [...Array(Math.floor(Math.sqrt(config.dots)))].map((_, row) => {
//           const shouldGlow = animated && Math.random() < 0.05;
          
//           return (
//             <div
//               key={`grid-${col}-${row}`}
//               className={`absolute rounded-full ${shouldGlow ? 'animate-pulse' : ''}`}
//               style={{
//                 top: `${5 + row * (90 / Math.floor(Math.sqrt(config.dots)))}%`,
//                 left: `${5 + col * (90 / Math.floor(Math.sqrt(config.dots)))}%`,
//                 width: '1px',
//                 height: '1px',
//                 backgroundColor: shouldGlow ? '#ffffff' : 'rgba(255,255,255,0.15)',
//                 opacity: shouldGlow ? 0.8 : 0.3,
//                 animationDelay: shouldGlow ? `${Math.random() * 3}s` : '0s',
//                 boxShadow: shouldGlow ? '0 0 4px rgba(255,255,255,0.5)' : 'none',
//               }}
//             />
//           );
//         })
//       ))}
//     </>
//   );

//   // Generate scattered dots
//   const ScatteredDots = () => (
//     <>
//       {[...Array(config.dots)].map((_, i) => {
//         const size = Math.random() * 2 + 0.5;
//         const isLarge = Math.random() < 0.1;
//         const animationType = animated ? 'animate-pulse-dot' : '';
        
//         return (
//           <div
//             key={`scatter-${i}`}
//             className={`absolute rounded-full ${animationType}`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${isLarge ? size * 2 : size}px`,
//               height: `${isLarge ? size * 2 : size}px`,
//               backgroundColor: 'rgba(255, 255, 255, 0.8)',
//               opacity: Math.random() * 0.3 + 0.1,
//               animationDelay: animated ? `${Math.random() * 5}s` : '0s',
//               animationDuration: animated ? `${Math.random() * 4 + 2}s` : '0s',
//               boxShadow: isLarge ? '0 0 3px rgba(255,255,255,0.3)' : 'none',
//             }}
//           />
//         );
//       })}
//     </>
//   );

//   // Generate matrix style dots
//   const MatrixDots = () => (
//     <>
//       {[...Array(20)].map((_, col) => (
//         [...Array(25)].map((_, row) => {
//           const isActive = animated && Math.random() < 0.3;
          
//           return (
//             <div
//               key={`matrix-${col}-${row}`}
//               className="absolute rounded-full"
//               style={{
//                 top: `${5 + row * 3.6}%`,
//                 left: `${5 + col * 4.5}%`,
//                 width: '1.5px',
//                 height: '1.5px',
//                 backgroundColor: isActive ? '#00ff9d' : 'rgba(255,255,255,0.1)',
//                 opacity: isActive ? 0.9 : 0.3,
//                 boxShadow: isActive ? '0 0 6px #00ff9d' : 'none',
//                 transition: 'all 0.3s ease',
//               }}
//             />
//           );
//         })
//       ))}
      
//       {/* Matrix trail effect */}
//       {animated && [...Array(8)].map((_, i) => (
//         <div
//           key={`trail-${i}`}
//           className="absolute top-0 w-[1px] h-full animate-matrix-trail"
//           style={{
//             left: `${15 + i * 9}%`,
//             background: 'linear-gradient(to bottom, transparent, #00ff9d, transparent)',
//             animationDelay: `${i * 0.5}s`,
//           }}
//         />
//       ))}
//     </>
//   );

//   // Generate geometric patterns
//   const GeometricDots = () => (
//     <>
//       {/* Concentric circles */}
//       {[...Array(6)].map((_, circle) => (
//         [...Array(24)].map((_, dot) => {
//           const angle = (dot * 15) * (Math.PI / 180);
//           const radius = (circle + 1) * 8;
          
//           return (
//             <div
//               key={`circle-${circle}-${dot}`}
//               className={`absolute rounded-full ${animated ? 'animate-pulse' : ''}`}
//               style={{
//                 top: `calc(50% + ${Math.sin(angle) * radius}%)`,
//                 left: `calc(50% + ${Math.cos(angle) * radius}%)`,
//                 width: '1px',
//                 height: '1px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.6)',
//                 opacity: 0.3,
//                 animationDelay: animated ? `${(circle + dot) * 0.1}s` : '0s',
//               }}
//             />
//           );
//         })
//       ))}
      
//       {/* Hexagonal pattern */}
//       {[...Array(10)].map((_, row) => (
//         [...Array(12)].map((_, col) => {
//           const xOffset = col * 8 + (row % 2) * 4;
          
//           return (
//             <div
//               key={`hex-${row}-${col}`}
//               className="absolute rounded-full"
//               style={{
//                 top: `${10 + row * 8}%`,
//                 left: `${5 + xOffset}%`,
//                 width: '1px',
//                 height: '1px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.4)',
//                 opacity: 0.2,
//               }}
//             />
//           );
//         })
//       ))}
//     </>
//   );

//   // Generate luxury style
//   const LuxuryDots = () => (
//     <>
//       {/* Gold dots */}
//       {[...Array(config.dots)].map((_, i) => {
//         const isGold = Math.random() < 0.3;
//         const size = Math.random() * 1.5 + 0.5;
        
//         return (
//           <div
//             key={`luxury-${i}`}
//             className={`absolute rounded-full ${animated ? 'animate-twinkle' : ''}`}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${size}px`,
//               height: `${size}px`,
//               backgroundColor: isGold ? 'rgba(212, 175, 55, 0.8)' : 'rgba(255, 255, 255, 0.6)',
//               opacity: Math.random() * 0.4 + 0.1,
//               animationDelay: animated ? `${Math.random() * 5}s` : '0s',
//               boxShadow: isGold ? '0 0 4px rgba(212, 175, 55, 0.5)' : '0 0 2px rgba(255,255,255,0.3)',
//             }}
//           />
//         );
//       })}
      
//       {/* Diamond pattern */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rotate-45 opacity-10">
//         {[...Array(8)].map((_, i) => (
//           [...Array(8)].map((_, j) => (
//             <div
//               key={`diamond-${i}-${j}`}
//               className="absolute rounded-full bg-white"
//               style={{
//                 top: `${i * 12.5}%`,
//                 left: `${j * 12.5}%`,
//                 width: '1px',
//                 height: '1px',
//               }}
//             />
//           ))
//         ))}
//       </div>
//     </>
//   );

//   // Render the selected dot pattern
//   const renderDots = () => {
//     switch (style) {
//       case 'scattered': return <ScatteredDots />;
//       case 'matrix': return <MatrixDots />;
//       case 'geometric': return <GeometricDots />;
//       case 'luxury': return <LuxuryDots />;
//       default: return <GridDots />;
//     }
//   };

//   return (
//     <div className={`relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black ${className}`}>
      
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 opacity-20"
//         style={{
//           background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05) 0%, transparent 50%),
//                       radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
//         }}
//       />
      
//       {/* Dot Pattern */}
//       {renderDots()}
      
//       {/* Grid lines for grid style */}
//       {style === 'grid' && (
//         <div className="absolute inset-0 opacity-5">
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`vline-${i}`}
//               className="absolute top-0 h-full w-px bg-white"
//               style={{ left: `${i * 10}%` }}
//             />
//           ))}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={`hline-${i}`}
//               className="absolute left-0 w-full h-px bg-white"
//               style={{ top: `${i * 10}%` }}
//             />
//           ))}
//         </div>
//       )}
      
//       {/* Center glow for most styles */}
//       {(style === 'grid' || style === 'geometric' || style === 'luxury') && (
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-3xl" />
//       )}
      
//       {/* Corner accents for luxury style */}
//       {style === 'luxury' && (
//         <>
//           <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
//           <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
//         </>
//       )}
      
//       {/* Content */}
//       <div className="relative z-10">{children}</div>
      
//       {/* Animations */}
//       <style jsx>{`
//         @keyframes pulse-dot {
//           0%, 100% {
//             opacity: 0.1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.4;
//             transform: scale(1.3);
//           }
//         }
        
//         @keyframes matrix-trail {
//           0% {
//             opacity: 0;
//             transform: translateY(-100%);
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(100%);
//           }
//         }
        
//         @keyframes twinkle {
//           0%, 100% {
//             opacity: 0.1;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }
        
//         .animate-pulse-dot {
//           animation: pulse-dot ease-in-out infinite;
//         }
        
//         .animate-matrix-trail {
//           animation: matrix-trail 2s linear infinite;
//         }
        
//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }










// import React, { useMemo } from "react";

// export default function BlackDotBackground({
//   children,
//   className = "",
//   dotStyle = "grid", // grid | scattered | matrix | geometric | luxury
//   density = "medium", // light | medium | dense
//   animated = true,
// }) {
//   // 1. Memoize dot data so they don't flicker/re-randomize on every render
//   const dotData = useMemo(() => {
//     const counts = { light: 100, medium: 200, dense: 400 };
//     const count = counts[density] || counts.medium;

//     return Array.from({ length: count }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 0.5,
//       delay: Math.random() * 5,
//       duration: Math.random() * 3 + 2,
//       opacity: Math.random() * 0.5 + 0.1,
//     }));
//   }, [density]);

//   // 2. Optimized Pattern Renderers
//   const renderPattern = () => {
//     switch (dotStyle) {
//       case "scattered":
//         return dotData.map((dot) => (
//           <div
//             key={dot.id}
//             className={`absolute rounded-full bg-white/40 ${animated ? "animate-pulse-slow" : ""}`}
//             style={{
//               top: `${dot.y}%`,
//               left: `${dot.x}%`,
//               width: `${dot.size}px`,
//               height: `${dot.size}px`,
//               animationDelay: `${dot.delay}s`,
//               opacity: dot.opacity,
//             }}
//           />
//         ));

//       case "matrix":
//         return (
//           <div className="absolute inset-0 overflow-hidden">
//              {Array.from({ length: 15 }).map((_, i) => (
//                 <div 
//                   key={i}
//                   className="absolute top-0 w-[1px] h-[40%] bg-gradient-to-b from-transparent via-[#00ff9d] to-transparent animate-matrix-fall"
//                   style={{
//                     left: `${(i * 7) + 2}%`,
//                     animationDelay: `${i * 0.8}s`,
//                     opacity: 0.3
//                   }}
//                 />
//              ))}
//           </div>
//         );

//       case "luxury":
//         return (
//           <>
//             {dotData.slice(0, 120).map((dot) => (
//               <div
//                 key={dot.id}
//                 className="absolute rounded-full bg-amber-400/30 blur-[1px] animate-twinkle"
//                 style={{
//                   top: `${dot.y}%`,
//                   left: `${dot.x}%`,
//                   width: `${dot.size + 1}px`,
//                   height: `${dot.size + 1}px`,
//                   animationDelay: `${dot.delay}s`,
//                 }}
//               />
//             ))}
//           </>
//         );

//       case "geometric":
//         return (
//           <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="geo-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <circle cx="2" cy="2" r="1" fill="white" />
//                 <path d="M40 0L0 0 0 40" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="4" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#geo-pattern)" />
//           </svg>
//         );

//       default: // Optimized Grid Style (Uses CSS Background instead of 400 divs)
//         return (
//           <div 
//             className="absolute inset-0" 
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
//               backgroundSize: density === 'light' ? '40px 40px' : density === 'medium' ? '24px 24px' : '16px 16px',
//             }}
//           />
//         );
//     }
//   };

//   return (
//     <div className={`relative w-full min-h-screen bg-[#030303] overflow-hidden ${className}`}>
//       {/* Background Layer */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         {/* Spotlight / Vignette Effect (Fades edges) */}
//         <div 
//           className="absolute inset-0 z-[1]" 
//           style={{
//             background: `radial-gradient(circle at center, transparent 20%, #030303 100%)`
//           }}
//         />
        
//         {/* Subtle Ambient Glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,0)_0%,rgba(0,0,0,1)_100%)]" />
        
//         {/* Rendered Pattern */}
//         <div className="absolute inset-0 w-full h-full">
//           {renderPattern()}
//         </div>
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-10 w-full h-full">
//         {children}
//       </div>

//       <style jsx global>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.2; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(1.1); }
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateY(300%); opacity: 0; }
//         }

//         @keyframes twinkle {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.8; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//           will-change: opacity, transform;
//         }

//         .animate-matrix-fall {
//           animation: matrix-fall 8s linear infinite;
//           will-change: transform;
//         }

//         .animate-twinkle {
//           animation: twinkle 3s ease-in-out infinite;
//           will-change: opacity;
//         }
//       `}</style>
//     </div>
//   );
// }












// import React, { useState, useMemo, useRef } from "react";

// /**
//  * THE PERFECT BACKGROUND
//  * Performance: SVG Patterns (O(1) complexity)
//  * Interaction: Mouse-tracking CSS Variables
//  * Aesthetics: Matte noise texture + Radial masking
//  */
// export default function PerfectBackground({
//   children,
//   className = "",
//   variant = "grid", // grid | dots | luxury | matrix
//   density = 25,     // spacing between dots
//   glow = true,      // enable mouse spotlight
// }) {
//   const containerRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Handle mouse movement for the spotlight effect
//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   // Memoize pattern settings to ensure zero re-render flickering
//   const patternConfig = useMemo(() => {
//     const configs = {
//       grid: {
//         color: "rgba(255,255,255,0.15)",
//         size: density,
//         pattern: `<circle cx="1" cy="1" r="1" fill="currentColor"/>`,
//       },
//       dots: {
//         color: "rgba(255,255,255,0.1)",
//         size: density * 1.5,
//         pattern: `<circle cx="2" cy="2" r="1.5" fill="currentColor"/>`,
//       },
//       luxury: {
//         color: "rgba(212, 175, 55, 0.2)",
//         size: 35,
//         pattern: `<path d="M0 17.5 L17.5 0 L35 17.5 L17.5 35 Z" stroke="currentColor" fill="none" stroke-width="0.5"/>`,
//       },
//       matrix: {
//         color: "rgba(0, 255, 157, 0.2)",
//         size: 30,
//         pattern: `<text y="20" font-family="monospace" font-size="12" fill="currentColor">01</text>`,
//       }
//     };
//     return configs[variant] || configs.grid;
//   }, [variant, density]);

//   // Convert SVG pattern to a CSS Data URI for high-performance background rendering
//   const encodedPattern = (
//     `<svg xmlns="http://www.w3.org/2000/svg" width="${patternConfig.size}" height="${patternConfig.size}">${patternConfig.pattern}</svg>`
//   ).toString("base64");

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className={`relative w-full min-h-screen bg-[#030303] overflow-hidden ${className}`}
//       style={{
//         "--x": `${mousePos.x}px`,
//         "--y": `${mousePos.y}px`,
//         "--spotlight-color": variant === 'luxury' ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.08)',
//       }}
//     >
//       {/* 1. Base Pattern Layer (Hardware Accelerated) */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml;base64,${encodedPattern}")`,
//           color: patternConfig.color,
//           maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
//         }}
//       />

//       {/* 2. The Interactive Spotlight (The "Pro" Touch) */}
//       {glow && (
//         <div
//           className="absolute inset-0 pointer-events-none transition-opacity duration-500"
//           style={{
//             background: `radial-gradient(600px circle at var(--x) var(--y), var(--spotlight-color), transparent 40%)`,
//           }}
//         />
//       )}

//       {/* 3. Matte Grain Texture (Adds high-end "physical" feel) */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay contrast-150 brightness-100 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       {/* 4. Ambient Bottom Glow */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 80%, #030303)`,
//         }}
//       />

//       {/* 5. Luxury Accent (if applicable) */}
//       {variant === 'luxury' && (
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
//       )}

//       {/* Content */}
//       <div className="relative z-10">{children}</div>

//       <style jsx>{`
//         div {
//           will-change: transform;
//         }
//         @keyframes subtle-float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float {
//           animation: subtle-float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }






import React, { useMemo, useState, useEffect } from "react";

export default function PremiumBackground({
  children,
  className = "",
  dotStyle = "grid", // grid | scattered | luxury
  density = "medium",
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for the "Spotlight" effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dotData = useMemo(() => {
    const counts = { light: 100, medium: 200, dense: 400 };
    const count = counts[density] || counts.medium;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    }));
  }, [density]);

  return (
    <div className={`relative w-full min-h-screen bg-[#030303] text-white overflow-hidden ${className}`}>
      
      {/* 1. MESH GRADIENT LAYER (The "Vibe" Layer) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" 
          style={{ animationDuration: '10s' }}
        />
      </div>

      {/* 2. DYNAMIC SPOTLIGHT (Follows Mouse) */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* 3. NOISE TEXTURE (The "Film Grain" for quality) */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none brightness-100 contrast-150">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 4. DOT PATTERNS */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        {dotStyle === "grid" ? (
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: density === 'light' ? '40px 40px' : '24px 24px',
            }}
          />
        ) : (
          dotData.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full bg-white/20 animate-twinkle"
              style={{
                top: `${dot.y}%`,
                left: `${dot.x}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))
        )}
      </div>

      {/* 5. VIGNETTE (Fades the edges) */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.4)_100%)]" />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}