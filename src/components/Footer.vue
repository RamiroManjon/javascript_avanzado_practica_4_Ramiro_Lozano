<template>
    <footer>
        <div>
            <h1>Adiós, Nakama</h1>
            <div class="sombrero">
                <img v-lazy="'/images/farmer-hat.webp'" alt="">
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .sombrero {
            max-width: 8vw;

            & img {
                width: 100%;
            }
        }
    }
}
</style>