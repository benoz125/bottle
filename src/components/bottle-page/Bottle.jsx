import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Bottle({ colors, ...props }) {
    const group = useRef();
    useFrame(({ clock }) => {
        group.current.rotation.y = clock.getElapsedTime() / 2;
    });
    const { nodes, materials } = useGLTF("/models/bottle.glb");

    return (
        <group ref={group} {...props} dispose={null} scale={[0.65, 0.65, 0.65]}>
            <mesh
                geometry={nodes.Cylinder.geometry}
                material={materials["Material.001"]}
                position={[0, -2.36, 0]}
            >
                <meshPhysicalMaterial
                    roughness={0.5}
                    metalness={0.05}
                    color={colors.top}
                    envMapIntensity={0.4}
                    clearcoatRoughness={0.3}
                    clearcoat={1}
                />
            </mesh>
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.002"]}
                position={[0, -2.36, 0]}
            >
                <meshPhysicalMaterial
                    roughness={0.4}
                    metalness={0.05}
                    color={colors.bottom}
                    envMapIntensity={0.4}
                    clearcoatRoughness={0.3}
                    clearcoat={1}
                />
            </mesh>
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials["Material.003"]}
                position={[0, 3.47, 0]}
                scale={0.61}
            >
                <meshStandardMaterial
                    color={"grey"}
                    emissive={"#000000"}
                    roughness={0.25}
                    metalness={1}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/models/bottle.glb");
