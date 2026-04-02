'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function DataBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        background: {
            color: { value: "#020617" },
        },
        fpsLimit: 120,
        particles: {
            number: {
                value: 1000, // 粒子数を1000に増量
                density: {
                    enable: true,
                    area: 1200, // 密集しすぎないよう範囲を少し広めに調整
                },
            },
            color: { value: "#ffffff" },
            opacity: {
                value: { min: 0.1, max: 0.7 }, // 輝きに差をつけて奥行きを強調
            },
            size: {
                value: { min: 0.5, max: 2.5 },
            },
            links: {
                enable: true,
                distance: 100, // リンク距離を短くして網目を細かくする
                color: "#ffffff",
                opacity: 0.15,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.4, // 数が多いので速度を落とすと上品になります
                direction: "none",
                outModes: { default: "out" },
            },
            // 奥行き効果の維持
            zIndex: {
                value: { min: 0, max: 100 },
                opacityRate: 0.5,
            },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
            },
            modes: {
                grab: { distance: 150, links: { opacity: 0.5 } },
            },
        },
        detectRetina: true,
    }), []);

    if (!init) return null;

    return (
        <div className="fixed inset-0 -z-10">
            <Particles id="tsparticles" options={options as any} />
        </div>
    );
}