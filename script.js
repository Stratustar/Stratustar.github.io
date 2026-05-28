(function () {
  const translations = {
    en: {
      "page.home.title": "Hengdong Lu",
      "page.home.description": "Hengdong Lu is a physics PhD student at EPFL working on biophysics, active matter, and non-equilibrium physics in living systems.",
      "page.photography.title": "Photography | Hengdong Lu",
      "page.photography.description": "A small photography page by Hengdong Lu.",
      "lang.toggleAria": "Switch language",
      "nav.about": "About",
      "nav.life": "Life",
      "nav.photography": "Photography",
      "nav.contact": "Contact",
      "nav.publication": "Publication",
      "home.hero.eyebrow": "Physics PhD student at EPFL",
      "home.hero.bio": "I am currently a PhD student in physics at EPFL. Before coming to Lausanne, I earned my BSc in Physics at Southern University of Science and Technology, then completed my MSc in Physics at the Niels Bohr Institute, University of Copenhagen.",
      "home.hero.research": "My research interests sit around biophysics and active matter. I develop bottom-up models to describe active systems, and I am familiar with, and currently working in, continuum and multiphase-field frameworks. I focus on biological systems with phenotypic heterogeneity, including bacterial colonies and eukaryotic cell tissues, and I see these systems as testing grounds for broader non-equilibrium theories of complex systems.",
      "home.hero.outside": "Outside academia, my interests are broad, including photography, fusion jazz, and simple design.",
      "home.hero.readMore": "Read more",
      "home.hero.contactAria": "Contact links",
      "home.hero.credit": "Background image generated with OpenAI Image2.",
      "home.about.title": "Physics, with living systems close by.",
      "home.about.p1": "I like theories that have to survive contact with real life. Cells change states, bacteria grow in uneven neighborhoods, and tissues make decisions without a central conductor. That is exactly the kind of physical situation I find beautiful.",
      "home.about.p2": "In the biological systems with phenotypic heterogeneity that I care about, the units actively consume energy at the microscopic scale and break detailed balance, giving rise to rich non-equilibrium dynamics. They can also change their mechanical properties in response to the environment, then reshape that environment in return. These feedbacks and adaptations are part of what makes the systems so hard to understand.",
      "home.about.p3": "It is a demanding playground for frontier ideas in active matter: active turbulence, defect-mediated dynamics, motility-induced phase separation, non-reciprocal couplings, and more. I study how phenotypic heterogeneity enters these theories as internal state variables that couple to motility, growth, adhesion, and active stress, shaping collective dynamics far from equilibrium.",
      "home.life.title": "A few things outside the equations.",
      "home.life.photoTitle": "Small observations, kept visual.",
      "home.life.photoText": "I like photography because it rewards patience without making a big speech about it. A small photo page keeps a few frames I like.",
      "home.life.photoPreviewAria": "Open photography gallery",
      "home.life.openGallery": "Open the gallery",
      "home.life.musicLabel": "Music",
      "home.life.musicTitle": "Warm fusion textures.",
      "home.life.musicText": "I am drawn to the modern, loose side of fusion: the soft swing of Nujabes, the glowing keyboard language of FKJ, and music that feels like a room slowly finding its light.",
      "home.life.playerAria": "Spotify track link",
      "home.life.spotifyButton": "Play",
      "home.life.spotifyAria": "Open Luv (sic) pt 4 Instrumentals on Spotify",
      "home.life.trackTitle": "Luv (sic) pt 4 Instrumentals",
      "home.life.trackMeta": "Nujabes · opens on Spotify",
      "home.life.watchLabel": "Watches",
      "home.life.watchTitle": "A budget-conscious watch person.",
      "home.life.watchText": "I am a watch enthusiast without the fantasy budget. So I designed my own watch and worked with a factory to make it real: a small object somewhere between engineering, taste, patience, and restraint.",
      "home.contact.title": "Say hello.",
      "home.contact.text": "I am always happy to hear from people thinking about living matter, active systems, photography, music, watches, or some odd intersection of the above.",
      "home.contact.email": "Email me",
      "home.publication.title": "Publication",
      "home.publication.paperTitle": "Density-velocity relation is scale-dependent in epithelial monolayers",
      "home.publication.text": "Hengdong Lu, Tianxiang Ma, and Amin Doostmohammadi. This work looks at how the relation between density and velocity in epithelial monolayers changes with observation scale.",
      "photography.hero.title": "A small visual notebook.",
      "photography.hero.text": "I like images that feel observed rather than hunted: streets, interiors, quiet light, and the small evidence that a day had its own mood.",
      "photography.gallery.label": "Gallery",
      "photography.gallery.title": "Frames in progress.",
      "photography.gallery.empty": "The gallery is waiting for its first batch of photographs.",
      "footer.backTop": "Back to top",
      "footer.home": "Home"
    },
    zh: {
      "page.home.title": "卢亨东",
      "page.home.description": "卢亨东是 EPFL 物理学博士生，研究生物物理、主动物质与生命系统中的非平衡物理。",
      "page.photography.title": "摄影 | 卢亨东",
      "page.photography.description": "卢亨东的摄影小页面。",
      "lang.toggleAria": "切换语言",
      "nav.about": "关于",
      "nav.life": "生活",
      "nav.photography": "摄影",
      "nav.contact": "联系",
      "nav.publication": "论文",
      "home.hero.eyebrow": "EPFL 物理学博士生",
      "home.hero.bio": "我目前是 EPFL 的物理学博士生。来到洛桑之前，我在南方科技大学获得物理学学士学位，随后在哥本哈根大学尼尔斯·玻尔研究所获得物理学硕士学位。",
      "home.hero.research": "我的研究兴趣主要围绕生物物理和主动物质。我发展自下而上的模型来描述活性系统，并熟悉且正在使用连续介质和多相场框架。我关注具有表型异质性的生物系统，包括细菌菌落和真核细胞组织；我也把这些系统看作检验更广泛复杂系统非平衡理论的实验场。",
      "home.hero.outside": "在学术之外，我的兴趣比较广泛，包括摄影、融合爵士和简单设计。",
      "home.hero.readMore": "继续了解",
      "home.hero.contactAria": "联系方式",
      "home.hero.credit": "背景图由 OpenAI Image2 生成。",
      "home.about.title": "物理学，靠近生命系统。",
      "home.about.p1": "我喜欢那些必须经受真实系统考验的理论。细胞会改变状态，细菌会在不均匀的环境中生长，组织也能在没有中央指挥者的情况下作出集体决定。这正是我觉得美的物理情境。",
      "home.about.p2": "在我关注的具有表型异质性的生物系统中，微观单元会主动消耗能量并打破细致平衡，使系统呈现出丰富而复杂的非平衡动力学。它们也会根据环境改变自身的力学性质，并反过来重塑环境。这样的反馈和适应让我们对这些系统的理解变得格外困难。",
      "home.about.p3": "这也让它成为主动物质前沿理论的严苛试验场：主动湍流、缺陷介导的动力学、运动诱导相分离、非互易耦合等等。我研究表型异质性如何作为内部状态变量进入这些理论，并与运动、生长、黏附和主动应力耦合，从而塑造远离平衡态的集体动力学。",
      "home.life.title": "方程之外的一些事。",
      "home.life.photoTitle": "小小观察，留在画面里。",
      "home.life.photoText": "我喜欢摄影，因为它奖励耐心，却不需要大声解释。摄影页里放着一些我喜欢的片刻。",
      "home.life.photoPreviewAria": "打开摄影作品集",
      "home.life.openGallery": "打开作品集",
      "home.life.musicLabel": "音乐",
      "home.life.musicTitle": "温暖的 fusion 质感。",
      "home.life.musicText": "我喜欢现代而松弛的 fusion 风格：Nujabes 的柔和摇摆、FKJ 发光的键盘语言，以及那种像房间慢慢亮起来的音乐。",
      "home.life.playerAria": "Spotify 曲目链接",
      "home.life.spotifyButton": "播放",
      "home.life.spotifyAria": "在 Spotify 打开 Luv (sic) pt 4 Instrumentals",
      "home.life.trackTitle": "Luv (sic) pt 4 Instrumentals",
      "home.life.trackMeta": "Nujabes · 跳转到 Spotify",
      "home.life.watchLabel": "腕表",
      "home.life.watchTitle": "并不富有的腕表爱好者。",
      "home.life.watchText": "我喜欢腕表，但并没有幻想中的预算。于是我设计了自己的表，并联系工厂把它做了出来：一个介于工程、审美、耐心和克制之间的小物件。",
      "home.contact.title": "欢迎联系。",
      "home.contact.text": "如果你也在思考生命物质、主动系统、摄影、音乐、腕表，或者它们之间一些奇妙的交集，我很乐意收到你的消息。",
      "home.contact.email": "给我发邮件",
      "home.publication.title": "论文",
      "home.publication.paperTitle": "上皮单层中的密度-速度关系具有尺度依赖性",
      "home.publication.text": "Hengdong Lu、Tianxiang Ma 和 Amin Doostmohammadi。 这项工作研究了上皮单层中密度与速度之间的关系如何随观察尺度改变。",
      "photography.hero.title": "一本小小的视觉笔记。",
      "photography.hero.text": "我喜欢那些像是被观察到、而不是被捕猎到的图像：街道、室内、安静的光，以及某一天确实拥有自己情绪的小证据。",
      "photography.gallery.label": "作品集",
      "photography.gallery.title": "一些进行中的画面。",
      "photography.gallery.empty": "作品集还在等待第一批照片。",
      "footer.backTop": "回到顶部",
      "footer.home": "主页"
    }
  };

  let currentLanguage = localStorage.getItem("siteLanguage") || "en";

  function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
  }

  function applyTranslations(language) {
    currentLanguage = language;
    localStorage.setItem("siteLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((entry) => {
        const [attr, key] = entry.split(":");
        if (attr && key) {
          element.setAttribute(attr.trim(), t(key.trim()));
        }
      });
    });

    const page = document.body.dataset.page || "home";
    document.title = t(`page.${page}.title`);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t(`page.${page}.description`));

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.textContent = currentLanguage === "en" ? "中文" : "EN";
      button.setAttribute("aria-pressed", currentLanguage === "zh" ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(currentLanguage === "en" ? "zh" : "en");
    });
  });

  applyTranslations(currentLanguage);

  document.querySelectorAll("[data-contact-jump]").forEach((link) => {
    link.addEventListener("click", () => {
      window.setTimeout(() => {
        const contactLinks = document.querySelector("#contact-links");
        if (!contactLinks) return;
        contactLinks.classList.remove("is-flashing");
        void contactLinks.offsetWidth;
        contactLinks.classList.add("is-flashing");
      }, 360);
    });
  });

  const gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    const emptyState = document.querySelector("[data-gallery-empty]");
    const items = Array.from(gallery.querySelectorAll(".gallery-item"));
    let pending = items.length;
    let visible = 0;

    if (items.length === 0) {
      emptyState?.classList.add("is-visible");
      return;
    }

    const updateEmptyState = () => {
      if (pending === 0 && visible === 0 && emptyState) {
        emptyState.classList.add("is-visible");
      }
    };

    items.forEach((item) => {
      const image = item.querySelector("img");
      image.addEventListener("load", () => {
        visible += 1;
        pending -= 1;
        updateEmptyState();
      });
      image.addEventListener("error", () => {
        pending -= 1;
        item.remove();
        updateEmptyState();
      });
    });
  }
})();
