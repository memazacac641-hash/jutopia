// 内容集中在这里。zh / en 为中文 / 英文；图片与链接未提供时留空。
window.PORTFOLIO = {
  email: '3030001734@qq.com',
  wechat: 'filmouttomi',
  qrImage: 'assets/wechat-qr.jpg',
  aboutVideo: {src: 'assets/about/intro.mp4', poster: 'assets/about/intro-poster.jpg'},
  bio: {
    zh: '我是广州美术学院艺术设计学专业学生，具有文化展览策划、整合型地方品牌推广活动、多平台社交媒体运营及人工智能辅助视觉设计的经验。我关注如何将文化叙事转化为当代视觉与空间体验。',
    en: 'I am a student majoring in Art and Design at Guangzhou Academy of Fine Arts. Experienced in cultural exhibition planning, integrated place-branding campaigns, multi-platform social-media operations, and AI-assisted visual design. Interested in translating cultural narratives into contemporary visual and spatial experiences.'
  },
  experiences: [
    {
      id: 'zeiss', name: 'ZEISS', dates: '07/2026 – 08/2026',
      company: 'Carl Zeiss Vision (China) Ltd.',
      role: {zh: '实习生', en: 'Intern'},
      bullets: {
        zh: [
          '参与蔡司 180 周年「180 People · 180 Lights」活动视觉内容制作，包括主题视觉设计、摄影及活动后宣传物料。',
          '为「Vision 2030」AI 项目搭建 ComfyUI + Flux 工作流，生成品牌创意视觉，支持 AI 辅助设计探索。',
          '制作月度报告、海报及其他宣传物料，剪辑活动短视频，并协助线下活动执行，支持内部品牌传播。'
        ],
        en: [
          'Developed visual content for ZEISS’s 180th-anniversary “180 People · 180 Lights” campaign, including thematic visual design, photography and post-campaign promotional materials.',
          'Built a ComfyUI + Flux workflow for the “Vision 2030” AI initiative to generate brand creative visuals and support AI-assisted design exploration.',
          'Produced monthly reports, posters and other promotional materials, edited short-form event videos, and supported offline event execution for internal brand communications.'
        ]
      }
    },
    {
      id: 'sherwin', name: 'Sherwin-Williams', dates: '04/2026 – 06/2026',
      company: 'Sherwin-Williams (Guangdong) New Materials Co., Ltd.',
      role: {zh: '色彩推广助理', en: 'Colour Promotion Assistant'},
      department: {zh: '色彩与技术共享服务中心', en: 'Colour & Technology Shared Service Centre'},
      bullets: {
        zh: [
          '研究国内外涂料色彩趋势，将研究结果转化为季节性产品文案、产品价值主张及展览传播内容；整理品牌资产，更新各线上平台内容。',
          '协助线上与线下色彩推广活动，准备物料、跟进流程，负责现场音视频设备、嘉宾签到及双语接待；拍摄照片和短视频，用于活动后传播。',
          '开展活动后访谈，将参与者反馈整理为数据报告，为后续品牌推广规划与活动优化提供依据。'
        ],
        en: [
          'Researched domestic and international coating colour trends and translated findings into seasonal product copy, product value propositions and exhibition communications; organised brand assets and updated content across online platforms.',
          'Supported the delivery of online and offline colour-promotion events by preparing materials, tracking workflows, and managing on-site AV setup, guest registration and bilingual reception; also produced photographs and short-form video content for post-event communications.',
          'Conducted post-event interviews and consolidated attendee feedback into data reports, providing evidence for future brand-promotion planning and campaign optimisation.'
        ]
      }
    },
    {
      id: 'boge', name: 'Boge Yiwen', dates: '06/2025 – 08/2025',
      company: 'Guangzhou Boge Yiwen Advertising Co., Ltd.',
      role: {zh: '助理设计师', en: 'Assistant Designer'},
      bullets: {
        zh: [
          '协助天河区美食主题活动的线上线下传播，将四条主题美食路线与集章活动、用户生成内容结合，促进公众参与美食文化与城市空间体验。',
          '协助小红书、抖音及大众点评的 KOC 推广，小红书内容获得 450,648 次浏览；推广后续集章活动，延续活动曝光并支持参与商户。',
          '协助广州天环在微信、小红书与微博的运营；首月微信粉丝数、文章浏览量和互动量较交接前基准分别增长 21.3%、38% 和 83%。',
          '参与展览与空间设计项目：开展展览研究，为 2025 年羊城书展黄玉郎漫画展及南国书香节「湾区更美好生活」主题馆制定方案与叙事结构，并使用 Rhino 和 Blender 为春节商场装置制作 3D 空间渲染。'
        ],
        en: [
          'Supported online and offline communications for Tianhe District’s culinary initiative, combining four themed food routes with stamp-collection activities and user-generated content to encourage engagement with food culture and urban spaces.',
          'Supported KOC campaigns across Xiaohongshu, Douyin and Dianping; Xiaohongshu content generated 450,648 views. Promoted a follow-up stamp-collection activation to sustain campaign visibility and support participating businesses.',
          'Supported operations for Guangzhou Parc Central across WeChat, Xiaohongshu and Weibo; in the first month, WeChat followers, article views and interactions increased by 21.3%, 38% and 83% compared with the pre-handover baseline.',
          'Contributed to exhibition and spatial-design projects by researching exhibitions, developing proposals and narrative structures for the 2025 Yangcheng Book Fair Wong Yuk-long Comic Exhibition and a “Bay Area Better Life” themed pavilion at the South China Book Festival, and creating 3D spatial renderings for a Spring Festival mall installation using Rhino and Blender.'
        ]
      }
    }
  ],
  projects: [
    {
      id: '01',
      category: {zh: '灯具设计 · 音乐转译', en: 'Lighting design · Translating music'},
      title: {zh: '步光', en: 'Bu Guang'},
      summary: {
        zh: '基于广东音乐《步步高》技法与旋律转译的多面折幕桌面灯。本设计以广东音乐《步步高》为灵感来源，从音乐的整体听觉感受与具有广东音乐特色的演奏技法中提取“递进、展开、上扬”的特征，并将其转化为灯具的形态、结构与光线逻辑。',
        en: 'A multifaceted, folded-screen table lamp that translates the techniques and melody of the Cantonese composition Bu Bu Gao into light. Drawing on its overall listening experience and characteristic performance techniques, the design extracts a sense of progression, unfolding and ascent, translating these qualities into the lamp’s form, structure and lighting logic.'
      },
      image: 'assets/buguang/scene.png',
      thumbnail: 'assets/buguang/scene.png',
      alt: {zh: '《步光》桌面灯场景效果图，灯具置于圆形台面，呈现琥珀色折面与暖光。', en: 'Scene rendering of Bu Guang on a circular platform, showing amber folded surfaces and warm light.'},
      url: '', tone: 'lime', year: '2025', role: {zh: '全程独立设计', en: 'Independent designer throughout the project'}, tools: 'Rhino · KeyShot',
      sections: [
        {heading: {zh: '从旋律到形态', en: 'From melody to form'}, body: {zh: '设计从《步步高》的听觉感受出发，将“递进、展开、上扬”作为形态与光线组织的线索。设计思路图梳理了滑音、加花与切分音等音乐特征，探索广东音乐与日常桌面照明之间的联系。', en: 'The design begins with the listening experience of Bu Bu Gao, using progression, unfolding and ascent to guide form and light. The concept diagram maps musical characteristics such as slides, ornamentation and syncopation, exploring a connection between Cantonese music and everyday table lighting.'}},
        {heading: {zh: '外层 · 硬质折面', en: 'Outer layer · Rigid folds'}, body: {zh: '外层为硬质折面，负责形成整体包裹感与清晰边界。多面折幕构成灯具的外部轮廓，呈现向上展开的形态。', en: 'Rigid folded surfaces form the outer layer, creating a sense of enclosure and a clear boundary. The multifaceted screen defines the silhouette with an upward, unfolding form.'}},
        {heading: {zh: '内层 · 褶皱柔光', en: 'Inner layer · Pleated diffusion'}, body: {zh: '内层为可展开的褶皱柔光层，负责表现音乐中的细部变化与音色层次。褶皱结构将音乐的细节转化为可感知的光影变化。', en: 'An expandable pleated diffuser forms the inner layer, expressing the music’s subtle variations and tonal layers. The folds translate musical detail into perceptible changes in light and shadow.'}},
        {heading: {zh: '主脊 · 竖向 LED', en: 'Central spine · Vertical LED'}, body: {zh: '中间设置竖向 LED 主脊光源，通过内部空腔向褶皱层均匀发光，使外部折面、内部柔光层与光源形成相互配合的结构。', en: 'A vertical LED light source sits along the central spine. Light travels through the internal cavity to illuminate the pleated layer evenly, bringing the outer folds, inner diffuser and light source into one coordinated structure.'}}
      ],
      gallery: [
        {image: 'assets/buguang/concept.png', alt: {zh: '《步光》设计思路图，连接广东音乐技法、文化核心、桌面灯功能与产品愿景。', en: 'Bu Guang concept diagram connecting Cantonese musical techniques, cultural ideas, lamp functions and the product vision.'}, caption: {zh: '01 / 设计思路与音乐转译', en: '01 / Concept & musical translation'}},
        {image: 'assets/buguang/interaction.png', alt: {zh: '手指触碰灯具上缘的交互示意效果图。', en: 'Interaction rendering showing a finger touching the lamp’s upper edge.'}, caption: {zh: '02 / 指尖交互示意', en: '02 / Fingertip interaction concept'}},
        {image: 'assets/buguang/light.png', alt: {zh: '《步光》灯具发光效果图，展示竖向光源与折面反射。', en: 'Lighting rendering showing the vertical light source and reflections across the folded surfaces.'}, caption: {zh: '03 / 发光效果', en: '03 / Lighting study'}},
        {image: 'assets/buguang/front.png', alt: {zh: '《步光》灯具正面效果图。', en: 'Front rendering of Bu Guang.'}, caption: {zh: '04 / 正面形态', en: '04 / Front view'}},
        {image: 'assets/buguang/side.png', alt: {zh: '《步光》灯具侧面效果图。', en: 'Side rendering of Bu Guang.'}, caption: {zh: '05 / 侧面形态', en: '05 / Side view'}},
        {image: 'assets/buguang/top.png', alt: {zh: '《步光》灯具俯视效果图，展示多面折幕与内部光源。', en: 'Top rendering of Bu Guang, showing the folded screen and internal light source.'}, caption: {zh: '06 / 俯视结构', en: '06 / Top view'}}
      ]
    },
    {
      id: '02',
      category: {zh: '桌游设计 · 文化创意', en: 'Board game · Cultural design'},
      title: {zh: '铁军征程', en: 'The Iron Army Journey'},
      summary: {
        zh: '《铁军征程》是一款以北伐战争叶挺独立团的铁军事迹为主题的创意桌游，融合经典飞行棋玩法与红色主题教育。玩家将化身铁军战士，在还原历史场景的棋盘上展开征程，通过特色事件卡和任务卡系统，亲身体验叶挺独立团的辉煌战绩与铁军精神。游戏既保留了策略博弈的趣味性，又以寓教于乐的方式让玩家在游戏中了解革命历史，传承红色基因。',
        en: 'The Iron Army Journey is a creative board game inspired by the achievements of Ye Ting’s Independent Regiment during the Northern Expedition. Combining classic aeroplane chess mechanics with revolutionary history education, it invites players to take on the role of Iron Army soldiers and travel across a board featuring historical settings. Event and task cards introduce the regiment’s achievements and spirit, bringing historical learning into an engaging game of strategy.'
      },
      image: 'assets/tiejun/overview.jpg',
      thumbnail: 'assets/tiejun/thumbnail.png',
      thumbnailAlt: {zh: '《铁军征程》桌游套装，包含包装、棋盘、说明书、卡牌、棋子与骰子。', en: 'The Iron Army Journey board game set, with packaging, board, instructions, cards, playing pieces and dice.'},
      imagePosition: 'center top',
      alt: {zh: '《铁军征程》设计总览展板，展示阅江楼插画、游戏包装、棋盘、卡牌与棋子。', en: 'Overview board for The Iron Army Journey, showing Yuejiang Tower, packaging, the game board, cards and playing pieces.'},
      url: '', tone: 'silver', year: '2025',
      role: {zh: '全程独立设计', en: 'Independent designer throughout the project'},
      award: {zh: '“铁军百年·文创启航”文创大赛优秀奖', en: 'Excellence Award, “A Century of the Iron Army · Cultural Creativity Sets Sail” cultural and creative design competition (translated title)'},
      tools: 'Adobe Illustrator',
      sections: [
        {heading: {zh: '棋盘与行军叙事', en: 'Board design & journey'}, body: {zh: '以抽象化的行军路线串联战斗、军民联合、训练等场景，将军旗、铁军盾牌等相关元素转化为视觉符号，呈现铁军将士的征途。棋盘连接广东肇庆与湖北武昌，以场景插画和特色格子推动玩家探索。', en: 'An abstract marching route connects scenes of combat, military–civilian cooperation and training. Flags, shields and other regiment-related elements become visual symbols along a journey connecting Zhaoqing, Guangdong, with Wuchang, Hubei. Illustrated settings and special spaces guide players through the board.'}},
        {heading: {zh: '棋子与角色设计', en: 'Playing pieces & characters'}, body: {zh: '棋子以叶挺独立团战士为原型，结合军装元素进行卡通化设计。赤红、明黄、靛蓝与苍绿四种颜色区分阵营，在历史主题与活泼的视觉表达之间建立联系。', en: 'The playing pieces reinterpret soldiers of Ye Ting’s Independent Regiment as cartoon characters, incorporating military uniform elements. Red, yellow, blue and green distinguish the four teams, pairing a historical theme with a lively visual language.'}},
        {heading: {zh: '卡牌与学习机制', en: 'Cards & learning mechanics'}, body: {zh: '历史事件卡设置正面与负面事件，通过前进奖励和行军挑战丰富策略体验。铁军精神卡将历史知识问答融入任务，让玩家在互动挑战中了解独立团史实。', en: 'Historical event cards introduce both positive and negative events, combining movement rewards with marching challenges. Iron Army spirit cards integrate historical questions into tasks, allowing players to learn about the regiment through interactive challenges.'}},
        {heading: {zh: '包装与说明书', en: 'Packaging & instructions'}, body: {zh: '包装、卡牌与说明书延续红色主题的视觉语言。说明书整合游戏准备、特殊格子规则与获胜条件，帮助玩家理解游戏流程。', en: 'Packaging, cards and instructions share a red visual theme. The manual brings together setup, special-space rules and winning conditions to introduce the flow of the game.'}}
      ],
      gallery: [
        {image: 'assets/tiejun/board-and-pieces.jpg', alt: {zh: '棋盘与棋子设计展板：行军路线、五种场景插画及四种阵营棋子。', en: 'Board and playing-piece design board, showing the route, five scene illustrations and four teams of character pieces.'}, caption: {zh: '02 / 棋盘叙事与角色设计', en: '02 / Board narrative & character design'}},
        {image: 'assets/tiejun/cards-and-manual.jpg', alt: {zh: '卡牌与说明书设计展板：历史事件卡、铁军精神知识问答卡及游戏规则。', en: 'Card and instruction design board, showing historical event cards, Iron Army spirit quiz cards and game rules.'}, caption: {zh: '03 / 卡牌机制与游戏说明', en: '03 / Card mechanics & game instructions'}}
      ]
    },
    {
      id: '03',
      category: {zh: '展览策划 · 空间设计', en: 'Exhibition planning · Spatial design'},
      title: {zh: '2025年羊城书展', en: '2025 Guangzhou Book Fair'},
      summary: {
        zh: '2025 羊城书展以「在书城 阅山海」为主题，作为南国书香节核心文化活动，立足粤港澳大湾区文化交流，打造阅读 + 动漫跨界展陈板块。本人作为设计实习生，参与黄玉郎板块的内容策划落地与空间展陈设计工作。板块聚焦 “港漫教父” 黄玉郎经典 IP，呈现《神兵玄奇》《天子传奇》《龙虎门》等经典港漫原作、手稿与出版物，配合「传承与创新：湾区动漫产业对话」名家论坛活动，搭建港漫文化展示与读者互动的沉浸式展场。\n\n设计上，融合港漫热血视觉语言与书展整体视觉体系，完成空间动线规划、展板版式、图文内容梳理、视觉物料设计，平衡漫画强视觉冲击力与书香展陈氛围；兼顾粉丝打卡、图文阅读、活动观演多重需求，打通纸质漫画到实体空间的转译，助力港漫经典 IP 在书展场景面向年轻群体破圈传播，呈现大湾区动漫文脉交融的文化现场。',
        en: 'Under the theme “In the City of Books, Read Mountains and Seas” (translated title), the 2025 Guangzhou Book Fair served as a core cultural event of the Southern China Book Festival. Rooted in cultural exchange across the Guangdong–Hong Kong–Macao Greater Bay Area, it brought reading and comics together in a cross-disciplinary exhibition. As a design intern, I contributed to the implementation of content planning and spatial exhibition design for the Wong Yuk-long section. Focusing on the classic works of the “godfather of Hong Kong comics,” the section presented original artwork, manuscripts and publications from Shen Bing Xuan Qi, Tian Zi Chuan Qi and Long Hu Men. Alongside the forum “Inheritance and Innovation: A Dialogue on the Greater Bay Area Animation and Comics Industry” (translated title), it created an immersive setting for cultural display and reader interaction.\n\nThe design combined the energetic visual language of Hong Kong comics with the book fair’s overall visual system. My work encompassed visitor circulation planning, exhibition-panel layouts, text and image organization, and visual materials. It balanced the strong visual impact of comics with the atmosphere of a literary exhibition, accommodating fan photo opportunities, reading and event viewing. By translating printed comics into a physical environment, the exhibition supported the reach of classic Hong Kong comics among younger audiences and expressed the convergence of the Greater Bay Area’s comics traditions.'
      },
      image: 'assets/bookfair/exhibition.png',
      thumbnail: 'assets/bookfair/exhibition.png',
      alt: {zh: '书展现场照片拼图，展示漫画展、艺术作品与“湾区更美好生活”主题展区。', en: 'Collage of book fair photographs showing the comics exhibition, artworks and the Greater Bay Area themed exhibition spaces.'},
      url: '', tone: 'blue', year: '2025',
      role: {zh: '设计实习生 · 参与内容策划落地与空间展陈设计', en: 'Design intern · Content planning implementation & spatial exhibition design'},
      tools: 'Adobe Illustrator · Rhino · Blender',
      sections: [
        {heading: {zh: '内容策划与展陈叙事', en: 'Content planning & exhibition narrative'}, body: {zh: '围绕黄玉郎经典港漫 IP，梳理原作、手稿与出版物的图文内容，并结合「传承与创新：湾区动漫产业对话」论坛，组织文化展示与读者互动的展陈叙事。', en: 'Organized text and imagery around Wong Yuk-long’s classic comics, original artwork, manuscripts and publications. The exhibition narrative connected cultural display and reader interaction with the industry forum.'}},
        {heading: {zh: '空间动线与视觉系统', en: 'Visitor circulation & visual system'}, body: {zh: '融合港漫热血视觉语言与书展整体视觉体系，完成空间动线规划、展板版式与视觉物料设计。兼顾粉丝打卡、图文阅读与活动观演，将纸质漫画转译为实体空间体验。', en: 'Combined the energetic visual language of Hong Kong comics with the book fair’s visual identity through circulation planning, panel layouts and visual materials. The space accommodated fan photo opportunities, reading and event viewing, translating printed comics into a physical experience.'}}
      ],
      gallery: []
    },
    {
      id: '04', title: {zh: 'CantonFlora', en: 'CantonFlora'},
      category: {zh: '非遗 × AI · 生成模型研究', en: 'Cultural heritage × AI · Generative model research'},
      summary: {
        zh: 'CantonFlora 是一个基于 LoRA 微调的广彩瓷花鸟纹样生成模型。以 SDXL 为基座，使用 106 张精标注的广彩瓷纹样图像进行两阶段增量训练，学习广彩瓷特有的粉彩配色、金线勾勒与开光构图风格。用户输入文字描述，模型即可在十余秒内生成对应的广彩风格纹样图案，可应用于博物馆交互展示与文创设计等场景。',
        en: 'CantonFlora is a LoRA-fine-tuned model for generating floral and bird motifs in the style of Canton enamel porcelain. Built on SDXL, it uses 106 carefully annotated pattern images in a two-stage incremental training process to learn the porcelain’s characteristic pastel palette, gold outlines and framed compositions. From a text description, the model generates a corresponding Canton-style motif in just over ten seconds, with potential applications in interactive museum displays and cultural product design.'
      },
      image: 'assets/cantonflora/cover.png', thumbnail: 'assets/cantonflora/cover.png',
      alt: {zh: 'CantonFlora 项目封面：广彩风格花鸟纹样与基于 LoRA 的纹样保存和生成方法。', en: 'CantonFlora cover featuring a Canton-style floral motif and the LoRA-based preservation and generation approach.'},
      url: '', tone: 'pink', year: '2026',
      role: {zh: '原始图像搜集、LoRA 模型训练、论文撰写、生成图像', en: 'Source image collection, LoRA model training, paper writing and image generation'},
      tools: 'SDXL · LoRA',
      sections: [
        {heading: {zh: '精标注纹样数据', en: 'Carefully annotated patterns'}, body: {zh: '搜集广彩瓷原始图像，整理花鸟纹样数据。精标注体系围绕文化属性、纹样主体、空间构图、色彩体系与工艺特征组织文本描述，将传统纹样的视觉特征转化为训练信息。', en: 'Collected source images of Canton enamel porcelain and organized floral and bird motif data. The annotation system describes cultural attributes, subjects, spatial composition, color and craft characteristics, translating visual features into training information.'}},
        {heading: {zh: '两阶段增量训练', en: 'Two-stage incremental training'}, body: {zh: '以 SDXL 为基座进行 LoRA 微调。先学习基础配色与勾线特征，再扩展至边饰、锦地、开光与器物整体等复杂构图，逐步建立广彩风格的生成能力。', en: 'Fine-tuned SDXL using LoRA. The first stage focuses on basic color and outline characteristics, followed by more complex compositions including borders, patterned grounds, framed panels and whole objects.'}},
        {heading: {zh: '纹样生成与研究记录', en: 'Pattern generation & research'}, body: {zh: '使用文字描述生成广彩风格纹样，并通过论文撰写记录数据整理、模型训练与生成方法。围绕粉彩配色、金线勾勒与开光构图，探索传统工艺视觉语言的保存与再生成。', en: 'Generated Canton-style motifs from text descriptions and documented data preparation, model training and generation methods in a research paper. The project explores the preservation and regeneration of traditional craft aesthetics through pastel colors, gold outlines and framed compositions.'}},
        {heading: {zh: '应用设想与下一步', en: 'Potential applications & next steps'}, body: {zh: '探索博物馆交互展示与文创设计应用。项目展板提出文字输入、纹样生成与扫码下载的交互设想；用户评估、构图控制、数据扩充与移动端部署列为后续研究方向。', en: 'Explores applications in interactive museum displays and cultural product design. The project boards propose an experience of text input, motif generation and QR-code download. User evaluation, composition control, dataset expansion and mobile deployment remain future research directions.'}}
      ],
      gallery: [
        {image: 'assets/cantonflora/overview.png', alt: {zh: 'CantonFlora 项目概述，展示研究问题、目标与技术路线。', en: 'Project overview showing the research question, goals and technical approach.'}, caption: {zh: '01 / 项目概述', en: '01 / Project overview'}},
        {image: 'assets/cantonflora/dataset.png', alt: {zh: '数据来源与规模展板，包含图像来源、106 张精标注图像及预处理流程。', en: 'Dataset sources and scale, including 106 annotated images and the preprocessing workflow.'}, caption: {zh: '02 / 数据来源与规模', en: '02 / Dataset sources & scale'}},
        {image: 'assets/cantonflora/annotation.png', alt: {zh: '多层级语义标注体系，展示文化、主体、构图、颜色与工艺维度。', en: 'Multilevel semantic annotation system covering culture, subjects, composition, color and craft.'}, caption: {zh: '03 / 标注体系', en: '03 / Annotation system'}},
        {image: 'assets/cantonflora/configuration.png', alt: {zh: 'SDXL 基座模型与 LoRA 配置展板。', en: 'SDXL base model and LoRA configuration board.'}, caption: {zh: '04 / 基座模型与 LoRA 配置', en: '04 / Base model & LoRA configuration'}},
        {image: 'assets/cantonflora/training.png', alt: {zh: '两阶段训练策略展板，展示基础风格学习与复杂构图扩展。', en: 'Two-stage training strategy showing basic style learning and expansion to complex compositions.'}, caption: {zh: '05 / 两阶段训练策略', en: '05 / Two-stage training strategy'}},
        {image: 'assets/cantonflora/application.png', alt: {zh: '博物馆交互应用设想、生成纹样示例与项目创新点。', en: 'Proposed museum interaction, generated motif examples and project contributions.'}, caption: {zh: '06 / 应用场景与生成示例', en: '06 / Applications & generated examples'}},
        {image: 'assets/cantonflora/roadmap.png', alt: {zh: '技术、论文与数据三个方向的后续研究计划。', en: 'Future research roadmap covering technology, paper development and data.'}, caption: {zh: '07 / 后续研究计划', en: '07 / Research roadmap'}}
      ]
    }
  ]
};
