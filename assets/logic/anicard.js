import { VNS_panel, EL_panel} from './hp_panel.js';
import { MNav, Collapse_Btn } from './hp_mobileNav.js';
import { init_card_display } from './hp_middle.js';
import { VideoData_Card } from './video_dataset.js';
import { downloads_loading } from './downloads.js';

import { StudyMaterial_Card } from './study_material.js';

const VISITED_PAGE_ARR = [];
const VISIT_PAGE = function (page_name = "", callback) {
    if(page_name.length <= 0) {
        return ;
    }
    VISITED_PAGE_ARR.push(page_name);
    callback();
}

// const IS_PAGE_EXISTED = function (page_name = "") {
//     if(page_name.length > 0 && VISITED_PAGE_ARR.indexOf(page_name) >= 0) {
//         return true;
//     }

//     return false;
// }

export const vns_method_to_btn_name = str => {
    str = str || "";
    if(typeof str !== "string") return str;
    return str.substring(0, 1).toUpperCase() + str.substring(1);
};

window.onload = function () {
    // 定位到tab
    VISIT_PAGE("home", openHomepage_ex);



    
    // openVideoDataset();
    // openDownloads();
    // openAbout();

    // setTimeout(() => 
    //     confirm("    目前 \[Homepage页面\] 正处于在结构整理与重建期，目前卡片信息除新增GIF文件以外已经全部导入。交互功能除GIF放大模态框功能外已全部开启。\n\n注：卡片和筛选栏icon图片将在 本周末 统一调整位置后上传，届时将向官网迁移全部内容，其他视觉和交互优化将会在下周陆续完成。 \n\n    2020\/12\/23")
    //     , 2400);
    
    // 搜索框重新绑定
    
    // 导航栏事件绑定
    document.querySelectorAll(".navbar-item").forEach((tab, i, nodes) => {
        let tab_name = tab.getAttribute("name");
        let callback;
        tab.onclick = function() {
            navRelocation(tab_name);
            if(tab_name === "home") {
                callback = openHomepage_ex;
            }
            if(tab_name === "StudyMaterial") {
                callback = openStudyMaterial;
            }
            
            if(tab_name === "gallery") {
                // callback = openVideoDataset;
                callback = openGalleryDataset;
            }

            if(tab_name === "about") {
                callback = openAbout;
            }
            if(tab_name === "downloads") {
                callback = openDownloads;
            }
            
            if(tab_name === "about2") {
                callback = openAbout2;
            }

            VISIT_PAGE(tab_name, callback);
        };
    });
    
}

function navRelocation(name = "") {
    name = name || "home";
    // console.log(name + " tab clicked.");

    document.querySelectorAll(".navbar-item").forEach((tab, i, nodes) => {
        if(tab.getAttribute("name") === name) {
            if(!tab.classList.contains("active")) {
                tab.classList.add("active");
            }
        } else {
            if(tab.classList.contains("active")) {
                tab.classList.remove("active");
            }
        }
    });

    document.querySelector("main").innerHTML = "";
}

/* page loading methods */
function openHomepage_ex() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/homepage_ex.html",
        url: "./assets/static/homepage_ex.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            Homepage_ex_loading();
 
        }
    });


   
}



function openStudyMaterial() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/studymaterial.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            StudyMaterial_loading();
        }
    });
}

function openVideoDataset() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/videodataset.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            videoDataset_loading();
        }
    });
}

function openGalleryDataset() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/gallery.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            // videoDataset_loading();
            gallery_loading();
        }
    });
}


function openDownloads() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/downloads.html",
        url: "./assets/static/downloads.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            downloads_loading();
        }
    });
}


function openAbout() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/about.html",
        url: "./assets/static/about.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            $("#official-side").tooltip({ title: "learn more about iDVx Lab" });
            downloads_loading();
        }
    });
}

function openAbout2() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/about.html",
        url: "./assets/static/about2.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            $("#official-side").tooltip({ title: "learn more about iDVx Lab" });
            downloads_loading();
        }
    });
}

