import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

export function initScene(canvas) {
    // --------------------------------------------------
    // RENDERER
    // --------------------------------------------------

    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;


    // --------------------------------------------------
    // SCENE
    // --------------------------------------------------

    const scene = new THREE.Scene();

    scene.background = null;

    scene.fog = new THREE.FogExp2(
        0x050b12,
        0.035
    );


    // --------------------------------------------------
    // CAMERA
    // --------------------------------------------------

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.set(
        0,
        0.4,
        7
    );


    // --------------------------------------------------
    // LIGHTING
    // --------------------------------------------------

    const ambientLight = new THREE.AmbientLight(
        0x9bbbd0,
        1.4
    );

    scene.add(ambientLight);


    const keyLight = new THREE.DirectionalLight(
        0xbfe8ff,
        3.0
    );

    keyLight.position.set(
        4,
        6,
        5
    );

    scene.add(keyLight);


    const rimLight = new THREE.PointLight(
        0x7dd3fc,
        20,
        15
    );

    rimLight.position.set(
        -4,
        2,
        3
    );

    scene.add(rimLight);


    const accentLight = new THREE.PointLight(
        0xc084fc,
        14,
        12
    );

    accentLight.position.set(
        4,
        -1,
        -2
    );

    scene.add(accentLight);


    // --------------------------------------------------
    // TEMPORARY HERO OBJECT
    // --------------------------------------------------
    // This is deliberately temporary.
    // It gives us something to test the lighting,
    // camera and animation against before importing
    // the actual GLB model.

    const geometry = new THREE.IcosahedronGeometry(
        1.7,
        2
    );

    const material = new THREE.MeshStandardMaterial({
        color: 0x162b38,
        metalness: 0.85,
        roughness: 0.22,
        emissive: 0x06151d,
        emissiveIntensity: 0.45
    });

    const object = new THREE.Mesh(
        geometry,
        material
    );

    object.position.set(
        1.7,
        0.1,
        0
    );

    scene.add(object);


    // --------------------------------------------------
    // INNER CORE
    // --------------------------------------------------

    const coreGeometry =
        new THREE.IcosahedronGeometry(
            0.85,
            2
        );

    const coreMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x7dd3fc,
            metalness: 0.35,
            roughness: 0.15,
            emissive: 0x5eead4,
            emissiveIntensity: 1.5
        });

    const core = new THREE.Mesh(
        coreGeometry,
        coreMaterial
    );

    object.add(core);


    // --------------------------------------------------
    // WIREFRAME DETAIL
    // --------------------------------------------------

    const wireGeometry =
        new THREE.IcosahedronGeometry(
            1.78,
            2
        );

    const wireMaterial =
        new THREE.MeshBasicMaterial({
            color: 0x7dd3fc,
            wireframe: true,
            transparent: true,
            opacity: 0.16
        });

    const wireframe = new THREE.Mesh(
        wireGeometry,
        wireMaterial
    );

    object.add(wireframe);


    // --------------------------------------------------
    // PARTICLES
    // --------------------------------------------------

    const particleCount = 900;

    const positions =
        new Float32Array(
            particleCount * 3
        );

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        positions[i3] =
            (Math.random() - 0.5) * 18;

        positions[i3 + 1] =
            (Math.random() - 0.5) * 12;

        positions[i3 + 2] =
            (Math.random() - 0.5) * 12;
    }

    const particleGeometry =
        new THREE.BufferGeometry();

    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );

    const particleMaterial =
        new THREE.PointsMaterial({
            color: 0x9edfff,
            size: 0.018,
            transparent: true,
            opacity: 0.55,
            depthWrite: false
        });

    const particles =
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );

    scene.add(particles);


    // --------------------------------------------------
    // MOUSE
    // --------------------------------------------------

    const mouse = {
        x: 0,
        y: 0
    };

    const targetMouse = {
        x: 0,
        y: 0
    };


    window.addEventListener(
        "pointermove",
        (event) => {

            targetMouse.x =
                (event.clientX /
                    window.innerWidth) *
                    2 -
                1;

            targetMouse.y =
                -(
                    event.clientY /
                    window.innerHeight
                ) *
                    2 +
                1;
        },
        { passive: true }
    );


    // --------------------------------------------------
    // SCROLL
    // --------------------------------------------------

    let scrollProgress = 0;

    window.addEventListener(
        "scroll",
        () => {

            const maxScroll =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            if (maxScroll <= 0) {
                scrollProgress = 0;
                return;
            }

            scrollProgress =
                window.scrollY / maxScroll;

        },
        { passive: true }
    );


    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------

    function handleResize() {

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(
            width,
            height
        );

        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );
    }

    window.addEventListener(
        "resize",
        handleResize
    );


    // --------------------------------------------------
    // ANIMATION
    // --------------------------------------------------

    const clock = new THREE.Clock();

    function animate() {

        requestAnimationFrame(animate);

        const elapsed =
            clock.getElapsedTime();


        // Smooth mouse movement

        mouse.x +=
            (targetMouse.x - mouse.x) *
            0.035;

        mouse.y +=
            (targetMouse.y - mouse.y) *
            0.035;


        // Object animation

        object.rotation.x =
            elapsed * 0.12;

        object.rotation.y =
            elapsed * 0.18;


        // Subtle mouse influence

        object.position.x =
            1.7 +
            mouse.x * 0.25;

        object.position.y =
            0.1 +
            mouse.y * 0.15;


        // Core movement

        core.rotation.x =
            -elapsed * 0.25;

        core.rotation.y =
            elapsed * 0.35;


        // Wireframe movement

        wireframe.rotation.x =
            elapsed * 0.08;

        wireframe.rotation.y =
            -elapsed * 0.12;


        // Particle movement

        particles.rotation.y =
            elapsed * 0.008;

        particles.rotation.x =
            Math.sin(elapsed * 0.08) *
            0.03;


        // Mouse-responsive lighting

        rimLight.position.x =
            -4 +
            mouse.x * 3;

        rimLight.position.y =
            2 +
            mouse.y * 2;


        // Camera movement

        camera.position.x +=
            (
                mouse.x * 0.35 -
                camera.position.x
            ) * 0.025;

        camera.position.y +=
            (
                0.4 +
                mouse.y * 0.2 -
                camera.position.y
            ) * 0.025;


        // Subtle scroll influence

        camera.position.z =
            7 -
            scrollProgress * 0.7;


        camera.lookAt(
            object.position
        );


        renderer.render(
            scene,
            camera
        );
    }


    animate();


    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {

        window.removeEventListener(
            "resize",
            handleResize
        );

        geometry.dispose();
        material.dispose();

        coreGeometry.dispose();
        coreMaterial.dispose();

        wireGeometry.dispose();
        wireMaterial.dispose();

        particleGeometry.dispose();
        particleMaterial.dispose();

        renderer.dispose();
    };
}