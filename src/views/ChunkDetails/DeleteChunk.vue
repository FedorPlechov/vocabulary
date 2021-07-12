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
  components: {
    BaseDialog
  },
  methods: {
    handler(conf) {
      if (conf) {
        //delete required to API
        this.$router.push({name: 'Vocabulary'})
      } else {
        this.$router.push({name: 'DetailChunk'})
      }
    }
  }
}
</script>

<style scoped>

</style>