// 左侧导航顺序
function Homepage_ex_loading() {
    
    const mobile_nav_node = document.querySelector(".mobile-nav-scrollSpy");
    const sidebar_node = document.getElementById("sidebar-ex");
    const card_display_node = document.getElementById("card-display-ex");

    const vns_extraNode_html = `<span class="scrollSpy-btn-stop"></span>`;
    const vns_extraClass_toA_arr = ["${VNS_tag}"];
    const vns_extraAttribute_toA = {href: "#${VNS_tag}"};
    const el_extraClass_toA_arr = ["el-${EL_tag}", "active"];
    const chart_extraClass_toA_arr = ["chart-${Chart_tag}", "active"];
    const mn_extraClass_toA_arr = ["${VNS_tag}"];
    const mn_extraAttribute_toA = {"data-target": "#${VNS_tag}"};

    MNav.fillContainer(mobile_nav_node, mn_extraClass_toA_arr, mn_extraAttribute_toA, vns_method_to_btn_name);

    VNS_panel.appendTo(sidebar_node, vns_extraNode_html, vns_extraClass_toA_arr, vns_extraAttribute_toA, vns_method_to_btn_name);
    
    // Chart_panel.appendTo(sidebar_node, "", chart_extraClass_toA_arr, {});
    EL_panel.appendTo(sidebar_node, "", el_extraClass_toA_arr, {});

    const collapse_btn = new Collapse_Btn('.mobile-nav-btn', '#sidebar-ex', '.mobile-nav-scrollSpy');

    init_card_display(card_display_node);
    searchBox_EventListener(card_display_node);
    modal_EventListener();

    setTimeout (() => {
    //这里我想通过找到名字为el-Pie-chart的div盒子，然后在这个盒子的后面加上h3标题Chart Types
    console.log ('新增代码');

    var chart_node = document.getElementsByClassName("sidebar-panel-group");
    console.log(chart_node);

    var chart_child_node = chart_node[1].childNodes;
    console.log(chart_child_node);

    var chart_child_that_node = chart_child_node[2];
    console.log(chart_child_that_node);

    var chart_child_that_node = chart_child_node[3];
    console.log(chart_child_that_node);

    chart_child_that_node.insertAdjacentHTML('afterend', '<h3 class="sidebar-panel-title sidebar-panel-title-editorial">Output</h3>');

    }, 100);


}

/* homepage init related methods */
function searchBox_EventListener(card_display_node = new HTMLElement()) {
    const SEARCH_BOX = document.querySelector(".searchbox-input");
    const BUTTON = document.querySelector(".searchbox-button");

    document.querySelector(".searchbox-button").onclick = () => {
        let search_text = document.querySelector(".searchbox-input").value;
        init_card_display(card_display_node, search_text);
    }
    document.querySelector(".searchbox-input").onfocus = () => {
        document.querySelector(".searchbox-input").value = "";
    }
    document.querySelector(".searchbox-input").onblur = () => {
        let search_text = document.querySelector(".searchbox-input").value;
        document.querySelector(".searchbox-input").value = search_text ? search_text: "Search";
        // if(!search_text) {
        //     init_card_display(card_display_node);
        //     document.querySelector("input").value = "Search";
        // }
    }
    document.querySelector(".searchbox-input").onkeydown = () => {
        if(event.keyCode === 13) {
            let search_text = document.querySelector(".searchbox-input").value;
            init_card_display(card_display_node, search_text);
        }
    }
}

function modal_EventListener () {
    const modal_content_node = document.querySelector(".modal-content");
    $('#zooming-modal').on('hidden.bs.modal', function() {
        modal_content_node.className = "modal-content";
    });
    $('.modal-title').tooltip({title: "visit the data video"});
}


