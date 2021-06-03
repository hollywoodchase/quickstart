<template>
    <div>
        <div>API Section</div>
        <div>
            {{ apiDataDump }}
        </div>
    </div>
</template>

<script>
export default {
    name: "api-view",
    computed: {
        apiDataDump: function() {
            return this.$store.state.apiData
        }
    }
}
</script>