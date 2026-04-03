'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function DataBackground() {
    const [init, setInit] = useState(false);
    const { resolvedTheme } = useTheme(); // 'light' か 'dark' を取得

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => {
        const isDark = resolvedTheme === "dark";

        return {
            background: {
                // ダーク：宇宙の紺黒 / ライト：設計図のような明るいグレー
                color: { value: isDark ? "#020617" : "#f8fafc" },
            },
            fpsLimit: 120,
            particles: {
                number: {
                    value: 1000,
                    density: { enable: true, area: 1200 },
                },
                // ダーク：白の粒子 / ライト：深いネイビーの粒子
                color: { value: isDark ? "#ffffff" : "#0f172a" },
                opacity: {
                    value: { min: 0.1, max: isDark ? 0.7 : 0.4 },
                },
                size: {
                    value: { min: 0.5, max: 2.5 },
                },
                links: {
                    enable: true,
                    distance: 100,
                    // ダーク：白の線 / ライト：薄いグレーの線
                    color: isDark ? "#ffffff" : "#64748b",
                    opacity: isDark ? 0.15 : 0.1,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.4,
                    direction: "none",
                    outModes: { default: "out" },
                },
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
        };
    }, [resolvedTheme]); // テーマが変わるたびに再計算

    if (!init) return null;

    return (
        <div className="fixed inset-0 -z-10 transition-colors duration-500">
            <Particles id="tsparticles" options={options as any} />
        </div>
    );
}