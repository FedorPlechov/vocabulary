<template>
  <div>
    <base-dialog :show="true" @close="handler">
      Are you sure, that want to delete this chunk?
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from "@/components/UI/BaseDialog";

export default {
  name: "DeleteChunk",
  props:['chunk'],
  components: {
    BaseDialog
  },
  methods: {
    handler(conf) {
      if (conf) {
        this.$store.dispatch('vocabulary/deleteChunk', this.chunk);
        this.$router.replace({name: 'Vocabulary'})
      } else {
        this.$router.replace({name: 'img'})
      }
    }
  }
}
</script>

<style scoped>

</style>
