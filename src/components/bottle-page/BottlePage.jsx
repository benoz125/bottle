import React, { useState, Suspense} from "react";
import { Canvas} from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    Lightformer,
} from "@react-three/drei";
import Bottle from "./Bottle";

import "./BottlePage.css";

const BottlePage = () => {
    const [bottleTopColor, setBottleTopColor] = useState({});

    return (
        <div className="bottle-page-container">
            <Canvas>
                <directionalLight color="white" position={[0, 0, 5]} />
                <directionalLight color="white" position={[0, 1, -5]} />
                <ambientLight intensity={0.2} />
                <Suspense fallback={null}>
                    <Bottle colors={bottleTopColor} />
                    <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr">
                        <Lightformer
                            rotation-y={Math.PI / 2}
                            position={[-5, -1, -1]}
                            scale={[20, 0.5, 1]}
                        />
                    </Environment>
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default BottlePage;
