import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import AvatarModel from "./AvatarModel";

function HeroAvatar() {
    return (
        <Canvas camera={{ position: [2, 1, 15] }}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={0} />
            <AvatarModel />
            <Environment preset="city" />

        </Canvas>
    );
}

export default HeroAvatar;
