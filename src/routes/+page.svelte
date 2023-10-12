<script>
    import {onMount} from "svelte";
    import Icon from '@iconify/svelte';
    import facebookIcon from '@iconify/icons-mdi/facebook';
    import twitterIcon from '@iconify/icons-mdi/twitter';
    import steamIcon from '@iconify/icons-mdi/steam';
    import twitchIcon from '@iconify/icons-mdi/twitch';
    import osuIcon from '@iconify/icons-simple-icons/osu';
    import myanimelistIcon from '@iconify/icons-simple-icons/myanimelist';
    import blueArchive from '@iconify/icons-arcticons/blue-archive';
    import aboutMe from '@iconify/icons-cib/about-me';

    const waifus = ["Aru", "Nino"];

    let i = 0;
    let waifu = waifus[i];

    onMount(() => {
        const waifuSpan = window.document.querySelector("#waifu");

        waifuSpan.style.opacity = 1;

        setInterval(() => {
            waifuSpan.style.opacity = 0;

            if (++i >= waifus.length) {
                i = 0;
            }

            setTimeout(() => {
                waifu = waifus[i];
                waifuSpan.style.opacity = 1;
            }, 300)
        }, 4000);
    })
</script>

<style>
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes scaleUp {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    .fade-normal {
        animation: fadeIn 1s ease-in-out;
    }
    .fade-one {
        animation: fadeIn 2s ease-in-out 1s 1;
    }
    .fade-two {
        animation: fadeIn 2s ease-in-out 1.2s 1;
    }
    .fade-three {
        animation: fadeIn 2s ease-in-out 1.4s 1;
    }
    .fade-four {
        animation: fadeIn 2s ease-in-out 1.6s 1;
    }
    .fade-five {
        animation: fadeIn 2s ease-in-out 1.8s 1;
    }
    .hr-line {
        animation: scaleUp 1.5s ease-in-out 3s 1;
    }
</style>


<div class="flex flex-col min-h-screen justify-center items-center px-12 md:px-24 py-16 gap-10">
    <div class="w-full max-w-5xl flex flex-col justify-center items-center">
        <div class="justify-stretch gap-6 flex flex-col">
            <div class="w-full h-full select-none animate-none">
                <img
                        src="/nebby.png" alt="Nebby Logo"
                        class="w-full h-full object-fill rounded fade-normal"
                >
            </div>
            <div class="text-3xl text-center font-medium tracking-wider fade-normal">
                <p>Professional
                    <span id="waifu"
                          class="text-red-300 tracking-normal text-4xl transition duration-300 ease-in-out">{waifu}</span>
                    simp
                </p>
            </div>
        </div>
    </div>
    <div class="justify-center flex flex-col w-[350px] opacity-100">
        <hr class="w-full border-white-400 border-[1px] rounded"/>
    </div>
    <div>
        <ul class="flex flex-col md:flex-row gap-10 items-center justify-center">
            <li>
                <div class="text-4xl fade-one">
                    <a href="https://twitter.com/NebbyFour" target="_blank">
                        <Icon icon={twitterIcon} class="transition text-neutral-400 duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-two">
                    <a href="https://www.facebook.com/nebbilies0917/" target="_blank">
                        <Icon icon={facebookIcon}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="w-12 h-12">
                    <a href="https://maimaidx-eng.com/maimai-mobile/friend/search/searchUser/?friendCode=8064894684537"
                       target="_blank"><img
                            src="/maimai.png"
                            alt="maimai"
                            class="grayscale w-full h-full rounded border-pink-1300 fade-three"

                    />
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-four">
                    <a href="https://steamcommunity.com/profiles/76561198849329500" target="_blank">
                        <Icon icon={steamIcon}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white fade-four"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-7xl fade-five">
                    <a href="/about">
                        <Icon icon={aboutMe}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-four">
                    <a href="https://www.twitch.tv/nebbilies" target="_blank">
                        <Icon icon={twitchIcon}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-three">
                    <a href="https://osu.ppy.sh/users/10635981" target="_blank">
                        <Icon icon={osuIcon}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-two">
                    <a href="https://cdn.discordapp.com/attachments/970659022250311700/1158465894444453919/image.png?ex=651c58f0&is=651b0770&hm=38aa121b0a0cf582d9599f6404f77fe3b652b60af59d0cda8b3eb5728d37c379&"
                       target="_blank">
                        <Icon icon={blueArchive}
                              class="w-full h-full text-neutral-300 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
            <li>
                <div class="text-4xl fade-one">
                    <a href="https://myanimelist.net/animelist/Nebbilies" target="_blank">
                        <Icon icon={myanimelistIcon}
                              class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