/* video dataset page init method */
const video_dataset_url = "./assets/json/video_dataset.json";
function videoDataset_loading() {
    const video_deck_node = document.querySelector(".video-deck");
    const empty_deck_node = document.querySelector("#empty-deck-single");

    $.getJSON(video_dataset_url, json => {

        // console.log("Cards loading ......");

        $.each(json, (i, video_item) => {
            // create card object
            let {
                id, video_title, year, video_source, video_link
            } = video_item;

            let vd_object = new VideoData_Card(video_item);

            // insert card object to the deck
            vd_object.appendTo(video_deck_node, empty_deck_node);

            if(i === json.length - 1) {
                // console.log("All cards were loaded on the page.");
            }
        });
    });
}
function gallery_loading() {
    const video_deck_node = document.querySelector(".video-deck");
    const empty_deck_node = document.querySelector("#empty-deck-single");

    // $.getJSON(video_dataset_url, json => {

    //     // console.log("Cards loading ......");

    //     $.each(json, (i, video_item) => {
    //         // create card object
    //         let {
    //             id, video_title, year, video_source, video_link
    //         } = video_item;

    //         let vd_object = new VideoData_Card(video_item);

    //         // insert card object to the deck
    //         vd_object.appendTo(video_deck_node, empty_deck_node);

    //         if(i === json.length - 1) {
    //             // console.log("All cards were loaded on the page.");
    //         }
    //     });
    // });
}


