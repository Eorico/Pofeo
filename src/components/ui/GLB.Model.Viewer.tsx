import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

interface GLBModelProps {
    src: string;
}

const GLBViewer: React.FC<GLBModelProps> = ({src}) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera
        (
            45, mountRef.current.clientWidth / mountRef.current.clientHeight, 
            0.1, 1000
        );

        camera.position.set(0, 1.5, 3);

        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize
        (
            mountRef.current.clientWidth, mountRef.current.clientHeight
        );

        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5,5,5);
        scene.add(dirLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;

        const loader = new GLTFLoader();
        loader.load(src, (glft: any) => {
            const model = glft.scene;
            model.scale.set(2,2,2);
            scene.add(model);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, [src]);

    return <div ref={mountRef} style={{ width: "100%", height: "100%" }}/>;
};

export default GLBViewer