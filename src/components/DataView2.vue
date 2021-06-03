<template>
    <div>
        <div>
            {{ selectedEvents }}
        </div>
    </div>
</template>

<script>
export default {
    name: "data-view",
    computed: {
        selectedEvents: function() {
            return this.$store.state.selectedEvent;
        }
    }
}
</script>