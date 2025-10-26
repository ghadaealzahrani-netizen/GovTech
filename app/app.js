        button: function (e, a, i, s, t, n, l, r) {
                add_margin(a, i);
                var o = elem("div", a, {
                                cls: "section flex_center"
                        }),
                        c = elem("div", o, {
                                cls: "col1"
                        }),
                        d = elem("button", c, {
                                cls: `button ${t} animate1`,
                                html: LANG.get(s)
                        });
                if (d.dest = l ? l.replace("${root}", APP.location) : l, d.trg = a, r) {
                        var m = elem("div", d, {
                                cls: "icon right icon15"
                        });
                        $(m).append(icons[r + "15"])
                }
                switch (n) {
                        case "internal":
                                $(d).on("click", function () {
                                        UI.open_left_panel(this.dest)
                                });
                                break;
                        case "external":
                                $(d).on("click", function () {
                                        window.open(this.dest)
                                });
                                break;
                        case "navigate":
                                $(d).on("click", function () {
                                        window.location.href = this.dest
                                });
                                break;
                        case "content":
                                $(d).on("click", function () {
                                        MOD.open_content_modal(this.dest, {
                                                updateHistory: !0
                                        })
                                });
                                break;
                        case "email":
                                $(d).on("click", function () {
                                        window.open("mailto:" + this.dest)
                                });
                                break;
        popup: function (e, a, i, s, t, n) {
                var l = elem("div", overlays, {
                        cls: `popup ${e} ${a} ${i} shadow animate2`
                });
                switch (l.x = elem("div", l, {
                        cls: "popup_x icon15 animate1",
                        apnd: icons.x15
                }), l.x.parent = l, l.type = e, e) {
                        case "alert":
                                $(l).on("click", function () {
                                        this.close()
                                });
                                break;
                        case "modal":
                                $(l.x).on("click", function () {
                                        this.parent.close()
                                })
                l.close = function () {
                        $(this).removeClass("on"), "modal" == this.type && UI.show_fog(!1), setTimeout(() => {
                                this.wick && $(this.wick).stop(), $(this).remove()
                        }, animate2)
                }, setTimeout(() => {
                        $(l).addClass("on"), "modal" == e && UI.show_fog(!0)
                }, 100);
                return l
        },
        open_content_modal: function (e, a) {
                if (!e || !content[e]) return null;
                APP.active_story_modal && (APP.active_story_modal.removeStoryParamOnClose = !1, APP.active_story_modal.close());
                var t = a || {}, n = void 0 !== t.paramValue ? t.paramValue : e.replace(/^success_stories_/, ""), l = !1 !== t.updateHistory && n, r = MOD.popup("modal", "", "", !1, !1, content[e]);
                if (!r) return null;
                r.storyKey = e, r.storyParamValue = n, l && (function () {
                        var e = new URL(window.location.href);
                        e.searchParams.set("stories", n), window.history.replaceState({
                                page: e.toString()
                        }, "", e.toString())
                }(), r.removeStoryParamOnClose = !0);
                var o = r.close;
                r.close = function () {
                        this.removeStoryParamOnClose && (function () {
                                var e = new URL(window.location.href);
                                e.searchParams.delete("stories"), window.history.replaceState({
                                        page: e.toString()
                                }, "", e.toString())
                        })();
                        o && o.call(this), APP.active_story_modal === r && (APP.active_story_modal = null)
                }, APP.active_story_modal = r;
                return r
        },
        welcome: {
                en: "welcome",
                "pt-br": "bem vindos",
                es: "bien venidos",
                fr: "bienvenue",
                de: "willkommen",
                ar: "الرئيسية"
        },
global_success_stories: {
en: "global success stories",
"pt-br": "",
es: "",
fr: "",
de: "",
ar: "قصص النجاح العالمية"
},
local_success_stories: {
en: "local success stories",
"pt-br": "",
es: "",
fr: "",
de: "",
ar: "قصص النجاح المحلية"
},
view_case_study: {
en: "View case study",
"pt-br": "",
es: "",
fr: "",
de: "",
ar: "عرض القصة"
},
none: {
                en: "none",
                "pt-br": "nenhum",
                es: "nada",
                fr: "aucun",
}, set("m_menu_bt"), set("m_radar_bt"), set("m_feedback_bt"), set("m_user_bt"), set("m_ev_logo"), set("m_menu_container"), set("m_minipanel"), set("m_minify_entity"), set("m_project"), set("m_title"), set("user_bt"), set("logout"), set("logout_email"), set("logout_bt"), set("temp_style"), set("container"), set("overlays"), set("fog"), set("preloader"), set("card_preloader"), set("card_preloader_spinner"), set("menu_container"), UI.menu = get("menu"), set("menu_c"), set("menu_b"), set("left_bar"), set("right_bar"), set("ev_logo"), set("version"), set("app_name"), set("feedback_bt"), set("chart"), set("svg_container"), set("left_panel"), set("right_panel"), set("panel_slider"), panel_slider.book = get("book"), panel_slider.card = get("card"), set("left_panel_x"), set("left_panel_back"), set("right_panel_x"), left_panel.side = "left", right_panel.side = "right", set("zoom_in"), set("zoom_out"), set("zoom_slider_handler"), set("header"), set("main_title"), set("project"), set("title"), set("loading_feedback"), set("loading_feedback_num"), UI.options_dd = get("options"), set("options_top"), set("options_uis"), set("options_ui"), set("options_menu"), set("options_lists"), set("options_title"), set("options_a11y_description"), set("options_ui_top"), set("options_toggle_button"), set("tooltip"), set("tooltip_tb"), set("tooltip_lb"), set("tooltip_desc"), set("tooltip_a11y_desc"), set("tooltip_arrow"), set("tip"), set("tip_info"), set("tip_label"), set("about_content"), set("related_projects_list"), set("related_projects_title"), set("share"), set("twitter_share"), set("fbook_share"), set("in_share"), set("email_share"), UI.panel_welcome = get("panel_welcome"), UI.panel_welcome.container = get("welcome_container"), UI.panel_welcome.footer = get("welcome_footer"), UI.panel_success_stories_global = get("panel_success_stories_global"), UI.panel_success_stories_global.container = get("success_stories_global_container"), UI.panel_success_stories_global.footer = get("success_stories_global_footer"), UI.panel_success_stories_local = get("panel_success_stories_local"), UI.panel_success_stories_local.container = get("success_stories_local_container"), UI.panel_success_stories_local.footer = get("success_stories_local_footer"), UI.panel_about = get("panel_about"), UI.panel_about.container = get("about_container"), UI.panel_about.footer = get("about_footer"), UI.panel_entities = get("panel_entities"), set("search_entity_str"), set("search_entity_x"), set("search_entities"), set("entities_list"), set("n_entities"), UI.panel_collections = get("panel_collections"), set("collections_list"), UI.panel_scenarios = get("panel_scenarios"), set("scenarios_list"), UI.panel_tags = get("panel_tags"), set("search_tags"), set("search_tag_str"), set("search_tag_x"), set("tags_list"), UI.panel_metrics = get("panel_metrics"), set("metrics_container"), set("metrics_content"), set("surveys_content"), set("surveys_preloader"), UI.panel_groups = get("panel_groups"), set("search_groups"), set("search_group_str"), set("search_group_x"), set("n_groups"), panel_groups.footer = get("panel_groups_footer"), set("lamp"), set("lamp_icon"), set("lamp_label"), set("lamp_location"), set("lamp_title"), set("lamp_x"), UI.entity_card = get("entity_card"), UI.entity_card.header = get("entity_card_header"), UI.entity_card.top = get("entity_card_top"), UI.entity_card.content = get("entity_card_content"), UI.entity_card.bottom = get("entity_card_bottom"), UI.entity_card.footer = get("entity_card_footer"), UI.entity_card.container = $(UI.entity_card).find(".container"), UI.collection_card = get("collection_card"), UI.collection_card.header = get("collection_card_header"), UI.collection_card.top = get("collection_card_top"), UI.collection_card.content = get("collection_card_content"), UI.collection_card.related = get("collection_card_related"), UI.collection_card.bottom = get("collection_card_bottom"), UI.collection_card.footer = get("collection_card_footer"), UI.collection_card.container = $(UI.collection_card).find(".container"), UI.scenario_card = get("scenario_card"), UI.scenario_card.header = get("scenario_card_header"), UI.scenario_card.top = get("scenario_card_top"), UI.scenario_card.content = get("scenario_card_content"), UI.scenario_card.related = get("scenario_card_related"), UI.scenario_card.bottom = get("scenario_card_bottom"), UI.scenario_card.footer = get("scenario_card_footer"), UI.scenario_card.container = $(UI.scenario_card).find(".container"), UI.tag_card = get("tag_card"), UI.tag_card.header = get("tag_card_header"), UI.tag_card.top = get("tag_card_top"), UI.tag_card.content = get("tag_card_content"), UI.tag_card.related = get("tag_card_related"), UI.tag_card.bottom = get("tag_card_bottom"), UI.tag_card.footer = get("tag_card_footer"), UI.tag_card.container = $(UI.tag_card).find(".container"), UI.group_card = get("group_card"), UI.group_card.header = get("group_card_header"), UI.group_card.top = get("group_card_top"), UI.group_card.content = get("group_card_content"), UI.group_card.related = get("group_card_related"), UI.group_card.bottom = get("group_card_bottom"), UI.group_card.footer = get("group_card_footer"), UI.group_card.container = $(UI.group_card).find(".container"), UI.bts = [], UI.cards = [UI.entity_card, UI.group_card, UI.collection_card, UI.scenario_card, UI.tag_card], UI.force_theme = function (e) {
	UI.create_collections_list(collections_list), UI.create_entities_list(entities_list, "all", !1, !0), MOD.check_page_mode(json.project, UI.panel_welcome, content.welcome), MOD.check_page_mode(json.project, UI.panel_success_stories_global, {page_mode:"single_page",modules:content.success_stories_global}), MOD.check_page_mode(json.project, UI.panel_success_stories_local, {page_mode:"single_page",modules:content.success_stories_local}), MOD.check_page_mode(json.project, UI.panel_about, content.about)
	if (APP.active_story_panel && !APP.skip_story_history_update) {
		var e = new URL(window.location.href);
		e.searchParams.delete("stories"), window.history.replaceState({
			page: e.toString()
		}, "", e.toString())
	}
	APP.active_story_panel = null;
	APP.skip_story_history_update = !1;
	var n = 0 === e.indexOf("success_stories_");
	if (n) {
		APP.active_story_panel = e;
		if (t && !APP.skip_story_history_update) {
			var r = new URL(window.location.href);
			r.searchParams.set("stories", e.replace("success_stories_", "")), window.history.replaceState({
				page: r.toString()
			}, "", r.toString())
		}
	} else if (APP.active_story_panel) {
		if (t && !APP.skip_story_history_update) {
			var r = new URL(window.location.href);
			r.searchParams.delete("stories"), window.history.replaceState({
				page: r.toString()
			}, "", r.toString())
		}
		APP.active_story_panel = null
	} else APP.active_story_panel = null;
	APP.skip_story_history_update = !1;
		APP.current_panel.multi_pages && APP.current_panel.container.nav.call(0), t && APP.set_location(), UI.close_m_menu()
	}), UI.create_collections_list(collections_list), UI.create_scenarios_list(scenarios_list), UI.create_entities_list(entities_list, "all", !1, !0), UI.create_groups_list(groups_list, json.groups, "go"), UI.create_tags_list(tags_list), UI.create_metrics_list(metrics_content), UI.create_surveys_list(surveys_content), MOD.check_page_mode(json.project, UI.panel_welcome, content.welcome), MOD.check_page_mode(json.project, UI.panel_success_stories_global, {page_mode:"single_page",modules:content.success_stories_global}), MOD.check_page_mode(json.project, UI.panel_success_stories_local, {page_mode:"single_page",modules:content.success_stories_local}), MOD.check_page_mode(json.project, UI.panel_about, content.about), UI.entity_card.nav = elem("div", UI.entity_card.footer, {
APP.order = 0, APP.visited = [], APP.show_visited, APP.magnetic_label, APP.follow_selection, APP.show_circle_number, APP.get_pg, APP.current_card, APP.panel_side, APP.current_panel, APP.gql, APP.path = dev_mode ? "../../../app/" : "app/", APP.version = "", APP.surveys_loaded = !1, APP.active_story_modal = null, APP.active_story_panel = null, APP.skip_story_history_update = !1;
var e = $_GET();
if (APP.get_pg = e.pg || e.c || !1, console.log("check_get", APP.get_pg), APP.get_pg)
if (APP.get_pg.indexOf("_") > 0) {
var t = APP.get_pg.split("_"),
o = t[0] + "_",
n = t.splice(1).join("_");
console.log(o, n), UI.call_card(o, n, !1)
} else "explore" == APP.get_pg ? UI.close_panels() : UI.open_left_panel(APP.get_pg);
APP.handle_story_param(e)
console.log("pop-state!"), APP.check_get()
}), APP.handle_story_param = function (e) {
var t = e || $_GET(),
o = t.stories ? "success_stories_" + t.stories : !1;
if (o && UI["panel_" + o]) {
APP.skip_story_history_update = !0;
UI.nav_panel(o, !1, !1);
APP.skip_story_history_update = !1;
} else if (!t.stories && APP.active_story_panel) {
APP.skip_story_history_update = !0;
UI.close_panels();
APP.skip_story_history_update = !1;
}
}, APP.set_cookie = function (e, t, o) {
			var o = ["مرحبا بكم في رادار هيئة الحكومة الرقمية!", "يوفر رادار Govtech لمحة عن أفكار وابحاث في مرحلة التطوير لمساعدة الجهات الحكومية في التعرف على التقنيات الناشئة والتخطيط لها وتحديد حالات استخدام تهدف إلى تمكين الموارد الحكومية لتسريع تبني هذه التقنيات وتبني حلول مبتكرة مستقبلية في الحكومة الرقمية", "يحتوي هذا الرادار على 106 تقنيات تم تقييمها وفقا لمستوى جاهزية التقنية (Technology Readiness Level - TRL) وهو مقياس مطور من قبل وكالة ناسا للفضاء وتعتمده لتقييم تطور تقنياتها. من المستوى 1 (أدنى مستوى من نضوج التقنية) إلى المستوى 9 (يتم استخدام التقنية بالفعل والاستفادة منها في أنظمة جديدة). التقنيات في هذا الرادار تساعد فهم توجه العالم وعلى تصور شكل الحكومة الرقمية في المستقبل.", "تمت دراسة وتحليل جميع التقنيات وفقا لأهداف التنمية المستدامة للأمم المتحدة (SDGs) لتعزيز العلاقة بين تطور التقنية والممارسات المستدامة. تم وضع علامة على كل تقنية تضاف إلى الرادار وفقا لتصنيفها، من البرامج والأجهزة والأنظمة والمواد إلى نماذج وسياسات العمل.", "ايضا، تم فرز هذه التقنيات حسب سبع قطاعات، وتحتوي على مقالات تشرح أبرز الإنجازات المحققة في القطاعات العامة الرئيسية، هذه القطاعات هي: الرعاية الصحية، التعليم والتدريب، التنقل في الضواحي والمدن الذكية، السفر والسياحة والثقافة، التنمية الاجتماعية والعدل، الطاقة والثروات الطبيعية، التجارة والتمويل والاقتصاد.", "ندعوك الآن لاكتشاف هذه التقنيات وهذا الرادار التفاعلي الذي يساعد في تصور حكومة المستقبل."];
			"ar" === lg && (json.project.description = "<p>" + o.join("</p>\n<p>") + "</p>", $(json.collections).each(function (e, o) {
			}), $(json.entities).each(function (e, o) {
			})), extras.success_stories && (function () {
			var e = function (e) {
			return e ? e[lg] || e.en || "" : ""
			};
			var o = function (o) {
			var t = e(o.title),
			n = e(o.description),
			r = o.link ? ` <a href="${o.link}" target="_blank" rel="noopener">${LANG.get("view_case_study")}</a>` : "";
			return `<strong>${t}</strong><br>${n}${r}`
			};
			json.project.global_success_intro = e(extras.success_stories.global.intro), json.project.local_success_intro = e(extras.success_stories.local.intro), json.project.global_success_items = extras.success_stories.global.items.map(o), json.project.local_success_items = extras.success_stories.local.items.map(o)
})()
}