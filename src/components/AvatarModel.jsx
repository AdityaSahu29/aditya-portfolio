import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function AvatarModel() {

    const group = useRef();

    const { scene, animations } =
        useGLTF(
            `${import.meta.env.BASE_URL}models/avatar.glb`
        );

    const { actions } =
        useAnimations(animations, group);

    useEffect(() => {

        const names = Object.keys(actions);

        if (names.length > 0) {

            actions[names[0]]
                ?.reset()
                .fadeIn(0.5)
                .play();
        }

    }, [actions]);

    return (

        <group ref={group}>

            <primitive
                object={scene}
                scale={15}
                position={[0, -23, 0]}
                rotation={[0, 0.5, 0]}
            />

        </group>

    );
}

export default AvatarModel;