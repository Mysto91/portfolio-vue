<script lang="ts">
import { defineComponent, h, PropType } from 'vue';
import { SocialNetwork } from '@/enums/socialNetwork';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconDialog from '@/components/icons/IconDialog.vue';

export default defineComponent({
  name: 'SocialNetworkIcon',

  props: {
    socialNetwork: {
      type: String as PropType<SocialNetwork>,
      required: true,
    },
    class: {
      type: String,
      default: 'h-5 w-5',
    },
  },

  render() {
    function getSocialNetworkIcon(socialNetwork: SocialNetwork) {
      switch (socialNetwork) {
        case SocialNetwork.FACEBOOK:
          return IconFacebook;
        case SocialNetwork.GITHUB:
          return IconGithub;
        case SocialNetwork.LINKEDIN:
          return IconLinkedin;
        case SocialNetwork.INSTAGRAM:
          return IconInstagram;
        default:
          return IconDialog;
      }
    }

    return h(
      getSocialNetworkIcon(this.socialNetwork),
      { class: this.class },
    );
  },
});
</script>
