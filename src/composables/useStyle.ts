import { Style } from '@/interfaces/style';
import { computed, ref } from 'vue';
import { Url } from '@/types/request';

interface ImageStyleParams {
  imageUrl: Url | null;
  defaultImageUrl?: Url;
}

export function useImageStyle({ imageUrl, defaultImageUrl }: ImageStyleParams) {
  const imageFound = ref<boolean>(false);

  async function fetchImage(): Promise<void> {
    try {
      if (imageUrl === null) {
        return;
      }

      const { ok } = await fetch(imageUrl);
      imageFound.value = ok;
    } catch (e) {
      imageFound.value = false;
    }
  }

  fetchImage();

  const imageStyle = computed<Style>(() => {
    const defaultImage = defaultImageUrl ? `url(${defaultImageUrl})` : 'url(/images/default-placeholder.png)';

    return {
      backgroundImage: imageFound.value === true ? `url(${imageUrl})` : defaultImage,
    };
  });

  return {
    imageStyle,
  };
}
