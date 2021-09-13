<template>
  <div class="d-flex">
    <div class="d-flex flex-column line-numbers">
      <span
        v-for="lineNumber in lineNumbers"
        :key="`lineNumber-${lineNumber}`"
        >{{ lineNumber }}</span
      >
    </div>
    <div class="relative" style="width: calc(100% - 35px)">
      <div
        class="absolute editor-common-style"
        id="highlighted-code"
        ref="highlightedCodeDiv"
      ></div>
      <textarea
        v-focus
        v-if="editable"
        class="editor-common-style"
        ref="textarea"
        @input="updateCode"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        spellcheck="false"
        :value="code"
        @blur="preventBlur"
        @keyup.tab="updateCode"
        @keyup.enter="updateCode"
      ></textarea>
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, watch, toRefs, inject } from 'vue';
  import shiki from '../plugins/shiki';
  import usePrettier from '../composables/usePrettier';
  const tabOverride = require('taboverride');

  function useLineNumbers(code) {
    const lineNumbers = ref(1);
    const updateLineNumber = () => {
      lineNumbers.value = code.value.split('\n').length + 1;
    };
    onMounted(updateLineNumber);
    watch(code, updateLineNumber);

    return {
      lineNumbers,
    };
  }
  function useShikiWithCode(code) {
    let _shiki = null;
    const $loading = inject('$loading');
    const highlightedCodeDiv = ref(null);

    onMounted(async () => {
      let loader = $loading.show();
      _shiki = await shiki.getShiki();
      highlightedCodeDiv.value.innerHTML = _shiki.codeToHtml(code.value, 'vue');
      watch(code, newVal => {
        highlightedCodeDiv.value.innerHTML = _shiki.codeToHtml(newVal, 'vue');
      });
      loader.hide();
    });

    return {
      highlightedCodeDiv,
    };
  }
  function setupEditor(emit) {
    const textarea = ref(null);
    onMounted(() => {
      tabOverride.tabSize(4).autoIndent(true).set(textarea.value);
    });
    const updateCode = () => {
      emit('update:code', textarea.value.value);
    };
    const preventBlur = async () => {
      textarea.value?.focus();
    };

    return {
      textarea,
      preventBlur,
      updateCode,
    };
  }
  export default {
    name: 'CodeEditor',
    props: {
      code: {
        required: true,
        type: String,
      },
      editable: {
        default: true,
        type: Boolean,
      },
    },
    emits: ['update:code'],
    setup(props, { emit }) {
      const { code } = toRefs(props);
      const { lineNumbers } = useLineNumbers(code);
      const { highlightedCodeDiv } = useShikiWithCode(code);
      const { textarea, preventBlur, updateCode } = setupEditor(emit);
      const { formatCode } = usePrettier(textarea, code, emit);
      return {
        lineNumbers,
        textarea,
        preventBlur,
        updateCode,
        highlightedCodeDiv,
        formatCode,
      };
    },
  };
</script>
<style scoped>
  #highlighted-code {
    z-index: 0;
    background-color: transparent;
    white-space: pre;
  }
  .editor-common-style {
    font-size: var(--code-font-size);
    font-family: var(--code-font-family);
    line-height: 1.5;
    height: 100%;
    padding-left: 10px;
    width: 100%;
    word-wrap: break-word;
  }
  textarea {
    position: relative;
    z-index: 1;
    border: none;
    outline: none;
    resize: none;
    background: transparent;
    caret-color: yellow;
    overflow-y: hidden;
    color: transparent;
  }
</style>
