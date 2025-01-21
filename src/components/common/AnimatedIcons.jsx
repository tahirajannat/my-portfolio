import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedIcons = () => {
    const mountRef = useRef(null); // Ref for attaching Three.js renderer

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Attach renderer to the container
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className='absolute top-0 right-0 w-[400px] h-[400px] z-10'
        ></div>
    );
};

export default AnimatedIcons;
