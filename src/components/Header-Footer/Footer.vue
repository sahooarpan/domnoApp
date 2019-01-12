<template>
    <footer>
        <div class="container">
            <div>
            <img :src="logoIcon" alt="Domno">
            <div class="contact">
                <div>Call Us</div>
                <div>45677-7778</div>
            </div>
            </div>
        </div>

    </footer>

</template>
<script>
import Logo from '../../assets/images/logo.png'
export default {
    logoIcon:Logo
}
</script>
