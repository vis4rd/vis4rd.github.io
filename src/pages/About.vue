<script setup>
    import BorderWrapper from "@/components/BorderWrapper.vue";

    function calc_my_age() {
        return Math.abs(new Date(Date.now() - 956613600000).getUTCFullYear() - 1970);
    }
</script>

<template>
    <BorderWrapper>
        <div>
            <h1>About me</h1>

            <hr />

            <p>
                I am a {{ calc_my_age() }} years old programmer from Poland. Currently I am master's
                degree student at AGH UST in Applied Computer Science.
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
                or even Java. I am also familiar with SQL and NoSQL databases. That being said,
                these skills have let me build and deploy this simple website, for example.
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
    </BorderWrapper>
</template>

<style scoped></style>
