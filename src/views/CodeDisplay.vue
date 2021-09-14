<template>
  <ToolBox
    @new-file="newFile"
    @duplicate-file="duplicateFile"
    @share-twitter="shareTwitter"
    :disableSaveOption="true"
    :disablePrettifyOption="true"
  />
  <code-editor v-if="code" v-model:code="code" :editable="false"></code-editor>
</template>

<script>
  import ToolBox from '../components/ToolBox.vue';
  import CodeEditor from '../components/CodeEditor.vue';
  import { ref, onMounted, inject } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import axios from 'axios';
  export default {
    name: 'CodeDisplay',
    components: {
      CodeEditor,
      ToolBox,
    },
    setup() {
      const code = ref(``);
      const route = useRoute();
      const router = useRouter();
      const { slug } = route.params;
      const $store = inject('$store');
      const toast = useToast();

      onMounted(async () => {
        try {
          code.value = (
            await axios.get(`${process.env.VUE_APP_API_URL}code/${slug}`)
          ).data.code;
        } catch (e) {
          toast.error('Invalid Url, Code does not exist');
          router.push({ name: 'new' });
        }
      });

      const duplicateFile = () => {
        $store.code = code.value;
        router.push({ name: 'new' });
      };

      const newFile = () => {
        $store.code = '';
        router.push({ name: 'new' });
      };
      const shareTwitter = () => {
        window.open(
          'https://twitter.com/share?url=' + encodeURI(window.location.href)
        );
      };
      return {
        code,
        duplicateFile,
        shareTwitter,
        newFile,
      };
    },
  };
</script>
