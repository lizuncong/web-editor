import { useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { changeEditorState } from '@/store/reducer/editor';
import { SectionSchemaStruct } from '@/types/editor';

// 这个应该要从后端拉取主题的section配置信息。现在先在本地Mock
const allSectionSchema = {
  'featured-slideshow': {
    name: 'sections.featured-slideshow.name',
    class: 'section index-section--hero',
    icon: 'slideshow',
    block_info: 'sections.featured-slideshow.block_info',
    max_blocks: 10,
    settings: [
      {
        type: 'range',
        id: 'content_height',
        label: 'sections.featured-slideshow.settings.content_height.label',
        info: 'sections.featured-slideshow.settings.content_height.info',
        default: 100,
        min: 50,
        max: 100,
        step: 5,
        unit: '%',
      },
      {
        type: 'switch',
        id: 'show_progress',
        label: 'sections.featured-slideshow.settings.show_progress.label',
        default: true,
      },
      {
        type: 'switch',
        id: 'show_arrows',
        label: 'sections.featured-slideshow.settings.show_arrows.label',
        default: true,
      },
      {
        type: 'switch',
        id: 'autoplay',
        label: 'sections.featured-slideshow.settings.autoplay.label',
        default: true,
      },
      {
        type: 'range',
        id: 'autoplay_speed',
        label: 'sections.featured-slideshow.settings.autoplay_speed.label',
        default: 7,
        min: 3,
        max: 10,
        step: 1,
        unit: 'sections.featured-slideshow.settings.autoplay_speed.unit',
      },
    ],
    blocks: [
      {
        type: 'image',
        icon: 'image',
        name: 'sections.featured-slideshow.blocks.image.name',
        settings: [
          {
            type: 'group_header',
            label: 'sections.featured-slideshow.blocks.image.settings.group_header__0.label',
          },
          {
            id: 'image_text_layout',
            type: 'select',
            label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.label',
            default: '100%',
            options: [
              {
                value: '50%',
                label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__0.label',
              },
              {
                value: '70%',
                label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__1.label',
              },
              {
                value: '100%',
                label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__2.label',
              },
            ],
          },
          {
            type: 'select',
            id: 'image_layout_style',
            label: 'sections.featured-slideshow.blocks.image.settings.image_layout_style.label',
            default: 'revert',
            options: [
              {
                value: 'revert',
                label: 'sections.featured-slideshow.blocks.image.settings.image_layout_style.options__0.label',
              },
              {
                value: 'row-reverse',
                label: 'sections.featured-slideshow.blocks.image.settings.image_layout_style.options__1.label',
              },
            ],
          },
          {
            type: 'switch',
            id: 'show_content_line',
            label: 'sections.featured-slideshow.blocks.image.settings.show_content_line.label',
            default: true,
          },
          {
            type: 'range',
            id: 'overlay_opacity',
            label: 'sections.featured-slideshow.blocks.image.settings.overlay_opacity.label',
            default: 50,
            min: 0,
            max: 100,
            step: 2,
            unit: '%',
          },
          {
            type: 'switch',
            label: 'sections.featured-slideshow.blocks.image.settings.text_mask.label',
            id: 'text_mask',
            default: false,
          },
          {
            type: 'select',
            label: 'sections.featured-slideshow.blocks.image.settings.text_mask_color.label',
            id: 'text_mask_color',
            default: 'deep',
            options: [
              {
                label: 'sections.featured-slideshow.blocks.image.settings.text_mask_color.options__0.label',
                value: 'deep',
              },
              {
                label: 'sections.featured-slideshow.blocks.image.settings.text_mask_color.options__1.label',
                value: 'light',
              },
            ],
          },
          {
            type: 'group_header',
            label: 'sections.featured-slideshow.blocks.image.settings.group_header__1.label',
          },
          {
            type: 'image_picker',
            id: 'image',
            label: 'sections.featured-slideshow.blocks.image.settings.image.label',
            info: 'sections.featured-slideshow.blocks.image.settings.image.info',
          },
          {
            type: 'image_picker',
            id: 'image_mobile',
            label: 'sections.featured-slideshow.blocks.image.settings.image_mobile.label',
            info: 'sections.featured-slideshow.blocks.image.settings.image_mobile.info',
          },
          {
            type: 'select',
            id: 'content_vertical_layout',
            label: 'sections.featured-slideshow.blocks.image.settings.content_vertical_layout.label',
            default: 'flex-end',
            options: [
              {
                value: 'start',
                label: 'sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__0.label',
              },
              {
                value: 'center',
                label: 'sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__1.label',
              },
              {
                value: 'flex-end',
                label: 'sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__2.label',
              },
            ],
          },
          {
            id: 'content_horizontal_layout',
            type: 'select',
            label: 'sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.label',
            default: 'start',
            options: [
              {
                value: 'start',
                label: 'sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__0.label',
              },
              {
                value: 'center',
                label: 'sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__1.label',
              },
              {
                value: 'flex-end',
                label: 'sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__2.label',
              },
            ],
          },
          {
            type: 'textarea',
            id: 'title',
            label: 'sections.featured-slideshow.blocks.image.settings.title.label',
            default: 'Highlight an\nimage banner',
            limit: 500,
          },
          {
            type: 'font',
            id: 'title_font',
            label: 'sections.featured-slideshow.blocks.image.settings.title_font.label',
            default: 'Oregano:400',
          },
          {
            type: 'select',
            id: 'title_font_size',
            label: 'sections.featured-slideshow.blocks.image.settings.title_font_size.label',
            options: [
              {
                value: 'title4',
                label: 'sections.featured-slideshow.blocks.image.settings.title_font_size.options__0.label',
              },
              {
                value: 'title3',
                label: 'sections.featured-slideshow.blocks.image.settings.title_font_size.options__1.label',
              },
              {
                value: 'title2',
                label: 'sections.featured-slideshow.blocks.image.settings.title_font_size.options__2.label',
              },
            ],
            default: 'title4',
          },
          {
            type: 'textarea',
            id: 'content',
            label: 'sections.featured-slideshow.blocks.image.settings.content.label',
            default: '',
          },
          {
            type: 'text',
            id: 'button_text',
            label: 'sections.featured-slideshow.blocks.image.settings.button_text.label',
            info: 'sections.featured-slideshow.blocks.image.settings.button_text.info',
            default: 'Shop this',
          },
          {
            type: 'url',
            id: 'link',
            label: 'sections.featured-slideshow.blocks.image.settings.link.label',
          },
          {
            type: 'color',
            id: 'text_font_color',
            label: 'sections.featured-slideshow.blocks.image.settings.text_font_color.label',
            default: '#FFFFFF',
          },
          {
            type: 'select',
            id: 'button_style',
            label: 'sections.featured-slideshow.blocks.image.settings.button_style.label',
            default: 'button',
            options: [
              {
                value: 'button',
                label: 'sections.featured-slideshow.blocks.image.settings.button_style.options__0.label',
              },
              {
                value: 'button--secondary',
                label: 'sections.featured-slideshow.blocks.image.settings.button_style.options__1.label',
              },
              {
                value: 'button--link',
                label: 'sections.featured-slideshow.blocks.image.settings.button_style.options__2.label',
              },
            ],
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.image_button_text_background.label',
            type: 'color',
            id: 'image_button_text_background',
            default: '#000000',
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.image_button_text_color.label',
            type: 'color',
            id: 'image_button_text_color',
            default: '#FFFFFF',
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.image_button_border_color.label',
            type: 'color',
            id: 'image_button_border_color',
            default: '#FFFFFF',
          },
          {
            type: 'group_header',
            label: 'sections.featured-slideshow.blocks.image.settings.group_header__2.label',
          },
          {
            id: 'text_content_horizontal_layout',
            type: 'select',
            label: 'sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.label',
            default: 'center',
            options: [
              {
                value: 'start',
                label:
                  'sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__0.label',
              },
              {
                value: 'center',
                label:
                  'sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__1.label',
              },
              {
                value: 'flex-end',
                label:
                  'sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__2.label',
              },
            ],
          },
          {
            type: 'textarea',
            id: 'text_title',
            label: 'sections.featured-slideshow.blocks.image.settings.text_title.label',
            default: 'Highlight an\nimage banner',
            limit: 500,
          },
          {
            type: 'switch',
            id: 'text_enabled_custom_font',
            label: 'sections.featured-slideshow.blocks.image.settings.text_enabled_custom_font.label',
            default: true,
          },
          {
            type: 'select',
            id: 'text_title_font_size',
            label: 'sections.featured-slideshow.blocks.image.settings.text_title_font_size.label',
            options: [
              {
                value: 'title4',
                label: 'sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__0.label',
              },
              {
                value: 'title3',
                label: 'sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__1.label',
              },
              {
                value: 'title2',
                label: 'sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__2.label',
              },
            ],
            default: 'title4',
          },
          {
            type: 'textarea',
            id: 'text_content',
            label: 'sections.featured-slideshow.blocks.image.settings.text_content.label',
            default: '',
          },
          {
            type: 'text',
            id: 'text_button_text',
            label: 'sections.featured-slideshow.blocks.image.settings.text_button_text.label',
            default: 'Shop this',
          },
          {
            type: 'url',
            id: 'text_link',
            label: 'sections.featured-slideshow.blocks.image.settings.text_link.label',
          },
          {
            type: 'color',
            id: 'text_text_color',
            label: 'sections.featured-slideshow.blocks.image.settings.text_text_color.label',
            default: '#FFFFFF',
          },
          {
            type: 'color',
            id: 'text_background_color',
            label: 'sections.featured-slideshow.blocks.image.settings.text_background_color.label',
            default: '#2C2924',
          },
          {
            type: 'select',
            id: 'text_button_style',
            label: 'sections.featured-slideshow.blocks.image.settings.text_button_style.label',
            default: 'button--link',
            options: [
              {
                value: 'button',
                label: 'sections.featured-slideshow.blocks.image.settings.text_button_style.options__0.label',
              },
              {
                value: 'button--secondary',
                label: 'sections.featured-slideshow.blocks.image.settings.text_button_style.options__1.label',
              },
              {
                value: 'button--link',
                label: 'sections.featured-slideshow.blocks.image.settings.text_button_style.options__2.label',
              },
            ],
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.text_button_background_color.label',
            type: 'color',
            id: 'text_button_background_color',
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.text_button_text_color.label',
            type: 'color',
            id: 'text_button_text_color',
            default: '#FFFFFF',
          },
          {
            label: 'sections.featured-slideshow.blocks.image.settings.text_button_border_color.label',
            type: 'color',
            id: 'text_button_border_color',
            default: '#FFFFFF',
          },
        ],
      },
    ],
    presets: [
      {
        category_index: 1,
        category: 'sections.featured-slideshow.presets.presets__0.category',
        name: 'sections.featured-slideshow.presets.presets__0.name',
        settings: {
          content_height: 100,
          show_progress: true,
          show_arrows: true,
          switch: true,
          autoplay: true,
          autoplay_speed: 7,
        },
        blocks: [
          {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: '100%',
              title_font: 'Oregano:400',
              text_title_font_size: 'title3',
              button_style: 'button',
              text_enabled_custom_font: true,
              title_font_size: 'title4',
            },
          },
          {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: '100%',
              title_font: 'Oregano:400',
              text_title_font_size: 'title3',
              button_style: 'button',
              text_enabled_custom_font: true,
              title_font_size: 'title4',
            },
          },
        ],
      },
      {
        category_index: 2,
        category: 'sections.featured-slideshow.presets.presets__0.category',
        name: 'sections.featured-slideshow.presets.presets__1.name',
        settings: {
          content_height: 100,
          show_progress: true,
          show_arrows: true,
          switch: true,
          autoplay: true,
          autoplay_speed: 7,
        },
        blocks: [
          {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: '100%',
              title_font: 'Oregano:400',
              text_title_font_size: 'title3',
              button_style: 'button',
              text_enabled_custom_font: true,
              title_font_size: 'title4',
            },
          },
          {
            type: 'image',
            icon: 'image',
            settings: {
              image_text_layout: '100%',
              title_font: 'Oregano:400',
              text_title_font_size: 'title3',
              button_style: 'button',
              text_enabled_custom_font: true,
              title_font_size: 'title4',
            },
          },
        ],
      },
    ],
  },
  'multi-media-splicing': {
    name: 'sections.multi-media-splicing.name',
    icon: 'splicing',
    max_blocks: 3,
    class: 'section',
    blocks: [
      {
        type: 'video',
        icon: 'normal',
        name: 'sections.multi-media-splicing.blocks.video.name',
        settings: [
          {
            id: 'cover_image',
            type: 'image_picker',
            label: 'sections.multi-media-splicing.blocks.video.settings.cover_image.label',
          },
          {
            type: 'video',
            id: 'internal_video',
            label: 'sections.multi-media-splicing.blocks.video.settings.internal_video.label',
          },
          {
            type: 'video_url',
            id: 'external_video',
            format: 'video',
            label: 'sections.multi-media-splicing.blocks.video.settings.external_video.label',
            placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
            info: 'sections.multi-media-splicing.blocks.video.settings.external_video.info',
          },
          {
            id: 'video_alt',
            type: 'text',
            label: 'sections.multi-media-splicing.blocks.video.settings.video_alt.label',
            default: 'Describe the video',
          },
          {
            id: 'image_padding',
            type: 'select',
            label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.label',
            info: 'sections.multi-media-splicing.blocks.video.settings.image_padding.info',
            options: [
              {
                value: 'cover',
                label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.options__0.label',
              },
              {
                value: 'contain',
                label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.options__1.label',
              },
            ],
            default: 'cover',
          },
        ],
      },
      {
        type: 'product',
        icon: 'normal',
        name: 'sections.multi-media-splicing.blocks.product.name',
        settings: [
          {
            type: 'product_picker',
            id: 'product',
            label: 'sections.multi-media-splicing.blocks.product.settings.product.label',
          },
          {
            type: 'switch',
            id: 'product_hover_show_next',
            label: 'sections.multi-media-splicing.blocks.product.settings.product_hover_show_next.label',
            default: false,
          },
          {
            id: 'image_padding',
            type: 'select',
            label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.label',
            info: 'sections.multi-media-splicing.blocks.product.settings.image_padding.info',
            options: [
              {
                value: 'cover',
                label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.options__0.label',
              },
              {
                value: 'contain',
                label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.options__1.label',
              },
            ],
            default: 'cover',
          },
        ],
      },
      {
        type: 'collection',
        icon: 'normal',
        name: 'sections.multi-media-splicing.blocks.collection.name',
        settings: [
          {
            type: 'collection_picker',
            id: 'category',
            label: 'sections.multi-media-splicing.blocks.collection.settings.category.label',
          },
          {
            id: 'image_padding',
            type: 'select',
            label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.label',
            info: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.info',
            options: [
              {
                value: 'cover',
                label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.options__0.label',
              },
              {
                value: 'contain',
                label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.options__1.label',
              },
            ],
            default: 'cover',
          },
        ],
      },
      {
        type: 'image',
        icon: 'normal',
        name: 'sections.multi-media-splicing.blocks.image.name',
        settings: [
          {
            type: 'image_picker',
            id: 'image',
            label: 'sections.multi-media-splicing.blocks.image.settings.image.label',
          },
          {
            id: 'image_padding',
            type: 'select',
            label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.label',
            info: 'sections.multi-media-splicing.blocks.image.settings.image_padding.info',
            options: [
              {
                value: 'cover',
                label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.options__0.label',
              },
              {
                value: 'contain',
                label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.options__1.label',
              },
            ],
            default: 'cover',
          },
          {
            id: 'jump_link',
            type: 'url',
            label: 'sections.multi-media-splicing.blocks.image.settings.jump_link.label',
            info: 'sections.multi-media-splicing.blocks.image.settings.jump_link.info',
          },
        ],
      },
    ],
    settings: [
      {
        type: 'text',
        id: 'title',
        label: 'sections.multi-media-splicing.settings.title.label',
      },
      {
        type: 'select',
        id: 'title_size',
        label: 'sections.multi-media-splicing.settings.title_size.label',
        options: [
          {
            value: 'title2',
            label: 'sections.multi-media-splicing.settings.title_size.options__0.label',
          },
          {
            value: 'title3',
            label: 'sections.multi-media-splicing.settings.title_size.options__1.label',
          },
          {
            value: 'title5',
            label: 'sections.multi-media-splicing.settings.title_size.options__2.label',
          },
        ],
        default: 'title3',
      },
      {
        type: 'select',
        id: 'desktop_layout',
        label: 'sections.multi-media-splicing.settings.desktop_layout.label',
        default: 'left',
        options: [
          {
            value: 'left',
            label: 'sections.multi-media-splicing.settings.desktop_layout.options__0.label',
          },
          {
            value: 'right',
            label: 'sections.multi-media-splicing.settings.desktop_layout.options__1.label',
          },
        ],
      },
      {
        type: 'select',
        id: 'mobile_layout',
        label: 'sections.multi-media-splicing.settings.mobile_layout.label',
        default: 'splicing',
        options: [
          {
            value: 'splicing',
            label: 'sections.multi-media-splicing.settings.mobile_layout.options__0.label',
          },
          {
            value: 'list',
            label: 'sections.multi-media-splicing.settings.mobile_layout.options__1.label',
          },
        ],
      },
      {
        type: 'select',
        id: 'color_scheme',
        label: 'sections.multi-media-splicing.settings.color_scheme.label',
        default: 'none',
        options: [
          {
            value: 'none',
            label: 'sections.multi-media-splicing.settings.color_scheme.options__0.label',
          },
          {
            value: '1',
            label: 'sections.multi-media-splicing.settings.color_scheme.options__1.label',
          },
          {
            value: '2',
            label: 'sections.multi-media-splicing.settings.color_scheme.options__2.label',
          },
          {
            value: '3',
            label: 'sections.multi-media-splicing.settings.color_scheme.options__3.label',
          },
        ],
      },
      {
        type: 'group_header',
        label: 'sections.multi-media-splicing.settings.group_header__0.label',
      },
      {
        type: 'range',
        id: 'padding_top',
        label: 'sections.multi-media-splicing.settings.padding_top.label',
        default: 80,
        min: 0,
        max: 100,
        step: 2,
        unit: 'px',
      },
      {
        type: 'range',
        id: 'padding_bottom',
        label: 'sections.multi-media-splicing.settings.padding_bottom.label',
        default: 80,
        min: 0,
        max: 100,
        step: 2,
        unit: 'px',
      },
    ],
    presets: [
      {
        category_index: 1,
        category: 'sections.multi-media-splicing.presets.presets__0.category',
        name: 'sections.multi-media-splicing.presets.presets__0.name',
        blocks: [
          {
            type: 'video',
            settings: {
              cover_image: '',
              internal_video: '',
              external_video: '',
              video_alt: 'Describe the video',
              image_padding: 'cover',
            },
          },
          {
            type: 'product',
            settings: {
              product: null,
              product_hover_show_next: false,
              image_padding: 'cover',
            },
          },
          {
            type: 'collection',
            settings: {
              category: '',
              image_padding: 'cover',
            },
          },
        ],
        settings: {
          title_size: 'title3',
          desktop_layout: 'left',
          mobile_layout: 'splicing',
          color_scheme: 'none',
          padding_top: 80,
          padding_bottom: 80,
        },
      },
    ],
  },
  video: {
    name: 'sections.video.name',
    icon: 'video',
    class: 'section',
    settings: [
      {
        type: 'text',
        id: 'title',
        default: '',
        label: 'sections.video.settings.title.label',
      },
      {
        type: 'select',
        id: 'title_size',
        options: [
          {
            value: 'title5',
            label: 'sections.video.settings.title_size.options__0.label',
          },
          {
            value: 'title3',
            label: 'sections.video.settings.title_size.options__1.label',
          },
          {
            value: 'title2',
            label: 'sections.video.settings.title_size.options__2.label',
          },
        ],
        default: 'title3',
        label: 'sections.video.settings.title_size.label',
      },
      {
        type: 'image_picker',
        id: 'cover',
        label: 'sections.video.settings.cover.label',
      },
      {
        type: 'video',
        id: 'internal_video',
        label: 'sections.video.settings.internal_video.label',
      },
      {
        type: 'video_url',
        id: 'external_video',
        format: 'video',
        label: 'sections.video.settings.external_video.label',
        placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
        info: 'sections.video.settings.external_video.info',
      },
      {
        type: 'switch',
        id: 'video_auto_play',
        label: 'sections.video.settings.video_auto_play.label',
        info: 'sections.video.settings.video_auto_play.info',
        default: false,
      },
      {
        type: 'switch',
        id: 'full_width',
        label: 'sections.video.settings.full_width.label',
        default: true,
      },
      {
        type: 'select',
        id: 'color_scheme',
        label: 'sections.video.settings.color_scheme.label',
        options: [
          {
            value: 'none',
            label: 'sections.video.settings.color_scheme.options__0.label',
          },
          {
            value: '1',
            label: 'sections.video.settings.color_scheme.options__1.label',
          },
          {
            value: '2',
            label: 'sections.video.settings.color_scheme.options__2.label',
          },
          {
            value: '3',
            label: 'sections.video.settings.color_scheme.options__3.label',
          },
        ],
        default: 'none',
      },
      {
        type: 'group_header',
        label: 'sections.video.settings.group_header__0.label',
      },
      {
        type: 'range',
        id: 'padding_top',
        min: 0,
        max: 100,
        step: 2,
        unit: 'px',
        label: 'sections.video.settings.padding_top.label',
        default: 0,
      },
      {
        type: 'range',
        id: 'padding_bottom',
        min: 0,
        max: 100,
        step: 2,
        unit: 'px',
        label: 'sections.video.settings.padding_bottom.label',
        default: 0,
      },
    ],
    presets: [
      {
        category_index: 1,
        category: 'sections.video.presets.presets__0.category',
        name: 'sections.video.presets.presets__0.name',
        icon: 'video',
        settings: {
          title: '',
          title_size: 'title3',
          cover: {
            url: '',
          },
          internal_video: '',
          external_video: '',
          full_width: true,
          color_scheme: 'none',
          padding_top: 0,
          padding_bottom: 0,
        },
      },
    ],
  },
} as unknown as Record<string, SectionSchemaStruct>;

export const useGetAllSectionSchema = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log();
    dispatch(
      changeEditorState({
        allSectionSchema: allSectionSchema,
      }),
    );
  }, [dispatch]);
};
