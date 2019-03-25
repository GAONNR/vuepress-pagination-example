<template>
    <div>
        <Content v-if="this.$page.path.endsWith('html')" />
        <Pagination v-else/>
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
