<script>
    const images = [
        "/lam/lam1.PNG",
        "/lam/lam2.jpg",
        "/lam/lam3.jpg",
        "/lam/lam4.jpg",
        "/lam/lam5.jpg",
        "/lam/lam6.jpg",
        "/lam/lam7.jpg",
        "/lam/lam8.jpg",
        "/lam/lam9.jpg",
        "/lam/lam10.jpg",
        "/lam/lam11.png",
        "/lam/lam12.jpg",
        "/lam/lam13.jpg",
        "/lam/lam14.jpg",
        "/lam/lam15.jpg",
        "/lam/lam16.jpg",
        "/lam/lam17.jpg",
        "/lam/lam18.jpg",
        "/lam/lam19.jpg",
        "/lam/lam20.jpg",
        "/lam/lam21.png",
        "/lam/lam22.jpg",
        "/lam/lam23.jpg",
        "/lam/lam24.jpg",
        "/lam/lam25.jpg",
        "/lam/lam26.jpg",
        "/lam/lam27.jpg",
        "/lam/lam28.png",
        "/lam/lam29.jpg",
        "/lam/lam30.png",
    ]

</script>


<div class="flex flex-wrap max-w-screen">
    {#each images as image}
        <div>
            <img src={image} alt="lam1"/>
        </div>
    {/each}
</div>