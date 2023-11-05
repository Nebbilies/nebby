<script>
    import Icon from '@iconify/svelte';
    import facebookIcon from '@iconify/icons-mdi/facebook';
    import twitterIcon from '@iconify/icons-mdi/twitter';
</script>

<style>
    .header {
        background-color: #232323;
        height: 60px;
        width: 100%;
        border-bottom: 2px solid #404040;
        z-index: 2;
    }
    .button {
        width: 90px;
        padding: 14px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        text-align: center;
        float: left;
        display:inline-block;
        opacity: 0.7;
    }
    .button:hover {
        transition-duration: .5s;
        background-color: #404040;
    }
    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        left: -1px;
        transition: 0.5s;
        font-size: 21px;
    }

    .button span:after {
        content: '\00ab';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -8px;
        transition: 0.5s;
    }

    .button:hover span {
        padding-right: 10px;
    }

    .button:hover span:after {
        opacity: 1;
        right: -5px;
    }

    .navigation {
        float: right;
        display: inline-block;
        vertical-align: center;
        position: relative;
        overflow: hidden;
        opacity: 0.8;
    }

    .navigation li {
        display: inline-block;
        padding: 17px 17px;
    }

    .navigation li:hover {
        transition-duration: .5s;
        background-color: #404040;
        border-radius: 7px;
    }

    @keyframes moveUpDown {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .moveUpDown {
        animation: moveUpDown 4s ease-in-out infinite;
    }
</style>

<head>
    <title>Works</title>
</head>
<div class="header">
    <div class="button">
        <a href="./" ><span>Back</span></a>
    </div>
    <ul class="navigation">
        <li>
            <a href="./about" target="_self">About</a>
        </li>
    </ul>
</div>
<div class="flex flex-col relative items-center text-4xl justify-center w-screen mt-24 mb-16 font-extrabold">
    <div class="titleName">
        Works
    </div>
    <div class="text-sm font-normal mt-1 text-center">
        (These charts are NOT official, and serve as entertainment purposes only.)
    </div>
</div>
<div class="w-screen flex justify-center flex-col items-center min-w-screen w-screen mb-6 opacity-100">
    <hr class="border-gray-500 border-1 rounded w-[300px]">
</div>
<div class="flex w-screen justify-center items-center min-w-screen mb-6">
    <div class="text-xl">Commission Status: <span class="font-bold text-green-500">OPEN</span></div>
</div>
<div class="pl-16 pr-16 gap-8 grid grid-rows-2 grid-cols-1 lg:grid-cols-2 justify-center relative items-center min-w-screen content-center">
    <a href="https://www.facebook.com/100014579646085/videos/1536211657193777/">
    <div class="flex flex-col justify-center items-center bg-[#232323] hover:bg-[#343434] duration-300 p-4 rounded-2xl box1">
        <div class="w-1/3 overflow-hidden rounded border-2 border-white">
            <img src="./TheSpectre.png" class="w-full">
        </div>
        <div class="flex justify-center flex-col items-center min-w-screen w-screen opacity-40 pt-6">
            <hr class="w-[180px] border-2 border-white rounded">
        </div>
        <div class="text-3xl pt-3 text-center">
            The Spectre
        </div>
        <div class="text-md text-center">
            Alan Walker
        </div>
    </div>
    </a>
    <a href="https://www.facebook.com/100014579646085/videos/599324288991735/">
    <div class="flex flex-col justify-center items-center bg-[#232323] hover:bg-[#343434] duration-300 p-4 rounded-2xl">
        <div class="w-1/3 overflow-hidden rounded border-2 border-white">
            <img src="./Utakata.png" class="w-full">
        </div>
        <div class="flex justify-center flex-col items-center min-w-screen w-screen opacity-40 pt-6">
            <hr class="w-[180px] border-2 border-white rounded">
        </div>
        <div class="text-2xl text-center pt-3">
            うたかたのせかいで
        </div>
        <div class="text-md text-center">
            DJ Raisei vs Setca. feat.nayuta
        </div>
    </div>
    </a>
    <a href="https://www.facebook.com/100014579646085/videos/773674251060981/" >
    <div class="flex flex-col justify-center items-center bg-[#232323] hover:bg-[#343434] duration-300 p-4 rounded-2xl">
        <div class="w-1/3 overflow-hidden rounded border-2 border-white">
            <img src="./DistortedFate.png" class="w-full">
        </div>
        <div class="flex justify-center flex-col items-center min-w-screen w-screen opacity-40 pt-6">
            <hr class="w-[180px] border-2 border-white rounded">
        </div>
        <div class="text-3xl pt-3 text-center">
            Distorted Fate
        </div>
        <div class="text-md text-center">
            Sakuzyo
        </div>
    </div>
    </a>
    <a href="https://www.facebook.com/100014579646085/videos/478404801054871/">
    <div class="flex flex-col justify-center items-center bg-[#232323] hover:bg-[#343434] duration-300 p-4 rounded-2xl">
        <div class="w-1/3 overflow-hidden rounded border-2 border-white">
            <img src="./HorizonBlue.png" class="w-full">
        </div>
        <div class="flex justify-center flex-col items-center min-w-screen w-screen opacity-40 pt-6">
            <hr class="w-[180px] border-2 border-white rounded">
        </div>
        <div class="text-3xl pt-3 text-center">
            Horizon Blue
        </div>
        <div class="text-md text-center">
            Nothing But Requiem feat.Aikapin & Chiyoko
        </div>
    </div>
    </a>
</div>
<div class="flex justify-center flex-col items-center max-w-screen w-screen mt-12 opacity-100">
    <hr class="border-gray-500 border-1 rounded w-[300px]">
</div>
<div class="mt-8 mb-16">
    <ul class="flex-wrap flex md:flex-row gap-10 items-center justify-center">
        <li>
            <div class="text-4xl">
                <a href="https://twitter.com/NebbyFour" target="_blank">
                    <Icon icon={twitterIcon} class="transition text-neutral-400 duration-300 hover:text-white"/>
                </a>
            </div>
        </li>
        <li>
            <div class="text-4xl">
                <a href="https://www.facebook.com/nebbilies0917/" target="_blank">
                    <Icon icon={facebookIcon}
                          class="w-full h-full text-neutral-400 transition duration-300 hover:text-white"/>
                </a>
            </div>
        </li>
    </ul>
</div>