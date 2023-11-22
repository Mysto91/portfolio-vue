<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { Language } from '@/enums/language';
import { Framework } from '@/enums/framework';
import IconReact from '@/components/icons/IconReact.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconJavascript from '@/components/icons/IconJavascript.vue';
import IconTypescript from '@/components/icons/IconTypescript.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconRuby from '@/components/icons/IconRuby.vue';
import IconLaravel from '@/components/icons/IconLaravel.vue';
import IconSymfony from '@/components/icons/IconSymfony.vue';
import IconRails from '@/components/icons/IconRails.vue';
import IconPhp from '@/components/icons/IconPhp.vue';
import IconPrompt from '@/components/icons/IconPrompt.vue';

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
        case Framework.LARAVEL:
          return IconLaravel;
        case Framework.SYMFONY:
          return IconSymfony;
        case Framework.RAILS:
          return IconRails;

        case Language.JAVASCRIPT:
          return IconJavascript;
        case Language.TYPESCRIPT:
          return IconTypescript;
        case Language.RUBY:
          return IconRuby;
        case Language.PHP:
          return IconPhp;
        default:
          return IconPrompt;
      }
    }

    return h(getTechnologyIcon(this.technology));
  },
});
</script>
