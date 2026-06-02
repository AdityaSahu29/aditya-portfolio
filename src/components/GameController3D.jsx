import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, useGLTF } from "@react-three/drei";

function ControllerModel() {

    const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/controller.glb`)

    return (
        <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
        >
            <primitive
                object={scene}
                scale={1}
                rotation={[0.2, 0.5, 0]}
            />
        </Float>
    );
}

export default function GameController3D() {

    return (
        <Canvas camera={{ position: [0, 0, 5] }}>

            <ambientLight intensity={2} />

            <directionalLight
                position={[2, 5, 2]}
                intensity={3}
            />

            <ControllerModel />

            <Environment preset="city" />

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
            />

        </Canvas>
    );
}