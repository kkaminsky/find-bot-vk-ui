<template>
<div>

</div>
</template>

<script>
    export default {
        name: "RedirectPage",

        created() {
          localStorage.setItem("code",this.$route.query.code)

          window.close()
        }
    }
</script>

<style scoped>

</style>
