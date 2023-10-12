<script>
    import { onMount } from 'svelte';

    const links = [
        {title: "How to use", path: "/tutorials"},
        {title: "Login", path: "/login"}
    ];

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const animationLeft = entry.target.querySelector('.anim-left');
                const animationRight = entry.target.querySelector('.anim-right');

                if (entry.isIntersecting) {
                    animationLeft.classList.add('animationLeft');
                    animationRight.classList.add('animationRight');
                    return;
                }
                animationLeft.classList.add('opacity-100');
                animationRight.classList.add('opacity-100');
                animationLeft.classList.remove('animationLeft');
                animationRight.classList.remove('animationRight');
            });
        });

        observer.observe(document.querySelector('.image-anim'));
    })

</script>

<div class="flex flex-col fixed w-screen items-center shrink z-10 font-mplus">
    <div class="flex justify-between items-center rounded-b-2xl w-full max-w-5xl pt-0.5 pb-1 bg-gray-800">
        <div class="flex w-50 left-3 relative">
            <div class="h-12 w-12">
                <img src="/maimaiBot.png" alt="maimaiBot" class="h-full w-fit aspect-square"/>
            </div>
            <div class="ml-3 text-left">
                <div class="text-xl font-bold">
                    mimi xd
                </div>
                <div class="w-5xl items-center tracking-normal leading-5">
                    maimai
                    <span class="text-red-300 ml-1">で</span>
                    <span class="text-orange-300">ら</span>
                    <span class="text-yellow-300">っ</span>
                    <span class="text-blue-300">く</span>
                    <span class="text-green-300">す</span>
                    <span class="font-bold tracking-widest">Utilities </span> Bot
                </div>
            </div>
        </div>
        <div class="self-end">
            <ul class="mr-6 mb-0.5 relative flex gap-8 font-bold tracking-widest">
                {#each links as link, i}
                    <li>
                        <a href={link.path}>
                            <div class="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:scale-x-0 after:hover:scale-x-100 after:bg-sky-300 after:transitions after:duration-500 after:ease-out">
                                {link.title}
                            </div>
                        </a>
                    </li>
                    {#if i < links.length - 1}
                        <li>
                            <hr class="h-5/6 border-white-300 border-[1px] rounded absolute">
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
</div>
<div class="snap-y">
    <div class="flex flex-col flex-wrap pt-20 bg-no-repeat overflow-hidden rounded-b-[50px] bg-cover min-w-full max-w-full h-full pt-10 justify-center items-center font-mplus snap-center"
         style="background-image: url('/BG_Festival.png')">
        <div class="grid grid-cols-2 relative max-w-6xl min-h-screen justify-center content-center align-items-center gap-8">
            <div class="flex items-center justify-center">
                <img src="/maimaiBot.png" alt="maimaiBot" class="w-3/4 max-h-full aspect-square mb-16"/>
            </div>
            <div class="flex flex-col justify-center text-[#62387c] text-justify align-middle mb-16">
                <div class="text-6xl">
                    <div class="font-extrabold">Multi-functional</div>
                    <div class="font-bold">mimi xd bot</div>
                </div>
                <p class="mt-5">
                    1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Bb4+ 5. Bd2 Be7 6. Bg2 O-O 7. O-O Nbd7 8. Qc2
                    Ne4 9. Bf4 c6 10. Nc3 g5 11. Bc1 f5 12. b3 b6 13. Bb2 Bb7 14. Rad1 Qe8 15. Ne5
                    Nxe5 16. dxe5 Nxc3 17. Qxc3 Rc8 18. e3 Qg6 19. Qc1 Qg7 20. f4 gxf4 21. gxf4 Kh8
                    22. Kh1 Rg8 23. Bf3 Qh6 24. Ba3 Bxa3 25. Qxa3 Rg7 26. Qb2 Rcg8 27. Rg1 Qh4 28.
                    Rxg7 Rxg7 29. Qd2 Ba6 30. cxd5 cxd5 31. Rg1 Rc7 32. Qg2 Qd8 33. Qh3 Rg7 34. Qh6
                    Rxg1+ 35. Kxg1 d4 36. Qxe6 dxe3 37. Qd6 Qg8+ 38. Bg2 Qg4 39. e6 e2 40. Qe5+ Qg7
                    41. Kf2 Qxe5 42. fxe5 Kg7 43. Bf3 Kf8 44. Bxe2 Bc8 45. Bc4 Ke7 46. Ke3 Bb7 47.
                    Bd3 h6 48. Bxf5 Bc6 49. b4 Bd5 50. a3 Bb3 51. Bg4 Ba4 52. Kf4 Bc2 53. Kg3 Bd3
                    54. Kh4 Bg6 55. Bh5 Bc2 56. Bg4 Bg6 57. Kg3 Bc2 58. Kf4 Bd3 59. Ke3 Bc2 60. Kd4
                    Bb3 61. Bf5 Bd1 62. Kd5 Ba4 63. Bd3 Be8 64. b5 Bh5 65. Kc6 Bf3+ 66. Kc7 Kxe6 67.
                    Kb8 Kxe5 68. Kxa7 Kd4 69. Kxb6 Kxd3 70. Kc5 Ke4 71. a4 Ke5 72. a5 Ke6 73. Kb6
                    Be2 74. Kc6 Ke7 75. b6 1-0</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col flex-wrap pt-20 bg-no-repeat overflow-hidden bg-cover min-w-full max-w-full h-full pt-10 justify-center items-center font-mplus snap-center">
        <div class="grid grid-cols-2 relative max-w-6xl min-h-screen justify-center content-center align-items-center gap-8">
            <div class="flex items-center justify-center image-anim">
                <img src="/TopPlayOverlay.png" alt="maimaiBot" class="w-1/2 anim-left opacity-0 absolute mt-24 mr-4 rotate-12 max-h-full aspect-ratio: auto mb-16 animationLeft"/>
                <img src="/TopPlayOverlay.png" alt="maimaiBot" class="w-2/5 anim-right opacity-0 absolute mb-48 ml-16 -rotate-12 max-h-full aspect-ratio: auto mb-16 shadow animationRight"/>
            </div>
            <div class="flex flex-col justify-center text-[#fff] text-justify align-middle mb-16">
                <div class="text-7xl">
                    <div class="font-extrabold">Recent Scores</div>
                </div>
                <p class="mt-5">
                    hieu</p>
            </div>
        </div>
        <div class="grid grid-cols-2 relative max-w-6xl min-h-screen justify-center content-center align-items-center gap-8">
            <div class="flex items-center justify-center">
                <img src="/maimaiBot.png" alt="maimaiBot" class="w-3/4 max-h-full aspect-square mb-16"/>
            </div>
            <div class="flex flex-col justify-center text-[#fff] text-justify align-middle mb-16">
                <div class="text-8xl">
                    <div class="font-extrabold">Best Scores</div>
                </div>
                <p class="mt-5">
                    bip</p>
            </div>
        </div>
        <div class="grid grid-cols-2 relative max-w-6xl min-h-screen justify-center content-center align-items-center gap-8">
            <div class="flex items-center justify-center">
                <img src="/maimaiBot.png" alt="maimaiBot" class="w-3/4 max-h-full aspect-square mb-16"/>
            </div>
            <div class="flex flex-col justify-center text-[#fff] text-justify align-middle mb-16">
                <div class="text-8xl">
                    <div class="font-extrabold">Photos!</div>
                </div>
                <p class="mt-5">
                    ligma</p>
            </div>
        </div>
        <div class="grid grid-cols-2 relative max-w-6xl min-h-screen justify-center content-center align-items-center gap-8">
            <div class="flex items-center justify-center">
                <img src="/maimaiBot.png" alt="maimaiBot" class="w-3/4 max-h-full aspect-square mb-16"/>
            </div>
            <div class="flex flex-col justify-center text-[#fff] text-justify align-middle mb-16">
                <div class="text-8xl text-left">
                    <div class="font-extrabold">Song Search</div>
                </div>
                <p class="mt-5">
                    hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma
                    hieubipligma
                    hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma
                    hieubipligma
                    hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma
                    hieubipligma
                    hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma hieubipligma
                    hieubipligma </p>
            </div>
        </div>
    </div>
</div>

<style>
    .shadow {
        filter: drop-shadow(0 30px 10px rgb(0 0 0 / 0.6))
    }
    @keyframes fly-left {
        0% {
            transform: translateX(40%);
            opacity: 0;
        }
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }
    @keyframes fly-right {
        0% {
            transform: translateX(-40%);
            opacity: 0;
        }
        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }
    .animationLeft {
        animation: fly-left 1s ease-out;
    }
    .animationRight {
        animation: fly-right 1s ease-out;
    }
</style>
