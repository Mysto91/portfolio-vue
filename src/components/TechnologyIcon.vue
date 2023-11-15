<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { Language } from '@/enums/language';
import { Framework } from '@/enums/framework';
import IconReact from '@/components/icons/IconReact.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconJavascript from '@/components/icons/IconJavascript.vue';
import IconTypescript from '@/components/icons/IconTypescript.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';

export default defineComponent({
  name: 'TechnologyIcon',

  props: {
    technology: {
      type: String as PropType<Language | Framework>,
      required: true,
    },
  },

  render() {
    function getTechnologyIcon(technology: Language | Framework) {
      switch (technology) {
        case Framework.REACT:
          return IconReact;
        case Framework.VUE:
          return IconVue;
        case Framework.TAILWINDCSS:
          return IconTailwind;

        case Language.JAVASCRIPT:
          return IconJavascript;
        case Language.TYPESCRIPT:
          return IconTypescript;
        default:
          // TODO : Icon par défaut
          return IconVue;
      }
    }

    return h(getTechnologyIcon(this.technology));
  },
});
</script>
