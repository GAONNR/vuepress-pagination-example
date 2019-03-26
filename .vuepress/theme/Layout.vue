<template>
    <div>
        <!-- Pagination needs to render when the path is '/page/' or '/page/#' -->
        <Pagination v-if="this.$page.path.includes('page') && this.$page.path.endsWith('/')" />
        <Content v-else />
    </div>
</template>

<script>
import Pagination from "./components/Pagination.vue"

export default {
    components: {
        Pagination
    }
}
</script>
