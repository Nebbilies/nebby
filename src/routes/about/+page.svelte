<script>

    import Icon from '@iconify/svelte';
    import facebookIcon from '@iconify/icons-mdi/facebook';
    import twitterIcon from '@iconify/icons-mdi/twitter';
    import steamIcon from '@iconify/icons-mdi/steam';
    import twitchIcon from '@iconify/icons-mdi/twitch';
    import osuIcon from '@iconify/icons-simple-icons/osu';
    import myanimelistIcon from '@iconify/icons-simple-icons/myanimelist';
    import blueArchive from '@iconify/icons-arcticons/blue-archive';
    import aboutMe from '@iconify/icons-cib/about-me';
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

    .banner {
        width: 100%;
        height: 500px;
        overflow:hidden;
    }

    .titleName {
        position: relative;
        text-align: center;
        vertical-align: center;
        top: 45%;
        color: white;
        font-size: 50px;
        text-shadow: 2px 2px 4px #000000;
    }
</style>

<div class="header">
        <div class="button">
            <a href="./" ><span>Back</span></a>
        </div>
        <ul class="navigation">
            <li>
                <a href="./">Works</a>
            </li>
        </ul>
</div>
<div class="flex relative items-center text-4xl justify-center w-screen mt-24 mb-16 font-extrabold">
    <div class="titleName">
        Hi, I'm <span class="text-red-300">Nebby</span>
    </div>
</div>
<div class="w-screen flex justify-center flex-col items-center min-w-screen w-screen mb-16 opacity-100">
    <hr class="border-gray-500 border-1 rounded w-[300px]">
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center min-w-screen relative content-center">
    <div class="flex flex-col text-[#fff] p-4 md:pl-8 tracking-wide align-middle">
        <div class="text-4xl font-bold text-center lg:text-right mr-4">Brief Introduction</div>
        <div class="text-xl mt-8 leading-8">
            18 years old, usually referred by "Neb" instead. I recently graduated from high school and enrolled in
            <span class="text-red-200 font-bold">Computer Science, </span><span class="text-blue-200 font-bold">University of Information Technology</span> (UIT), Ho Chi Minh City. I've started exploring the vast possibilities of programming since I was 13, and I've been learning it ever since. Having participated in a few city-sized programming competitions and earning some prizes here and there, I've gained some experience in programming and problem-solving. As of now, I'm still improving my skills and particularly interested in <span class="text-yellow-200 font-bold">Web Development</span> and <span class="text-green-200 font-bold">Machine Learning</span>.

        </div>
    </div>
    <div class="flex max-w-screen justify-center items-center">
        <img src="/uit.jpg" alt="UIT" class="rounded-lg shadow-2xl">
    </div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center min-w-screen relative content-center mt-32">
    <div class="flex max-w-screen justify-center items-center">
        <img src="/maimaiTourney.jpg" alt="maimaiTourney" class="rounded-lg border-2 border-white shadow-2xl w-5/6">
    </div>
    <div class="flex flex-col text-[#fff] p-4 md:pr-8 mt-8 lg:mt-0 tracking-wide align-middle text-left">
        <div class="text-4xl font-bold text-center lg:text-left">Personality & Hobbies</div>
        <div class="text-xl mt-8 leading-8">
            <div>
                I've always been a introverted person, however, I'm also really easygoing, friendly and open to people. I'd love to make new friends but thing is I'm that one guy who's always hesitant to start the conversation. <span class="text-red-200 font-bold">Friendship</span> for me, is a treasure that I'd never want to lose. Therefore, I've always been very energetic in my friend group.
            </div>
            <div class="mt-2">
                I'm still kinda active in the <span class="text-pink-200 font-bold">osu!</span> community.  However, <span class="text-blue-200 font-bold text-2xl">maimai</span> at the moment is my main hobby. I've participated in hosting and playing a few tournaments. I'm also a <span class="text-yellow-200 font-bold">maimai custom charter</span> <span class="text-sm"> (open to receive commissions at a small price)</span>. Hope you guys can check out. ❤
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col justify-center items-center max-w-screen mt-8">
    <div class="text-sm bg-black text-black hover:text-gray-200 p-1 duration-500">
        I'm single.
    </div>
</div>
<div class="w-screen flex justify-center flex-col items-center min-w-screen w-screen mt-8 opacity-100">
    <hr class="border-gray-500 border-1 rounded w-[300px]">
</div>
<div class="mt-8 mb-16">
    <ul class="flex flex-col md:flex-row gap-10 items-center justify-center">
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

