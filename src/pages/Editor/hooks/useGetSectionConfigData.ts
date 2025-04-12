import { useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { SectionConfigDataStruct } from '@/types/editor';

// 这个应该要从后端拉取主题的section配置信息。现在先在本地Mock
const sectionConfigData = {
  order: ['1744420001433c7355e4', '1744420056877bdb1ba2', '1744420074063e922eb8'],
  sections: {
    '1744420001433c7355e4': {
      sectionId: '1744420001433c7355e4',
      type: 'featured-slideshow',
      disabled: false,
      settingsData: {
        disabled: false,
        type: 'featured-slideshow',
        settings: {
          content_height: {
            value: 100,
          },
          show_progress: {
            value: true,
          },
          show_arrows: {
            value: true,
          },
          switch: {
            value: true,
          },
          autoplay: {
            value: true,
          },
          autoplay_speed: {
            value: 7,
          },
        },
        blocks: {
          '1744420001433f23a0d7': {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: {
                value: '100%',
              },
              title_font: {
                value: 'Oregano:400',
              },
              text_title_font_size: {
                value: 'title3',
              },
              button_style: {
                value: 'button',
              },
              text_enabled_custom_font: {
                value: true,
              },
              title_font_size: {
                value: 'title4',
              },
              image_layout_style: {
                value: 'revert',
              },
              show_content_line: {
                value: true,
              },
              overlay_opacity: {
                value: 50,
              },
              text_mask: {
                value: false,
              },
              text_mask_color: {
                value: 'deep',
              },
              content_vertical_layout: {
                value: 'flex-end',
              },
              content_horizontal_layout: {
                value: 'start',
              },
              title: {
                value: 'Highlight an\nimage banner',
              },
              content: {
                value: '',
              },
              button_text: {
                value: 'Shop this',
              },
              text_font_color: {
                value: '#FFFFFF',
              },
              image_button_text_background: {
                value: '#000000',
              },
              image_button_text_color: {
                value: '#FFFFFF',
              },
              image_button_border_color: {
                value: '#FFFFFF',
              },
              text_content_horizontal_layout: {
                value: 'center',
              },
              text_title: {
                value: 'Highlight an\nimage banner',
              },
              text_content: {
                value: '',
              },
              text_button_text: {
                value: 'Shop this',
              },
              text_text_color: {
                value: '#FFFFFF',
              },
              text_background_color: {
                value: '#2C2924',
              },
              text_button_style: {
                value: 'button--link',
              },
              text_button_text_color: {
                value: '#FFFFFF',
              },
              text_button_border_color: {
                value: '#FFFFFF',
              },
            },
            blockId: '1744420001433f23a0d7',
          },
          '1744420001434b525250': {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: {
                value: '100%',
              },
              image_layout_style: {
                value: 'revert',
              },
              show_content_line: {
                value: true,
              },
              overlay_opacity: {
                value: 50,
              },
              text_mask: {
                value: false,
              },
              text_mask_color: {
                value: 'deep',
              },
              content_vertical_layout: {
                value: 'flex-end',
              },
              content_horizontal_layout: {
                value: 'start',
              },
              title: {
                value: 'Highlight an\nimage banner',
              },
              title_font: {
                value: 'Oregano:400',
              },
              title_font_size: {
                value: 'title4',
              },
              content: {
                value: '',
              },
              button_text: {
                value: 'Shop this',
              },
              text_font_color: {
                value: '#FFFFFF',
              },
              button_style: {
                value: 'button',
              },
              image_button_text_background: {
                value: '#000000',
              },
              image_button_text_color: {
                value: '#FFFFFF',
              },
              image_button_border_color: {
                value: '#FFFFFF',
              },
              text_content_horizontal_layout: {
                value: 'center',
              },
              text_title: {
                value: 'Highlight an\nimage banner',
              },
              text_enabled_custom_font: {
                value: true,
              },
              text_title_font_size: {
                value: 'title3',
              },
              text_content: {
                value: '',
              },
              text_button_text: {
                value: 'Shop this',
              },
              text_text_color: {
                value: '#FFFFFF',
              },
              text_background_color: {
                value: '#2C2924',
              },
              text_button_style: {
                value: 'button--link',
              },
              text_button_text_color: {
                value: '#FFFFFF',
              },
              text_button_border_color: {
                value: '#FFFFFF',
              },
              image_mobile: {
                value: null,
              },
              image: {
                value: 'shopline://shop_images/1.png',
                resource: {
                  id: '6943930668708276315',
                  storeId: 1744218611515,
                  name: '1.png',
                  materialType: {
                    name: 'IMAGE',
                  },
                  url: 'https://img.myshopline.com/image/store/1744218611515/1.png?w=640&h=853',
                  size: 1053523,
                  atlSeo: null,
                  defaultAlt: null,
                  captionSeo: null,
                  status: 1,
                  exhibition: true,
                  extensions: 'png',
                  firstFrameUrl: null,
                  formattedSlug: '1',
                  originalType: {
                    name: 'FILE_UPLOAD',
                  },
                  originalUrl: '',
                  domainType: {
                    name: 'STORE',
                  },
                  bizType: 'editorComponent',
                  reqContext: null,
                  resMetaId: '6943930667701643354',
                  externalResourceId: null,
                  createTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 10,
                    },
                    time: {
                      hour: 1,
                      minute: 10,
                      second: 30,
                      nano: 0,
                    },
                  },
                  updateTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 10,
                    },
                    time: {
                      hour: 1,
                      minute: 10,
                      second: 31,
                      nano: 0,
                    },
                  },
                  creator: null,
                  updater: null,
                  aspectRatio: 0.7502930832356389,
                  previewImages: null,
                },
              },
            },
            blockId: '1744420001434b525250',
          },
        },
        block_order: ['1744420001433f23a0d7', '1744420001434b525250'],
      },
    },
    '1744420056877bdb1ba2': {
      sectionId: '1744420056877bdb1ba2',
      type: 'video',
      disabled: false,
      settingsData: {
        disabled: false,
        type: 'video',
        settings: {
          title: {
            value: '这是一个视频',
          },
          title_size: {
            value: 'title3',
          },
          external_video: {
            value: '',
          },
          video_auto_play: {
            value: false,
          },
          full_width: {
            value: true,
          },
          color_scheme: {
            value: 'none',
          },
          padding_top: {
            value: 0,
          },
          padding_bottom: {
            value: 0,
          },
          cover: {
            value: {
              url: '',
            },
          },
          internal_video: {
            value: '',
          },
        },
        blocks: {},
        block_order: [],
      },
    },
    '1744420074063e922eb8': {
      sectionId: '1744420074063e922eb8',
      type: 'multi-media-splicing',
      disabled: false,
      settingsData: {
        disabled: false,
        type: 'multi-media-splicing',
        settings: {
          title: {
            value: '这是拼贴',
          },
          title_size: {
            value: 'title3',
          },
          desktop_layout: {
            value: 'left',
          },
          mobile_layout: {
            value: 'splicing',
          },
          color_scheme: {
            value: 'none',
          },
          padding_top: {
            value: 80,
          },
          padding_bottom: {
            value: 80,
          },
        },
        blocks: {
          '1744420106040f8a3549': {
            type: 'image',
            settings: {
              image_padding: {
                value: 'cover',
              },
              image: {
                value: 'shopline://shop_images/color2_6947290210074102469.png',
                resource: {
                  id: '6947290210074102469',
                  storeId: 1744218611515,
                  name: 'color2_6947290210074102469.png',
                  materialType: {
                    name: 'IMAGE',
                  },
                  url: 'https://img.myshopline.com/image/store/1744218611515/color2.png?w=4&h=4',
                  size: 137,
                  atlSeo: null,
                  defaultAlt: null,
                  captionSeo: null,
                  status: 1,
                  exhibition: true,
                  extensions: 'png',
                  firstFrameUrl: null,
                  formattedSlug: 'color2',
                  originalType: {
                    name: 'FILE_UPLOAD',
                  },
                  originalUrl: '',
                  domainType: {
                    name: 'STORE',
                  },
                  bizType: 'createProduct',
                  reqContext: null,
                  resMetaId: '6943926504049614836',
                  externalResourceId: null,
                  createTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 12,
                    },
                    time: {
                      hour: 8,
                      minute: 47,
                      second: 54,
                      nano: 0,
                    },
                  },
                  updateTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 12,
                    },
                    time: {
                      hour: 8,
                      minute: 47,
                      second: 55,
                      nano: 0,
                    },
                  },
                  creator: null,
                  updater: null,
                  aspectRatio: 1,
                  previewImages: null,
                },
              },
            },
          },
          '17444200740631e4419a': {
            type: 'video',
            settings: {
              external_video: {
                value: '',
              },
              video_alt: {
                value: 'Describe the video',
              },
              image_padding: {
                value: 'cover',
              },
              internal_video: {
                value: '',
              },
              cover_image: {
                value: 'shopline://shop_images/1.png',
                resource: {
                  id: '6943930668708276315',
                  storeId: 1744218611515,
                  name: '1.png',
                  materialType: {
                    name: 'IMAGE',
                  },
                  url: 'https://img.myshopline.com/image/store/1744218611515/1.png?w=640&h=853',
                  size: 1053523,
                  atlSeo: null,
                  defaultAlt: null,
                  captionSeo: null,
                  status: 1,
                  exhibition: true,
                  extensions: 'png',
                  firstFrameUrl: null,
                  formattedSlug: '1',
                  originalType: {
                    name: 'FILE_UPLOAD',
                  },
                  originalUrl: '',
                  domainType: {
                    name: 'STORE',
                  },
                  bizType: 'editorComponent',
                  reqContext: null,
                  resMetaId: '6943930667701643354',
                  externalResourceId: null,
                  createTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 10,
                    },
                    time: {
                      hour: 1,
                      minute: 10,
                      second: 30,
                      nano: 0,
                    },
                  },
                  updateTime: {
                    date: {
                      year: 2025,
                      month: 4,
                      day: 10,
                    },
                    time: {
                      hour: 1,
                      minute: 10,
                      second: 31,
                      nano: 0,
                    },
                  },
                  creator: null,
                  updater: null,
                  aspectRatio: 0.7502930832356389,
                  previewImages: null,
                },
              },
            },
            blockId: '17444200740631e4419a',
          },
          '17444200740637a13470': {
            type: 'product',
            settings: {
              product_hover_show_next: {
                value: false,
              },
              image_padding: {
                value: 'cover',
              },
              product: {
                value: null,
              },
            },
            blockId: '17444200740637a13470',
          },
        },
        block_order: ['1744420106040f8a3549', '17444200740631e4419a', '17444200740637a13470'],
      },
    },
  },
} as unknown as SectionConfigDataStruct;
export const useGetSectionConfigData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      changeEditorState({
        sectionConfigData,
      }),
    );
  }, [dispatch]);
};
