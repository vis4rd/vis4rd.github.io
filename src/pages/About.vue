<script setup lang="ts">
    import SectionWrapper from "@/components/base/SectionWrapper.vue";

    function calc_my_age() {
        return Math.abs(new Date(Date.now() - 956613600000).getUTCFullYear() - 1970);
    }
</script>

<template>
    <SectionWrapper>
        <div>
            <h1>About me</h1>

            <hr />

            <p>
                I am a {{ calc_my_age() }} years old programmer from Poland. Recently I graduated
                from AGH University of Science and Technology in Kraków with a Master's degree in
                Applied Computer Science.
            </p>

            <p>
                Since I was young I was interested in computers and graphics. Learning C/C++ opened
                a door for me to dive into low-level rendering programming. So far I have been
                working with graphics libraries like SFML, SDL, Raylib, but also got comfortable
                with OpenGL. My plans for the future are to learn Vulkan API. In my free time I
                slowly develop
                <a href="https://github.com/vis4rd/monoshot/tree/dev" target="_blank">Monoshot</a> -
                a simple top-down shooter game, as a hobby.
            </p>

            <p>
                Other than that I am well versed in web development thanks to my university. I can
                develop full-stack web applications using modern Javascript frameworks, Python, Node
                or even Java.
            </p>

            <p>
                As a master thesis I created a chat application based on Solana blockchain. I
                learned a lot about blockchain technology, smart contracts and cryptocurrencies.
            </p>

            <p>
                Outside of programming I like playing football, swimming and cycling. I am also a
                movie geek - I love sci-fi genre, so naturally I am big fan of Star Wars universe.
                From time to time I like to read some good books, mostly fantasy and sci-fi as well.
                I could recommend <em>'Witcher'</em> saga, <em>'Three-Body Problem'</em> and
                <em>'Lord of the Ice Garden'</em> series.
            </p>

            <p>
                That's it! In future I might start a blog here about some intriguing topics, so who
                knows, maybe you will be able to read more there.
            </p>
        </div>
    </SectionWrapper>
</template>

<style scoped></style>