const studymaterial_url = "./assets/json/study_material.json";
function StudyMaterial_loading() {
    const joy1_deck_node = document.querySelector(".joy-deck1");
    const piece1_deck_node = document.querySelector("#piece1");

    const joy2_deck_node = document.querySelector(".joy-deck2");
    const piece2_deck_node = document.querySelector("#piece2");

    const joy3_deck_node = document.querySelector(".joy-deck3");
    const piece3_deck_node = document.querySelector("#piece3");

    const joy4_deck_node = document.querySelector(".joy-deck4");
    const piece4_deck_node = document.querySelector("#piece4");

    const joy5_deck_node = document.querySelector(".joy-deck5");
    const piece5_deck_node = document.querySelector("#piece5");

    const joy6_deck_node = document.querySelector(".joy-deck6");
    const piece6_deck_node = document.querySelector("#piece6");


    const amusement7_deck_node = document.querySelector(".amusement-deck7");
    const piece7_deck_node = document.querySelector("#piece7");

    const amusement8_deck_node = document.querySelector(".amusement-deck8");
    const piece8_deck_node = document.querySelector("#piece8");

    const amusement9_deck_node = document.querySelector(".amusement-deck9");
    const piece9_deck_node = document.querySelector("#piece9");

    const amusement10_deck_node = document.querySelector(".amusement-deck10");
    const piece10_deck_node = document.querySelector("#piece10");

    const amusement11_deck_node = document.querySelector(".amusement-deck11");
    const piece11_deck_node = document.querySelector("#piece11");

    const amusement12_deck_node = document.querySelector(".amusement-deck12");
    const piece12_deck_node = document.querySelector("#piece12");


    const surprise13_deck_node = document.querySelector(".surprise-deck13");
    const piece13_deck_node = document.querySelector("#piece13");

    const surprise14_deck_node = document.querySelector(".surprise-deck14");
    const piece14_deck_node = document.querySelector("#piece14");

    const surprise15_deck_node = document.querySelector(".surprise-deck15");
    const piece15_deck_node = document.querySelector("#piece15");

    const surprise16_deck_node = document.querySelector(".surprise-deck16");
    const piece16_deck_node = document.querySelector("#piece16");

    const surprise17_deck_node = document.querySelector(".surprise-deck17");
    const piece17_deck_node = document.querySelector("#piece17");

    const surprise18_deck_node = document.querySelector(".surprise-deck18");
    const piece18_deck_node = document.querySelector("#piece18");


    const tenderness19_deck_node = document.querySelector(".tenderness-deck19");
    const piece19_deck_node = document.querySelector("#piece19");

    const tenderness20_deck_node = document.querySelector(".tenderness-deck20");
    const piece20_deck_node = document.querySelector("#piece20");

    const tenderness21_deck_node = document.querySelector(".tenderness-deck21");
    const piece21_deck_node = document.querySelector("#piece21");

    const tenderness22_deck_node = document.querySelector(".tenderness-deck22");
    const piece22_deck_node = document.querySelector("#piece22");

    const tenderness23_deck_node = document.querySelector(".tenderness-deck23");
    const piece23_deck_node = document.querySelector("#piece23");

    const tenderness24_deck_node = document.querySelector(".tenderness-deck24");
    const piece24_deck_node = document.querySelector("#piece24");


    const excitement25_deck_node = document.querySelector(".excitement-deck25");
    const piece25_deck_node = document.querySelector("#piece25");

    const excitement26_deck_node = document.querySelector(".excitement-deck26");
    const piece26_deck_node = document.querySelector("#piece26");

    const excitement27_deck_node = document.querySelector(".excitement-deck27");
    const piece27_deck_node = document.querySelector("#piece27");

    const excitement28_deck_node = document.querySelector(".excitement-deck28");
    const piece28_deck_node = document.querySelector("#piece28");

    const excitement29_deck_node = document.querySelector(".excitement-deck29");
    const piece29_deck_node = document.querySelector("#piece29");

    const excitement30_deck_node = document.querySelector(".excitement-deck30");
    const piece30_deck_node = document.querySelector("#piece30");

    





    $.getJSON(studymaterial_url, json => {

        // console.log("Cards loading ......");

        $.each(json, (i, video_item) => {
            // create card object
            let {
                id, title, year, video_source, video_link, emotion
            } = video_item;

            if (id <= 4) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy1_deck_node, piece1_deck_node);
            }
            else if (id <= 8) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy2_deck_node, piece2_deck_node);
            }
            else if (id <= 12) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy3_deck_node, piece3_deck_node);
            }
            else if (id <= 16) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy4_deck_node, piece4_deck_node);
            }
            else if (id <= 20) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy5_deck_node, piece5_deck_node);
            }
            else if (id <= 24) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(joy6_deck_node, piece6_deck_node);
            }
            else if (id <= 28) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement7_deck_node, piece7_deck_node);
            }
            else if (id <= 32) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement8_deck_node, piece8_deck_node);
            }
            else if (id <= 36) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement9_deck_node, piece9_deck_node);
            }
            else if (id <= 40) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement10_deck_node, piece10_deck_node);
            }
            else if (id <= 44) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement11_deck_node, piece11_deck_node);
            }
            else if (id <= 48) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(amusement12_deck_node, piece12_deck_node);
            }
            


            else if (id <= 54) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise13_deck_node, piece13_deck_node);
            }
            else if (id <= 60) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise14_deck_node, piece14_deck_node);
            }
            else if (id <= 66) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise15_deck_node, piece15_deck_node);
            }
            else if (id <= 72) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise16_deck_node, piece16_deck_node);
            }
            else if (id <= 78) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise17_deck_node, piece17_deck_node);
            }
            else if (id <= 84) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(surprise18_deck_node, piece18_deck_node);
            }

            else if (id <= 89) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness19_deck_node, piece19_deck_node);
            }
            else if (id <= 94) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness20_deck_node, piece20_deck_node);
            }
            else if (id <= 99) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness21_deck_node, piece21_deck_node);
            }
            else if (id <= 104) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness22_deck_node, piece22_deck_node);
            }
            else if (id <= 109) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness23_deck_node, piece23_deck_node);
            }
            else if (id <= 114) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(tenderness24_deck_node, piece24_deck_node);
            }


            else if (id <= 120) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement25_deck_node, piece25_deck_node);
            }
            else if (id <= 126) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement26_deck_node, piece26_deck_node);
            }
            else if (id <= 132) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement27_deck_node, piece27_deck_node);
            }
            else if (id <= 138) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement28_deck_node, piece28_deck_node);
            }
            else if (id <= 144) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement29_deck_node, piece29_deck_node);
            }
            else if (id <= 150) {
                let vd_object = new StudyMaterial_Card(video_item);
                vd_object.appendTo(excitement30_deck_node, piece30_deck_node);
            }

            // insert card object to the deck
            

            if(i === json.length - 1) {
                // console.log("All cards were loaded on the page.");
            }
        });
    });

    // mouse_EventListener();
}

