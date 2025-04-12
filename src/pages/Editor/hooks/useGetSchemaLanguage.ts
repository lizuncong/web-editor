import i18n from 'i18next'; // 确保你已经初始化了i18n
import { useEffect } from 'react';

import { defaultNs, zhKey } from '@/i18n';

// 主题配置项的预料应该要从后端拉取，现在先在本地Mock
const locales = {
  sections: {
    'featured-slideshow': {
      name: '特色轮播图',
      block_info: '[查看模板图片的建议尺寸](https://shoplineapphelp.zendesk.com/hc/articles/4406422263577)',
      settings: {
        content_height: {
          label: '内容高度',
          info: '设置轮播图的显示高度',
        },
        show_progress: {
          label: '展示进度条',
        },
        show_arrows: {
          label: '展示翻页箭头',
        },
        autoplay: {
          label: '启用自动切换',
        },
        autoplay_speed: {
          label: '轮播间隔',
          unit: '秒',
        },
      },
      blocks: {
        image: {
          name: '图片',
          settings: {
            group_header__0: {
              label: '通用设置',
            },
            image_text_layout: {
              label: '图文布局',
              options__0: {
                label: '图片50%',
              },
              options__1: {
                label: '图片70%',
              },
              options__2: {
                label: '图片全屏',
              },
            },
            image_layout_style: {
              label: '图文位置',
              options__0: {
                label: '左图右文',
              },
              options__1: {
                label: '左文右图',
              },
            },
            show_content_line: {
              label: '展示内容装饰线',
            },
            overlay_opacity: {
              label: '图片遮罩',
            },
            text_mask: {
              label: '文字蒙层',
            },
            text_mask_color: {
              label: '文字蒙层颜色',
              options__0: {
                label: '深色',
              },
              options__1: {
                label: '浅色',
              },
            },
            group_header__1: {
              label: '图片区域设置',
            },
            image: {
              label: '电脑端图片',
              info: '推荐尺寸：全屏布局为 2880x1400px，50% 布局为 1440x1400px，70%布局为 2000x1400px',
            },
            image_mobile: {
              label: '移动端图片',
              info: '推荐尺寸：全屏布局为720x1500px，50% 布局为720x760px，70% 布局为720x1000px',
            },
            content_vertical_layout: {
              label: '内容垂直对齐方式',
              options__0: {
                label: '顶部',
              },
              options__1: {
                label: '居中',
              },
              options__2: {
                label: '底部',
              },
            },
            content_horizontal_layout: {
              label: '内容水平对齐方式',
              options__0: {
                label: '居左',
              },
              options__1: {
                label: '居中',
              },
              options__2: {
                label: '居右',
              },
            },
            title: {
              label: '标题',
            },
            title_font: {
              label: '标题字体',
            },
            title_font_size: {
              label: '标题文字大小',
              options__0: {
                label: '小',
              },
              options__1: {
                label: '中',
              },
              options__2: {
                label: '大',
              },
            },
            content: {
              label: '正文',
            },
            button_text: {
              label: '按钮文案',
              info: '若无配置按钮文案，则通过点击图片跳转',
            },
            link: {
              label: '跳转链接',
            },
            text_font_color: {
              label: '文本颜色',
            },
            button_style: {
              label: '按钮风格',
              options__0: {
                label: '主按钮',
              },
              options__1: {
                label: '轮廓按钮',
              },
              options__2: {
                label: '下横线',
              },
            },
            image_button_text_background: {
              label: '按钮背景颜色',
            },
            image_button_text_color: {
              label: '按钮文字颜色',
            },
            image_button_border_color: {
              label: '按钮边框颜色',
            },
            group_header__2: {
              label: '文本区域设置',
            },
            text_content_horizontal_layout: {
              label: '内容水平对齐方式',
              options__0: {
                label: '居左',
              },
              options__1: {
                label: '居中',
              },
              options__2: {
                label: '居右',
              },
            },
            text_title: {
              label: '标题',
            },
            text_enabled_custom_font: {
              label: '标题启用特殊字体',
            },
            text_title_font_size: {
              label: '标题文字大小',
              options__0: {
                label: '小',
              },
              options__1: {
                label: '中',
              },
              options__2: {
                label: '大',
              },
            },
            text_content: {
              label: '正文',
            },
            text_button_text: {
              label: '按钮文案',
            },
            text_link: {
              label: '跳转链接',
            },
            text_text_color: {
              label: '文本颜色',
            },
            text_background_color: {
              label: '背景颜色',
            },
            text_button_style: {
              label: '按钮风格',
              options__0: {
                label: '主按钮',
              },
              options__1: {
                label: '轮廓按钮',
              },
              options__2: {
                label: '下横线',
              },
            },
            text_button_background_color: {
              label: '按钮背景颜色',
            },
            text_button_text_color: {
              label: '按钮文字颜色',
            },
            text_button_border_color: {
              label: '按钮边框颜色',
            },
          },
        },
      },
      presets: {
        presets__0: {
          category: '图文展示',
          name: '特色轮播图',
        },
        presets__1: {
          category: '图文展示',
          name: '特色轮播图222',
        },
      },
    },
    'multi-media-splicing': {
      name: '拼贴',
      settings: {
        title: {
          label: '标题',
        },
        title_size: {
          label: '标题大小',
          options__0: {
            label: '大',
          },
          options__1: {
            label: '中',
          },
          options__2: {
            label: '小',
          },
        },
        desktop_layout: {
          label: '电脑端布局',
          options__0: {
            label: '左大右小',
          },
          options__1: {
            label: '左小右大',
          },
        },
        mobile_layout: {
          label: '移动端布局',
          options__0: {
            label: '拼接',
          },
          options__1: {
            label: '列表',
          },
        },
        color_scheme: {
          label: '配色',
          options__0: {
            label: '无',
          },
          options__1: {
            label: '配色1',
          },
          options__2: {
            label: '配色2',
          },
          options__3: {
            label: '配色3',
          },
        },
        group_header__0: {
          label: '分区填充',
        },
        padding_top: {
          label: '顶部填充',
        },
        padding_bottom: {
          label: '底部填充',
        },
      },
      blocks: {
        video: {
          name: '视频',
          settings: {
            cover_image: {
              label: '封面图',
            },
            internal_video: {
              label: '本地上传',
            },
            external_video: {
              label: '外部视频链接',
              info: '输入YouTube或Vimeo嵌入链接',
            },
            video_alt: {
              label: '视频Alt文本',
            },
            image_padding: {
              label: '图片填充方式',
              info: '图片在大图布局中固定为“适应”',
              options__0: {
                label: '填充',
              },
              options__1: {
                label: '适应',
              },
            },
          },
        },
        product: {
          name: '商品',
          settings: {
            product: {
              label: '商品',
            },
            product_hover_show_next: {
              label: '鼠标悬停时显示下一张商品图',
            },
            image_padding: {
              label: '图片填充方式',
              info: '图片在大图布局中固定为“适应”',
              options__0: {
                label: '填充',
              },
              options__1: {
                label: '适应',
              },
            },
          },
        },
        collection: {
          name: '商品分类',
          settings: {
            category: {
              label: '商品分类',
            },
            image_padding: {
              label: '图片填充方式',
              info: '图片在大图布局中固定为“适应”',
              options__0: {
                label: '填充',
              },
              options__1: {
                label: '适应',
              },
            },
          },
        },
        image: {
          name: '图片',
          settings: {
            image: {
              label: '图片',
            },
            image_padding: {
              label: '图片填充方式',
              info: '图片在大图布局中固定为“适应”',
              options__0: {
                label: '填充',
              },
              options__1: {
                label: '适应',
              },
            },
            jump_link: {
              label: '跳转链接',
              info: '配置链接后点击图片即可跳转',
            },
          },
        },
      },
      presets: {
        presets__0: {
          category: '图文展示',
          name: '拼贴',
        },
      },
    },

    video: {
      name: '视频',
      settings: {
        title: {
          label: '标题',
        },
        title_size: {
          label: '标题大小',
          options__0: {
            label: '小',
          },
          options__1: {
            label: '中',
          },
          options__2: {
            label: '大',
          },
        },
        cover: {
          label: '封面图',
        },
        internal_video: {
          label: '本地上传',
        },
        external_video: {
          label: '外部视频链接',
          info: '输入YouTube或Vimeo嵌入链接',
        },
        video_auto_play: {
          label: '自动播放视频',
          info: '自动播放时默认静音',
        },
        full_width: {
          label: '宽度全屏',
        },
        color_scheme: {
          label: '配色',
          options__0: {
            label: '无',
          },
          options__1: {
            label: '配色1',
          },
          options__2: {
            label: '配色2',
          },
          options__3: {
            label: '配色3',
          },
        },
        group_header__0: {
          label: '分区填充',
        },
        padding_top: {
          label: '顶部填充',
        },
        padding_bottom: {
          label: '底部填充',
        },
      },
      presets: {
        presets__0: {
          category: '图文展示',
          name: '视频',
        },
      },
    },
  },
  settings_schema: {
    logo: {
      name: 'Logo',
      settings: {
        logo: {
          label: 'Logo',
        },
        desktop_logo_width: {
          label: '电脑端LOGO宽度',
        },
        mobile_logo_width: {
          label: '手机端LOGO宽度',
        },
      },
    },
    color: {
      name: '颜色',
      settings: {
        group_header__0: {
          label: '基础',
        },
        color_page_background: {
          label: '背景',
        },
        color_text: {
          label: '文字',
        },
        color_light_text: {
          label: '浅色文字',
        },
        color_entry_line: {
          label: '线条与边框',
        },
        color_card_background: {
          label: '卡片背景',
          info: '应用于样式为卡片的商品、分类、博客卡片',
        },
        color_card_text: {
          label: '卡片文字',
          info: '应用于样式为卡片的商品、分类、博客卡片',
        },
        group_header__1: {
          label: '按钮',
        },
        color_button_background: {
          label: '按钮背景',
        },
        color_button_text: {
          label: '按钮文字',
        },
        color_button_secondary_background: {
          label: '次级按钮背景',
        },
        color_button_secondary_text: {
          label: '次级按钮文字',
        },
        color_button_secondary_border: {
          label: '次级按钮边框',
        },
        group_header__2: {
          label: '商品',
        },
        color_sale: {
          label: '售价',
        },
        color_discount: {
          label: '优惠金额',
        },
        color_discount_tag_background: {
          label: '折扣标签',
        },
        color_discount_tag_text: {
          label: '折扣标签文字',
        },
        group_header__3: {
          label: '其他',
        },
        color_cart_dot: {
          label: '购物车提示点',
        },
        color_cart_dot_text: {
          label: '购物车提示文字',
        },
        color_image_background: {
          label: '图片背景',
        },
        color_image_loading_background: {
          label: '图片加载背景',
        },
        color_mask: {
          label: '弹窗遮罩背景',
        },
        color_shadow: {
          label: '阴影',
        },
        group_header__4: {
          label: '页头',
        },
        color_header_background: {
          label: '背景颜色',
        },
        color_header_text: {
          label: '文字颜色',
        },
        color_header_pc_search_bar_border: {
          label: '电脑端输入框边框颜色',
        },
        color_header_pc_search_bar_text: {
          label: '电脑端输入框文本颜色',
        },
        color_header_pc_search_bar_bg: {
          label: '电脑端输入框背景颜色',
        },
        group_header__5: {
          label: '公告栏',
        },
        color_announcement_bar_background: {
          label: '公告栏背景',
        },
        color_announcement_bar_text: {
          label: '公告栏文字',
        },
        group_header__6: {
          label: '页脚',
        },
        color_footer_background: {
          label: '背景颜色',
        },
        color_footer_border: {
          label: '边框与线条',
        },
        color_footer_text: {
          label: '文字颜色',
        },
        group_header__7: {
          label: '配色1',
        },
        color_scheme_1_bg: {
          label: '背景颜色',
        },
        color_scheme_1_text: {
          label: '文字颜色',
        },
        group_header__8: {
          label: '配色2',
        },
        color_scheme_2_bg: {
          label: '背景颜色',
        },
        color_scheme_2_text: {
          label: '文字颜色',
        },
        group_header__9: {
          label: '配色3',
        },
        color_scheme_3_bg: {
          label: '背景颜色',
        },
        color_scheme_3_text: {
          label: '文字颜色',
        },
      },
    },
    font: {
      name: '字体',
      settings: {
        group_header__0: {
          label: '标题',
        },
        title_font_family: {
          label: '字体',
        },
        title_letter_spacing: {
          label: '字体间距',
        },
        title_font_size: {
          label: '字体大小',
        },
        title_line_height: {
          label: '字体行高',
        },
        title_uppercase: {
          label: '文字全部大写',
        },
        group_header__1: {
          label: '正文',
        },
        body_font_family: {
          label: '字体',
        },
        body_letter_spacing: {
          label: '字体间距',
        },
        body_font_size: {
          label: '字体大小',
        },
        body_line_height: {
          label: '字体行高',
        },
      },
    },
    layout: {
      name: '布局',
      settings: {
        page_width: {
          label: '页面宽度',
        },
        section_vertical_gap: {
          label: '组件间垂直间距',
        },
        group_header__0: {
          label: '网格',
          info: '影响存在多个列或行的网格布局',
        },
        grid_horizontal_space: {
          label: '水平间距',
        },
        grid_vertical_space: {
          label: '垂直间距',
        },
      },
    },
    button: {
      name: '按钮',
      settings: {
        btn_hover_animation: {
          label: '悬停效果',
          options__0: {
            label: '左右扫光',
          },
          options__1: {
            label: '叠加投影',
          },
          options__2: {
            label: '悬浮放大',
          },
          options__3: {
            label: '向右填充',
          },
        },
        group_header__0: {
          label: '边框',
        },
        btn_border_thickness: {
          label: '厚度',
        },
        btn_border_opacity: {
          label: '不透明度',
        },
        btn_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        btn_shadow_opacity: {
          label: '不透明度',
        },
        btn_shadow_offset_x: {
          label: '水平偏移',
        },
        btn_shadow_offset_y: {
          label: '垂直偏移',
        },
        btn_shadow_blur: {
          label: '模糊',
        },
      },
    },
    sku: {
      name: '多属性选择器',
      settings: {
        group_header__0: {
          label: '边框',
        },
        sku_selector_border_thickness: {
          label: '厚度',
        },
        sku_selector_border_opacity: {
          label: '不透明度',
        },
        sku_selector_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        sku_selector_shadow_opacity: {
          label: '不透明度',
        },
        sku_selector_shadow_offset_x: {
          label: '水平偏移',
        },
        sku_selector_shadow_offset_y: {
          label: '垂直偏移',
        },
        sku_selector_shadow_blur: {
          label: '模糊',
        },
      },
    },
    input: {
      name: '输入框',
      settings: {
        group_header__0: {
          label: '边框',
        },
        input_border_thickness: {
          label: '厚度',
        },
        input_border_opacity: {
          label: '不透明度',
        },
        input_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        input_shadow_opacity: {
          label: '不透明度',
        },
        input_shadow_offset_x: {
          label: '水平偏移',
        },
        input_shadow_offset_y: {
          label: '垂直偏移',
        },
        input_shadow_blur: {
          label: '模糊',
        },
      },
    },
    product: {
      name: '商品',
      settings: {
        group_header__0: {
          label: '商品列表',
        },
        enable_quick_view: {
          label: '快速加购',
        },
        quick_view_button_pc_style: {
          label: '电脑端快速加购样式',
          options__0: {
            label: '图标',
          },
          options__1: {
            label: '悬停出现按钮',
          },
          options__2: {
            label: '固定按钮',
          },
        },
        quick_view_button_mobile_style: {
          label: '移动端快速加购样式',
          options__0: {
            label: '图标',
          },
          options__1: {
            label: '按钮',
          },
        },
        quick_view_mobile_position: {
          label: '移动端快速加购图标位置',
          info: '当快速加购样式选择图标时生效',
          options__0: {
            label: '图片内',
          },
          options__1: {
            label: '图片下方',
          },
        },
        product_title_show_type: {
          label: '商品标题显示',
          options__0: {
            label: '完整显示',
          },
          options__1: {
            label: '最多显示1行',
          },
          options__2: {
            label: '最多显示2行',
          },
        },
        product_pc_title_show: {
          label: '电脑端展示商品标题',
        },
        product_mobile_title_show: {
          label: '手机端显示商品标题',
        },
        group_header__1: {
          label: '色板快速加购',
          info: '[点击了解](https://help.shopline.com/hc/zh-cn/articles/18291247740825-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%BB%BA%E7%AB%99%E7%BC%96%E8%BE%91%E5%99%A8%E8%89%B2%E6%9D%BF%E5%8A%9F%E8%83%BD)色板快速加购功能详情',
        },
        enabled_color_swatch: {
          label: '色板快速加购',
        },
        swatch_style: {
          label: '色板样式',
          options__0: {
            label: '方形',
          },
          options__1: {
            label: '圆形',
          },
          options__2: {
            label: '圆角矩形',
          },
        },
        swatch_max_show: {
          label: '最大显示数量',
        },
        swatch_show_style: {
          label: '色卡显示方式',
          options__0: {
            label: '仅显示一行',
          },
          options__1: {
            label: '左右滑动',
          },
          options__2: {
            label: '平铺显示',
          },
        },
        swatch_size: {
          label: '显示大小',
          options__0: {
            label: '小',
          },
          options__1: {
            label: '中等',
          },
          options__2: {
            label: '大',
          },
        },
        group_header__2: {
          label: '商品卡片优惠标签',
          info: '仅适用于商品列表，详情页的优惠标签可前往 商品详情-价格 进行单独设置',
        },
        product_discount: {
          label: '显示优惠',
        },
        product_discount_tag_style: {
          label: '标签显示规则',
          options__0: {
            label: 'sale标签',
          },
          options__1: {
            label: 'save标签',
          },
        },
        product_discount_style: {
          label: '优惠显示格式',
          info: '当优惠标签选择save标签时生效',
          options__0: {
            label: '显示优惠金额',
          },
          options__1: {
            label: '显示优惠比例',
          },
        },
        product_discount_size: {
          label: '优惠标签大小',
          options__0: {
            label: '中',
          },
          options__1: {
            label: '小',
          },
        },
        product_discount_position: {
          label: '优惠标签位置',
          options__0: {
            label: '左上方',
          },
          options__1: {
            label: '右上方',
          },
          options__2: {
            label: '左下方',
          },
          options__3: {
            label: '右下方',
          },
        },
        product_discount_radius: {
          label: '优惠标签圆角半径',
        },
        group_header__3: {
          label: '商品卡片价格展示',
          info: '商品列表页的价格展示方式可前往 商品列表-商品信息 进行单独设置。',
        },
        product_card_price_show_type: {
          label: '价格展示方式',
          info: '此配置项在商品存在多个价格时生效',
          options__0: {
            label: '最低价',
          },
          options__1: {
            label: '价格区间',
          },
          options__2: {
            label: '最低价起',
          },
        },
      },
    },
    product_card: {
      name: '商品卡片',
      settings: {
        product_card_style: {
          label: '样式',
          options__0: {
            label: '标准',
          },
          options__1: {
            label: '卡片',
          },
        },
        product_card_image_padding: {
          label: '图片边距',
          info: '设置图片和背景之间的间距',
        },
        product_card_content_align: {
          label: '内容对齐方式',
          options__0: {
            label: '居左',
          },
          options__1: {
            label: '居中',
          },
        },
        group_header__0: {
          label: '边框',
        },
        product_card_border_thickness: {
          label: '厚度',
        },
        product_card_border_opacity: {
          label: '不透明度',
        },
        product_card_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        product_card_shadow_opacity: {
          label: '不透明度',
        },
        product_card_shadow_offset_x: {
          label: '水平偏移',
        },
        product_card_shadow_offset_y: {
          label: '垂直偏移',
        },
        product_card_shadow_blur: {
          label: '模糊',
        },
      },
    },
    collection_card: {
      name: '商品分类卡片',
      settings: {
        collection_card_style: {
          label: '样式',
          options__0: {
            label: '标准',
          },
          options__1: {
            label: '卡片',
          },
        },
        collection_card_image_padding: {
          label: '图片边距',
          info: '设置图片和背景之间的间距',
        },
        collection_card_content_align: {
          label: '内容对齐方式',
          options__0: {
            label: '居左',
          },
          options__1: {
            label: '居中',
          },
        },
        group_header__0: {
          label: '边框',
        },
        collection_card_border_thickness: {
          label: '厚度',
        },
        collection_card_border_opacity: {
          label: '不透明度',
        },
        collection_card_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        collection_card_shadow_opacity: {
          label: '不透明度',
        },
        collection_card_shadow_offset_x: {
          label: '水平偏移',
        },
        collection_card_shadow_offset_y: {
          label: '垂直偏移',
        },
        collection_card_shadow_blur: {
          label: '模糊',
        },
      },
    },
    blog_card: {
      name: '博客卡片',
      settings: {
        blog_card_style: {
          label: '样式',
          options__0: {
            label: '标准',
          },
          options__1: {
            label: '卡片',
          },
        },
        blog_card_image_padding: {
          label: '图片边距',
          info: '设置图片和背景之间的间距',
        },
        blog_card_content_align: {
          label: '内容对齐方式',
          options__0: {
            label: '居左',
          },
          options__1: {
            label: '居中',
          },
        },
        group_header__0: {
          label: '边框',
        },
        blog_card_border_thickness: {
          label: '厚度',
        },
        blog_card_border_opacity: {
          label: '不透明度',
        },
        blog_card_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        blog_card_shadow_opacity: {
          label: '不透明度',
        },
        blog_card_shadow_offset_x: {
          label: '水平偏移',
        },
        blog_card_shadow_offset_y: {
          label: '垂直偏移',
        },
        blog_card_shadow_blur: {
          label: '模糊',
        },
      },
    },
    other_card: {
      name: '其他卡片',
      settings: {
        group_header__0: {
          label: '边框',
        },
        card_border_thickness: {
          label: '厚度',
        },
        card_border_opacity: {
          label: '不透明度',
        },
        card_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        card_shadow_opacity: {
          label: '不透明度',
        },
        card_shadow_offset_x: {
          label: '水平偏移',
        },
        card_shadow_offset_y: {
          label: '垂直偏移',
        },
        card_shadow_blur: {
          label: '模糊',
        },
      },
    },
    content: {
      name: '内容容器',
      settings: {
        group_header__0: {
          label: '边框',
        },
        content_border_thickness: {
          label: '厚度',
        },
        content_border_opacity: {
          label: '不透明度',
        },
        content_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        content_shadow_opacity: {
          label: '不透明度',
        },
        content_shadow_offset_x: {
          label: '水平偏移',
        },
        content_shadow_offset_y: {
          label: '垂直偏移',
        },
        content_shadow_blur: {
          label: '模糊',
        },
      },
    },
    media_files: {
      name: '媒体文件',
      settings: {
        group_header__0: {
          label: '边框',
        },
        media_border_thickness: {
          label: '厚度',
        },
        media_border_opacity: {
          label: '不透明度',
        },
        media_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        media_shadow_opacity: {
          label: '不透明度',
        },
        media_shadow_offset_x: {
          label: '水平偏移',
        },
        media_shadow_offset_y: {
          label: '垂直偏移',
        },
        media_shadow_blur: {
          label: '模糊',
        },
      },
    },
    dropdown_menu: {
      name: '下拉菜单和弹窗',
      settings: {
        group_header__0: {
          label: '边框',
        },
        menu_modal_border_thickness: {
          label: '厚度',
        },
        menu_modal_border_opacity: {
          label: '不透明度',
        },
        menu_modal_border_radius: {
          label: '圆角半径',
        },
        group_header__1: {
          label: '阴影',
        },
        menu_modal_shadow_opacity: {
          label: '不透明度',
        },
        menu_modal_shadow_offset_x: {
          label: '水平偏移',
        },
        menu_modal_shadow_offset_y: {
          label: '垂直偏移',
        },
        menu_modal_shadow_blur: {
          label: '模糊',
        },
      },
    },
    drawer: {
      name: '抽屉',
      settings: {
        group_header__0: {
          label: '边框',
        },
        drawer_border_thickness: {
          label: '厚度',
        },
        drawer_border_opacity: {
          label: '不透明度',
        },
        group_header__1: {
          label: '阴影',
        },
        drawer_shadow_opacity: {
          label: '不透明度',
        },
        drawer_shadow_offset_x: {
          label: '水平偏移',
        },
        drawer_shadow_offset_y: {
          label: '垂直偏移',
        },
        drawer_shadow_blur: {
          label: '模糊',
        },
      },
    },
    cart: {
      name: '购物车',
      settings: {
        cart_type: {
          label: '购物车形式',
          options__0: {
            label: '抽屉',
          },
          options__1: {
            label: '进入购物车页',
          },
          options__2: {
            label: '通知弹窗',
          },
        },
        cart_continue_url: {
          label: '继续购物跳转链接',
        },
        group_header__0: {
          label: '空购物车推荐',
        },
        cart_empty_recommend_title: {
          label: '标题',
        },
        cart_empty_recommend_collection: {
          label: '推荐商品分类',
        },
        cart_empty_recommend_product_to_show: {
          label: '最多显示商品数',
        },
        cart_empty_recommend_product_image_ratio: {
          label: '商品图比例',
          options__0: {
            label: '原始比例',
          },
          options__1: {
            label: '1:1',
          },
          options__3: {
            label: '4:3',
          },
          options__4: {
            label: '2:3',
          },
        },
        cart_empty_recommend_product_image_fill_type: {
          label: '商品图填充方式',
          options__0: {
            label: '适应',
          },
          options__1: {
            label: '填充',
          },
        },
      },
    },
    checkout: {
      name: '结账',
      settings: {
        group_header__0: {
          label: 'Banner',
        },
        co_banner_pc_img: {
          label: '电脑端图片',
        },
        co_banner_phone_img: {
          label: '移动端图片',
          info: '若未上传移动端图片，则移动端显示电脑端图片',
        },
        co_banner_pc_height: {
          label: '电脑端图片高度',
          options__0: {
            label: '适应图片',
          },
          options__1: {
            label: '高',
          },
          options__2: {
            label: '低',
          },
        },
        co_banner_phone_height: {
          label: '移动端图片高度',
          options__0: {
            label: '适应图片',
          },
          options__1: {
            label: '高',
          },
          options__2: {
            label: '低',
          },
        },
        co_banner_img_show: {
          label: '图片展示区域',
          options__0: {
            label: '上',
          },
          options__1: {
            label: '中',
          },
          options__2: {
            label: '下',
          },
        },
        co_full_screen: {
          label: '电脑端宽度铺满屏幕',
        },
        group_header__1: {
          label: 'Logo',
        },
        co_checkout_image: {
          label: '自定义图片',
        },
        co_logo_size: {
          label: 'Logo尺寸',
          options__0: {
            label: '小',
          },
          options__1: {
            label: '中',
          },
          options__2: {
            label: '大',
          },
        },
        co_logo_position: {
          label: 'Logo位置',
          options__0: {
            label: '左',
          },
          options__1: {
            label: '中',
          },
          options__2: {
            label: '右',
          },
        },
        group_header__2: {
          label: '内容信息',
        },
        co_bg_image: {
          label: '背景图片',
        },
        co_background_color: {
          label: '背景颜色',
        },
        co_form_bg_color: {
          label: '表单背景颜色',
          options__0: {
            label: '白色',
          },
          options__1: {
            label: '透明',
          },
        },
        group_header__3: {
          label: '订单摘要',
        },
        co_order_bg_image: {
          label: '背景图片',
        },
        co_order_background_color: {
          label: '背景颜色',
        },
        group_header__4: {
          label: '字体',
        },
        co_type_title_font: {
          label: '标题',
        },
        co_type_body_font: {
          label: '正文',
        },
        group_header__5: {
          label: '颜色',
        },
        co_color_btn_bg: {
          label: '按钮背景',
        },
        co_color_err_color: {
          label: '报错信息',
          info: '错误信息提示和高亮边框',
        },
        co_color_msg_color: {
          label: '强调信息',
          info: '链接、复选框、输入框边框和下拉菜单',
        },
      },
    },
    media_sosial: {
      name: '社交媒体',
      settings: {
        group_header__0: {
          label: '账号',
          info: '用于客户访问你的社交媒体账号',
        },
        show_official_icon: {
          label: '显示社交媒体官方图标',
        },
        social_facebook_link: {
          label: 'Facebook',
        },
        social_twitter_link: {
          label: 'X（Twitter）',
        },
        social_pinterest_link: {
          label: 'Pinterest',
        },
        social_instagram_link: {
          label: 'Instagram',
        },
        social_snapchat_link: {
          label: 'Snapchat',
        },
        social_tiktok_link: {
          label: 'TikTok',
        },
        social_youtube_link: {
          label: 'Youtube',
        },
        social_vimeo_link: {
          label: 'Vimeo',
        },
        social_tumblr_link: {
          label: 'Tumblr',
        },
        social_linkedin_link: {
          label: 'Linkedin',
        },
        social_whatsapp_link: {
          label: 'WhatsApp',
        },
        social_line_link: {
          label: 'Line',
        },
        social_kakao_link: {
          label: 'Kakao',
        },
        group_header__1: {
          label: '分享',
          info: '在商品详情页、博客页提供分享操作',
        },
        show_official_share_icon: {
          label: '显示社交媒体官方图标',
        },
        show_social_name: {
          label: '显示社媒名称',
        },
        share_to_facebook: {
          label: '分享到Facebook',
        },
        share_to_twitter: {
          label: '分享到X（Twitter）',
        },
        share_to_pinterest: {
          label: '分享到Pinterest',
        },
        share_to_line: {
          label: '分享到LINE',
        },
        share_to_whatsapp: {
          label: '分享到Whatsapp',
        },
        share_to_tumblr: {
          label: '分享到Tumblr',
        },
      },
    },
    search_behavior: {
      name: '搜索行为',
      settings: {
        search_menu: {
          label: '搜索推荐菜单',
          info: '搜索框未输入内容时显示',
        },
        show_search_goods_price: {
          label: '推荐商品显示价格',
        },
      },
    },
    breadcrumb: {
      name: '面包屑',
      settings: {
        show_pc_breadcrumb: {
          label: '电脑端显示面包屑',
        },
        show_mobile_breadcrumb: {
          label: '移动端显示面包屑',
        },
      },
    },
    favicon: {
      name: '网站图标',
      settings: {
        favicon_image: {
          label: '网站图标',
          info: '尺寸：32 x 32px',
        },
      },
    },
  },
};
export const useGetSchemaLanguage = () => {
  useEffect(() => {
    i18n.addResourceBundle(zhKey, defaultNs, locales, true, true);
  }, []);
};
