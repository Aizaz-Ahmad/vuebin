<template>
  <ToolBox
    @save-file="saveCodeToDb"
    @new-file="code = ''"
    @prettify-code="formatCode"
    :disableDuplicateOption="true"
    :disableTwitterOption="true"
    :disableSaveOption="!code.length"
    :disablePrettifyOption="!code.length"
  />
  <code-editor v-model:code="code" ref="codeEditor"></code-editor>
</template>

<script>
  import ToolBox from '../components/ToolBox.vue';
  import CodeEditor from '../components/CodeEditor.vue';
  import { useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import axios from 'axios';
  import { ref, inject } from 'vue';
  export default {
    name: 'NewPage',
    components: {
      CodeEditor,
      ToolBox,
    },
    setup() {
      const router = useRouter();
      const toast = useToast();
      const $store = inject('$store');
      const $loading = inject('$loading');
      const code = ref($store.code);
      const codeEditor = ref(null);

      const formatCode = () => {
        codeEditor.value.formatCode();
      };

      const saveCodeToDb = async () => {
        const loading = $loading.show();
        formatCode();
        let slug = (
          await axios.post(`${process.env.VUE_APP_API_URL}new`, {
            code: code.value,
          })
        ).data.slug;
        await navigator.clipboard.writeText(
          `${window.location.origin}/code/${slug}`
        );
        toast.success('Code Saved, Url Copied to Clipboard');
        loading.hide();
        router.push({
          name: 'code',
          params: {
            slug,
          },
        });
      };

      return {
        code,
        saveCodeToDb,
        codeEditor,
        formatCode,
      };
    },
  };
</script>
